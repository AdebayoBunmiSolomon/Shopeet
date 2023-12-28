import React, { createContext, useState } from "react";
import Toast from "react-native-toast-message";
import { url, PostRequest } from "./useRequest";
import {
  validateSignUpData,
  storeUserDataInDevice,
} from "../../../resources/utils/functions";
import { signUpScreenColors } from "../../../resources/Colors";
import * as EmailValidator from "email-validator";
import { useNavigation, StackActions } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "expo-constants";

export const UseAuthContext = createContext<any>(null);

export const UseAuthContextProvider = (props: any) => {
  const [signUpForm, setSignUpForm] = useState({
    fullname: "",
    phone: "",
    username: "",
    email: "",
    password: "",
  });
  const [signUpStage, setSignUpStage] = useState<string>("first");
  const [bgColor, setBgColor] = useState<string>(
    signUpScreenColors.form.primary
  );
  const [nxtBtnTxt, setNxtBtnTxt] = useState<string>("Next");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigation: any = useNavigation();

  //take schema of the form
  const formData = {
    id: Constants.sessionId,
    fullName: signUpForm.fullname
      .toLowerCase()
      .toString()
      .replace(/^\s+|\s+$/gm, ""),
    phone: signUpForm.phone.toString().replace(/\+/g, ""),
    username: signUpForm.username
      .toLowerCase()
      .toString()
      .replace(/^\s+|\s+$/gm, ""),
    email: signUpForm.email
      .toString()
      .toLowerCase()
      .replace(/^\s+|\s+$/gm, ""),
    password: signUpForm.password.toString(),
    deviceName: Constants.deviceName,
    deviceImei: Constants.sessionId,
  };

  const submitUserData = async () => {
    setIsLoading(true);
    try {
      setIsLoading(true);
      const { status } = await PostRequest(
        `${url}customers`,
        formData,
        undefined
      );
      if (status === 201) {
        storeUserDataInDevice(true, Constants.sessionId, "");
        setIsLoading(false);
        return true;
      } else {
        console.log("record not posted successfully");
        setIsLoading(false);
        return false;
      }
    } catch (err) {
      console.error("Error posting form data:", err);
      setIsLoading(false);
    }
  };

  const signUp = async () => {
    // First form validation
    if (signUpStage === "first") {
      // Fullname validation
      if (!signUpForm.fullname.trim()) {
        Toast.show({
          type: "error",
          text1: "Sign-up error",
          text2: "Fullname is empty",
        });
        return;
      }

      // Phone number validation
      if (!signUpForm.phone.trim()) {
        Toast.show({
          type: "error",
          text1: "Sign-up error",
          text2: "Phone number is empty",
        });
        return;
      }

      const phoneWithoutPlus = signUpForm.phone.replace(/\+/g, "");

      // Validate fullname from api
      const fullnameErrors = await validateSignUpData(
        "fullName",
        signUpForm.fullname.toString().replace(/^\s+|\s+$/gm, ""),
        "Fullname already taken"
      );

      // Validate phone number from api
      const phoneErrors = await validateSignUpData(
        "phone",
        phoneWithoutPlus,
        "Phone number already taken"
      );

      if (fullnameErrors || phoneErrors) {
        console.log("Can't go to the second page");
        return;
      }

      setBgColor(signUpScreenColors.form.tertiary);
      setSignUpStage("second");
    }

    // Second form validation
    if (signUpStage === "second") {
      // Username validation
      if (!signUpForm.username.trim()) {
        Toast.show({
          type: "error",
          text1: "Sign-up error",
          text2: "Username is empty",
        });
        return;
      }

      // Email validation
      if (!signUpForm.email.trim()) {
        Toast.show({
          type: "error",
          text1: "Sign-up error",
          text2: "Email is empty",
        });
        return;
      }

      //check if email is valid
      const isValidEmail = EmailValidator.validate(signUpForm.email.trim());
      if (!isValidEmail) {
        Toast.show({
          type: "error",
          text1: "Sign-up error",
          text2: "Email is not valid",
        });
        return;
      }

      // Validate username from api
      const userNameErrors = await validateSignUpData(
        "username",
        signUpForm.username.toString().replace(/^\s+|\s+$/gm, ""),
        "Username already taken"
      );

      // Validate email from api
      const emailErrors = await validateSignUpData(
        "email",
        signUpForm.email.toString().replace(/^\s+|\s+$/gm, ""),
        "Email already taken"
      );

      if (userNameErrors || emailErrors) {
        console.log("Can't go to the third page");
        return;
      }

      setBgColor(signUpScreenColors.form.secondary);
      setSignUpStage("third");
      setNxtBtnTxt("Submit");
    }

    //Third form validation
    if (signUpStage === "third") {
      //password validation
      if (!signUpForm.password.trim()) {
        Toast.show({
          type: "error",
          text1: "Sign-up error",
          text2: "Password is empty",
        });
        return;
      }

      const isPost = await submitUserData();

      if (isPost) {
        console.log("Record posted successfully");
        Toast.show({
          type: "success",
          text1: "Registration info",
          text2: "user created successfully",
        });
        const timer = setTimeout(() => {
          navigation.dispatch(StackActions.replace("Login", {}));
          clearTimeout(timer);
        }, 1000);
      }
    }
  };

  const contextValue = {
    signUp,
    signUpForm,
    setSignUpForm,
    signUpStage,
    bgColor,
    nxtBtnTxt,
    isLoading,
  };

  return (
    <UseAuthContext.Provider value={contextValue}>
      {props.children}
    </UseAuthContext.Provider>
  );
};
