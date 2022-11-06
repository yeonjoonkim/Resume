export interface UserRegisterForm{
   firstName: string;
   lastName: string;
   emailAddress: string;
   marketingAgreement: boolean;
   password: string;
   createdDate: Date;
   isActive: boolean;
 } 

 export interface UserRegisterFormValiationResult{
   erroMsg: string;
   error: boolean;
 }
