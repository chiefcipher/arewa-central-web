import { createContext } from "react";
export interface ISIGNUP_CONTEXT {
  setSignUpData : any , 
  signUpData : {
    role: string,
    fullName : string , 
    email: string,
    password: string,
    address: string,
    state: string,
    hasAgreedToTerms :boolean,
    country : string , 
    phoneNumber : string ,
    confirmPassword : string , 
  }
}
export const SignUpContext = createContext<ISIGNUP_CONTEXT>({
  setSignUpData : '' , 
  signUpData : {
    role: "",
    fullName:"" ,
    email: "",
    password: "",
    hasAgreedToTerms :false ,
    address: "",
    state: "",
    phoneNumber : "",
    country : "" ,
    confirmPassword : ""
  }
});

