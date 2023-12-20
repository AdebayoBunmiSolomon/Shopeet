import React, { createContext, useState } from "react";
import Toast from "react-native-toast-message";

export const UseAuthContext = createContext<any>(null);

export const UseAuthContextProvider = (props: any) => {
  const [signUpForm, setSignUpForm] = useState({
    fullname: "",
    phone: "",
    username: "",
    email: "",
    password: "",
  });

  const signUp = () => {
    if (!signUpForm.fullname.trim()) {
      Toast.show({
        type: "error",
        text1: "Sign-up error",
        text2: "Fullname is empty",
      });
      return null;
    }
    if (!signUpForm.phone.trim()) {
      Toast.show({
        type: "error",
        text1: "Sign-up error",
        text2: "Phone number is empty",
      });
      return null;
    }
    if (!signUpForm.username.trim()) {
      Toast.show({
        type: "error",
        text1: "Sign-up error",
        text2: "Username is empty",
      });
      return null;
    }
    if (!signUpForm.email.trim()) {
      Toast.show({
        type: "error",
        text1: "Sign-up error",
        text2: "Email is empty",
      });
      return null;
    }
    if (!signUpForm.password.trim()) {
      Toast.show({
        type: "error",
        text1: "Sign-up error",
        text2: "Password is empty",
      });
      return null;
    }
  };

  const contextValue = {
    signUp,
    signUpForm,
    setSignUpForm,
  };

  return (
    <UseAuthContext.Provider value={contextValue}>
      {props.children}
    </UseAuthContext.Provider>
  );
};
