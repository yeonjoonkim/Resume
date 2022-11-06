import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserRegisterForm } from 'src/app/interface/forms/forms.interface';
import { ToastController } from '@ionic/angular';
import { FirebaseRepositoryService } from '../firebase/firebase-repository.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth, private toastCtrl: ToastController, private fireRepo: FirebaseRepositoryService) { }


  /**This function is to register the user to firebase authentication and store the user information into the firestore database*/
   async registerUserProfile(form: UserRegisterForm){
    return this.afAuth.createUserWithEmailAndPassword(form.emailAddress, form.password).then((result) => {
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
  
}
