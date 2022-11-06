import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AccessInfo } from '../interface/security/security.interface'

@Injectable({
  providedIn: 'root'
})
export class FirebaseRepositoryService {
  private accessHistory: string = 'UserAccessHistory';
  constructor( private firestore: AngularFirestore) { }

  /**This function is to save the accessData to the accessHistory data collection.*/
  public addUserAccessLog(accessData: AccessInfo){
    this.firestore.collection(this.accessHistory).ref.add(accessData);
  }
}
