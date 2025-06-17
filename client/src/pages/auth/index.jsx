import {
  loginFormControlers,
  signupFormControlers,
} from "@/config/formControlle";
import CommonForm from "@/components/commonForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { GraduationCap } from "lucide-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "@/context/authContext";

const AuthPage = () => {
  const [activeTab, setActiveTab] = React.useState("signin");
  const {
    signinFormInitialData,
    setSigninFormInitialData,
    signupFormInitialData,
    setsignupFormInitialData,
    handleRegisterUser,
    handleLoginUser,
  } = useContext(AuthContext);

  const handleValueChange = (value) => {
    console.log(value)
    setActiveTab(value);
  };
  return (
    <div className="flex flex-col max-h-screen">
      <header className="flex items-center p-3 border-b bg-grey-200 ">
        <Link to="/" className=" flex gap-2 items-center">
          <GraduationCap className="h-8 w-8" />
          <span className="font-bold text-xl">LMS</span>
        </Link>
      </header>

      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
          <Tabs
            value={activeTab}
            defaultValue="signin"
            onValueChange={handleValueChange}
            className="w-full"
          >
            <TabsList className="grid w-full gep-2 grid-cols-2">
              <TabsTrigger
                value="signin"
                className=" m-2 text-lg font-medium bg-gray-200 rounded-2xl p-2  hover:bg-black hover:text-white cursor-pointer"
              >
                Login
              </TabsTrigger>
              <TabsTrigger
                value="signup"
                className="m-2 text-lg font-medium bg-gray-200 rounded-2xl p-2  hover:bg-black hover:text-white cursor-pointer"
              >
                Signup
              </TabsTrigger>
            </TabsList>
            <TabsContent value="signin" className="mt-4">
              <CommonForm
                buttonText={"Signin"}
                formController={loginFormControlers}
                formData={signinFormInitialData}
                setFormData={setSigninFormInitialData}
                handleSubmit={handleLoginUser}
              />
            </TabsContent>
            <TabsContent value="signup" className="mt-4">
              <CommonForm
                buttonText={"Signup"}
                formController={signupFormControlers}
                formData={signupFormInitialData}
                setFormData={setsignupFormInitialData}
                handleSubmit={handleRegisterUser}
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
