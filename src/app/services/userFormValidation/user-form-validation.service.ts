import { Injectable } from '@angular/core';
import { UserRegisterForm, UserRegisterFormValiationResult } from 'src/app/interface/forms/forms.interface';

@Injectable({
  providedIn: 'root'
})
export class UserFormValidationService {

  constructor() { }

  /**This function is to validate and throw the error message
   * if the form value is incorrect format.
   */
  public validateUserForm(form: UserRegisterForm, confirmPassword: string){
    let result: UserRegisterFormValiationResult = {erroMsg: '', error: false};
    let emailValidation: boolean = form.emailAddress.includes('@') && form.emailAddress.includes('.');
    let hasAllFieldValue: boolean = this.containsAllFieldValue(form, confirmPassword)
    let passwordLengthValidation: boolean = form.password.length > 7 && form.password.length < 15;
    let matchPasswords: boolean = form.password === confirmPassword;

    if(!emailValidation){
      result.erroMsg = "The Email format is incorrect.";
      result.error = true;
    }
    else if(!hasAllFieldValue){
      result.erroMsg = "Enter the fields.";
      result.error = true;
    }
    else if(!passwordLengthValidation){
      result.erroMsg = "Enter the password between 8 and 14.";
      result.error = true;
    }
    else if(!matchPasswords){
      result.erroMsg = "The password is not matched.";
      result.error = true;
    }
    
    return result;
  }

  /** Refactor the string value to all words to be capitalised. */
  public captialisedName(name: string){
    let words: Array<string> = name.split(" ");
    return words.map(word => {
      return word[0].toUpperCase() + word.substring(1)}).join(" "); 
  }

  /** check if the fields have value */
  private containsAllFieldValue(form: UserRegisterForm, confirmPassword: string){
    let hasFirstName: boolean = this.hasValue(form.firstName);
    let hasLastName: boolean = this.hasValue(form.lastName);
    let hasEmail: boolean = this.hasValue(form.emailAddress);
    let hasPassword: boolean = this.hasValue(form.password);
    let hasConfirmedPassword: boolean = this.hasValue(confirmPassword);
    let lastName = this.captialisedName(form.lastName);
    return hasFirstName && hasLastName && hasEmail && hasPassword && hasConfirmedPassword;
  }

  /**check string length */
  private hasValue(value: string){
    return value.length > 0;
  }

}
