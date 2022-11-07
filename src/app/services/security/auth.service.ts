import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserRegisterForm } from 'src/app/interface/forms/forms.interface';
import { ToastController } from '@ionic/angular';
import { FirebaseRepositoryService } from '../firebase/firebase-repository.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { SecurityService } from './security.service';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { User } from 'firebase/auth';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly _defaultUserProfile: UserRegisterForm = {
    uid: '',firstName: '',lastName: '',emailAddress: '',password: '',
    marketingAgreement: false,isActive: false,createdDate: new Date()
  };
  private readonly testEmail: string = 'testMode@email.com';
  private readonly testPassword: string = 'Test1234!';
  public auth: Observable<User>;
  private userProfileService: BehaviorSubject<UserRegisterForm> = new BehaviorSubject<UserRegisterForm>(this._defaultUserProfile);
  userProfile: Observable<UserRegisterForm> = this.userProfileService.asObservable();
  
  constructor(
  private router:Router, 
  private security: SecurityService, 
  private firestore: AngularFirestore, 
  public afAuth: AngularFireAuth, 
  private toastCtrl: ToastController, 
  private fireRepo: FirebaseRepositoryService) {

    //watch auth status
    this.auth = this.afAuth.authState.pipe(
      switchMap((auth) => {
        if(auth){
          this.getUserProfile(auth.uid);
          return this.firestore.doc<User>(this.fireRepo.getUserProfileName()+'/${auth.uid}').valueChanges();
        }else {
          return of(null);
        }
    }));
  }

  /** This function is to get user information*/
  getUserProfile(uid: string){
    let query = this.firestore.collection<UserRegisterForm>(this.fireRepo.getUserProfileName()).ref.where('uid', '==', uid).limit(1);
    query.get().then((querySnapshot) => {
      if(querySnapshot.empty){
        return null
      }else{
        querySnapshot.forEach((doc) => {
          this.userProfileService.next(doc.data());
        })
      }
    });
  }

  /**This function is to login with email and password */
  async login(email: string, password: string){
    let accessData = this.security.getUserAccessInfo();
    this.afAuth.signInWithEmailAndPassword(email, password)
    .then(() => {
      this.showToast("You have sucessfully Login.");
      this.fireRepo.addUserLoginHistory(true, accessData, email, password);
    }).catch((err) => {
      this.showToast("" + err)
      this.fireRepo.addUserLoginHistory(false, accessData, email, password);
    });
  }

  /**This function is to logout and routing to home */
  async logout(){
    return this.afAuth.signOut().then(() => {
      this.userProfileService.next(this._defaultUserProfile)
      this.router.navigate(['/dashboard']);
    });
  }

  /**This function is to register the user to firebase authentication and store the user information into the firestore database*/
   async registerUserProfile(form: UserRegisterForm){
    return this.afAuth.createUserWithEmailAndPassword(form.emailAddress, form.password).then((result) => {
      form.uid = result.user.uid;
      this.fireRepo.addUserProfile(form, result.user.uid);
      this.showToast("You have sucessfully registered!");
    }).catch((err) => {
      this.showToast(err);
    });
  }

  /**this function is to alert user that the process
   * @msg: string
  */
  async showToast(msg: any){
    let toast = await this.toastCtrl.create({
      message: msg,
      duration: 1500,
      position: 'middle',
    });
    await toast.present();
  }

  getTestModePassword(){
    return this.testPassword;
  }

  getTestModeEmail(){
    return this.testEmail;
  }
  
}
