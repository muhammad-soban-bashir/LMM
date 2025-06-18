import {
  loginFormInitiaState,
  signupFormInitiaState,
} from "@/config/formControlle";
import { checkAuthService, loginService, registerService } from "@/services";
import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [signinFormInitialData, setSigninFormInitialData] =
    useState(loginFormInitiaState);
  const [signupFormInitialData, setsignupFormInitialData] = useState(
    signupFormInitiaState
  );
  const[auth, setAuth] = useState({
    authenticate:false,
    user:null
  })
  console.log(auth)

  const handleRegisterUser = async(event) => {
    console.log("submitting");
    event.preventDefault();
    const data = await registerService(signupFormInitialData);
    console.log("user registered", data);
  };
  const handleLoginUser = async(event)=>{
    event.preventDefault();
    const data = await loginService(signinFormInitialData) 
    console.log("data",data)
   if(data.success){
     sessionStorage.setItem("accessToken", JSON.stringify(data.accessToken))
    setAuth({
      authenticate:true,
      user:data.user
    });
   } else {
      setAuth({
        authenticate:false,
        user:null
      });
   }
  }


  const checkAuth = async()=>{
    const data = await checkAuthService();
    console.log("checkauth",data)
    if(data.success){
       setAuth({
      authenticate:true,
      user:data.user
    })
    } else {
      setAuth({
        authenticate:false,
        user:null
      });
    }
  }
 

  useEffect(()=>{
  checkAuth()
  },[])

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
