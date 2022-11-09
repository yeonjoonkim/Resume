import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AccessInfo } from '../../interface/security/security.interface'
import { UserRegisterForm } from 'src/app/interface/forms/forms.interface';
import { YeonJoonKimInfo } from 'src/app/interface/siteOwner/site.interface';

@Injectable({
  providedIn: 'root'
})

export class FirebaseRepositoryService {
  private readonly _accessHistory: string = 'UserAccessHistory';
  private readonly _userProfile: string = 'UserProfile';
  private readonly _userLoginHistory: string = 'UserLoginHistory';
  private readonly _yeonJoonKim: string = 'YeonJoonKim';
  private readonly _yeonJoonKimDataPacket: string = 'hwi263YVNYcLED4QqN6X';

  constructor( private firestore: AngularFirestore) { }

  public getUserProfileName(){
    return this._userProfile;
  }

  /**This function is to save the accessData to the accessHistory data collection.*/
  public addUserAccessLog(accessData: AccessInfo){
    this.firestore.collection(this._accessHistory).ref.add(accessData);
  }

  /**This function is to save the user profile using uid when new user trigger the submit register form.*/
  public addUserProfile(form: UserRegisterForm, uid: string){
    this.firestore.collection(this._userProfile).doc(uid).set(form);
  }

  /** This function is to save the user login action */
  public addUserLoginHistory(result: boolean, accessData: AccessInfo, emailAddress: string, password: string){
    let resultAction = {
      result: result,
      accessInfo: accessData,
      attemptedEmailAddress: emailAddress,
      password: password,
      timeStamp: new Date()
    };
    this.firestore.collection(this._userLoginHistory).ref.add(resultAction);
  }

  /** This function is to get the acess history */
  public async getAccessHistory(){
    let accessHistory: AccessInfo[][] = [];
    let query = this.firestore.collection<AccessInfo[]>(this._yeonJoonKim).ref.orderBy('timestamp', 'desc');
    await query.get().then((querySnapshot) => {
      if(querySnapshot.empty){
        return []
      }else{
        accessHistory = querySnapshot.docs.map(doc => doc.data());
      }
    });

    return accessHistory;
  }
  /** This function is to get yeon joon kim's information */
  public async getYeonJoonKimData(){
    let yeonjoonkim: YeonJoonKimInfo;
    let query = this.firestore.collection<YeonJoonKimInfo>(this._yeonJoonKim).ref.where('uid', '==', this._yeonJoonKimDataPacket).limit(1);
    await query.get().then((querySnapshot) => {
      if(querySnapshot.empty){
        return null
      }else{
        querySnapshot.forEach((doc) => {
          yeonjoonkim = doc.data();
        })
      }
    });
    console.log(yeonjoonkim)
    return yeonjoonkim;
  }
  
}
