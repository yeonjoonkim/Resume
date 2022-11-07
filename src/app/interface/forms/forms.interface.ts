export interface UserRegisterForm{
   firstName: string;
   lastName: string;
   emailAddress: string;
   marketingAgreement: boolean;
   password: string;
   createdDate: Date;
   isActive: boolean;
   uid: string;
 } 

 export interface UserRegisterFormValiationResult{
   erroMsg: string;
   error: boolean;
 }
