import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AccessInfo } from '../../interface/security/security.interface'
import { UserRegisterForm } from 'src/app/interface/forms/forms.interface';
@Injectable({
  providedIn: 'root'
})
export class FirebaseRepositoryService {
  private readonly _accessHistory: string = 'UserAccessHistory';
  private readonly _userProfile: string = 'UserProfile';
  constructor( private firestore: AngularFirestore) { }

  /**This function is to save the accessData to the accessHistory data collection.*/
  public addUserAccessLog(accessData: AccessInfo){
    this.firestore.collection(this._accessHistory).ref.add(accessData);
  }

  public addUserProfile(form: UserRegisterForm, uid: string){
  }
}