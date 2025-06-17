import {
  loginFormInitiaState,
  signupFormInitiaState,
} from "@/config/formControlle";
import { loginService, registerService } from "@/services";
import { createContext, useState } from "react";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [signinFormInitialData, setSigninFormInitialData] =
    useState(loginFormInitiaState);
  const [signupFormInitialData, setsignupFormInitialData] = useState(
    signupFormInitiaState
  );

  const handleRegisterUser = async(event) => {
    console.log("submitting");
    event.preventDefault();
    const data = await registerService(signupFormInitialData);
    console.log("user registered", data);
  };
  const handleLoginUser = async(event)=>{
    event.preventDefault();
    const data = await loginService(signinFormInitialData) 
    console.log(data)
  }

  return (
    <AuthContext.Provider
      value={{
        signinFormInitialData,
        setSigninFormInitialData,
        signupFormInitialData,
        setsignupFormInitialData,
        handleRegisterUser,
        handleLoginUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
