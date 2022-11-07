import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/security/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent implements OnInit {
  emailAddress: string = '';
  password: string = '';
  isTest: boolean = true;
  constructor(private auth:AuthService, private modalCtrl: ModalController, private toastCtrl: ToastController, private afAuth: AngularFireAuth) {}

  ngOnInit() {
    this.setEmailAndPassword()
    
    this.afAuth.user.subscribe(auth => {
      if(auth){
        this.dismiss();
      }
    });
  }

  /**This function is to login with params
   * @emailAdress-string;
   * @password-string;
   */
  async login(){
    await this.auth.login(this.emailAddress, this.password);
  }

  async showToast(msg: string){
    let toast = await this.toastCtrl.create({
      message: msg,
      duration: 1500,
      position: 'middle',
    });
    await toast.present();
  }

  /**This function is to dismiss LogInComponent*/
  dismiss(){
    this.modalCtrl.dismiss();
  }

  /**This function is load the test mode email and password */
  setTestModeLoginCriteria(){
    this.password = this.auth.getTestModePassword();
    this.emailAddress =this.auth.getTestModeEmail();
  }

  /**This function is to clear the email and password */
  clearTestModeLoginCriteria(){
    this.emailAddress = '';
    this.password = '';
  }

  /**This function is to set the login criteria*/
  setEmailAndPassword(){
    if(this.isTest){
      this.setTestModeLoginCriteria();
    }else{
      this.clearTestModeLoginCriteria();
    }
  }
}
