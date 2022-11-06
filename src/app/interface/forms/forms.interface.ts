export interface UserRegisterForm{
   firstName: string;
   lastName: string;
   emailAddress: string;
   marketingAgreement: boolean;
   password: string;
 } 

 export interface UserRegisterFormValiationResult{
   erroMsg: string;
   error: boolean;
 }
