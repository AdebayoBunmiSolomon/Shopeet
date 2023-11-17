import React, { createContext, useState } from "react";

export const UseAuthContext = createContext<any>(null);

export const UseAuthContextProvider = (props: any) => {
  const [signUpForm, setSignUpForm] = useState({
    fullname: "",
    phone: "",
    username: "",
    email: "",
    password: "",
  });
  //to clear toast message
  const [isShow, setIsShow] = useState<boolean>(false);
  const timeOutMsg = (timeOutVal: number) => {
    setIsShow(true);
    const timer = setTimeout(() => {
      setIsShow(false);
      clearTimeout(timer);
    }, timeOutVal);
  };
  //msg data state
  const [msgDetails, setMsgDetails] = useState<any>({
    msgType: "",
    animationTimeIn: 0,
    msgText: "",
  });

  const signUp = () => {
    if (!signUpForm.fullname.trim()) {
      setMsgDetails({
        ...msgDetails,
        msgText: "fullname is empty",
        msgType: "danger",
        animationTimeIn: 200,
      });
      timeOutMsg(1500);
      return null;
    }
    if (!signUpForm.phone.trim()) {
      setMsgDetails({
        ...msgDetails,
        msgText: "phone number is empty",
        msgType: "danger",
        animationTimeIn: 200,
      });
      timeOutMsg(1500);
      return null;
    }
    if (!signUpForm.username.trim()) {
      setMsgDetails({
        ...msgDetails,
        msgText: "username is empty",
        msgType: "danger",
        animationTimeIn: 200,
      });
      timeOutMsg(1500);
      return null;
    }
    if (!signUpForm.email.trim()) {
      setMsgDetails({
        ...msgDetails,
        msgText: "email is empty",
        msgType: "danger",
        animationTimeIn: 200,
      });
      timeOutMsg(1500);
      return null;
    }
    if (!signUpForm.password.trim()) {
      setMsgDetails({
        ...msgDetails,
        msgText: "password is empty",
        msgType: "danger",
        animationTimeIn: 200,
      });
      timeOutMsg(1500);
      return null;
    }
  };

  const contextValue = {
    signUp,
    signUpForm,
    setSignUpForm,
    isShow,
    timeOutMsg,
    msgDetails,
    setMsgDetails,
  };

  return (
    <UseAuthContext.Provider value={contextValue}>
      {props.children}
    </UseAuthContext.Provider>
  );
};
