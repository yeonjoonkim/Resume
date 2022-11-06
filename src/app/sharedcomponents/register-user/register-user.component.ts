import { Component, OnInit } from '@angular/core';
import { UserFormValidationService } from 'src/app/services/userFormValidation/user-form-validation.service';
import { UserRegisterForm, UserRegisterFormValiationResult } from 'src/app/interface/forms/forms.interface';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})

export class RegisterUserComponent implements OnInit {
  emailAddress: string = '';
  firstName: string = '';
  lastName: string = '';
  marketingAgreement: boolean = true;
  password: string = '';
  confirmPassword: string = '';
  auth = getAuth();

  constructor(private formValidation: UserFormValidationService, private modalCtrl: ModalController, private toastCtrl: ToastController) { }

  ngOnInit() {}

  setRegisterForm(){
    let form: UserRegisterForm = {
      emailAddress: this.emailAddress.toLowerCase(),
      firstName: this.formValidation.captialisedName(this.firstName),
      lastName: this.formValidation.captialisedName(this.lastName),
      marketingAgreement: this.marketingAgreement,
      password: this.password
    };
    
    return form;
  }

  /** This sumit function is called when user field the register form*/
  async submit(){
    this.modalCtrl.dismiss();
    let form: UserRegisterForm = this.setRegisterForm();
    let submitResult: UserRegisterFormValiationResult = this.formValidation.validateUserForm(form, this.confirmPassword);
    //If Error occured throws error
    if(submitResult.error){
      let toast = await this.toastCtrl.create({
        message: submitResult.erroMsg,
        duration: 1500,
        position: 'middle',
      });
      await toast.present();
    }
    //save in Firestore
    else{
    }
  }
  
  dismiss(){
    this.modalCtrl.dismiss();
  }



}
