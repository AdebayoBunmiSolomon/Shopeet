import React, { createContext, useState } from "react";
import Toast from "react-native-toast-message";
import { url, GetRequest, PostRequest } from "./useRequest";
import { signUpScreenColors } from "../../../resources/Colors";
import * as EmailValidator from "email-validator";
import { useNavigation, StackActions } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
  const [custId, setCustId] = useState<number>(0);
  const navigation: any = useNavigation();

  //validate form data from api
  const validateFormData = async (
    clause: string,
    clauseValue: string,
    msgClause: string
  ) => {
    try {
      const { status, data } = await GetRequest(
        `${url}customers?${clause}=${clauseValue}`,
        undefined
      );

      if (status === 200 && data && data.length > 0) {
        Toast.show({
          type: "error",
          text1: "Sign-up error",
          text2: `${msgClause} already taken`,
        });
        return true; // Indicates there are errors
      }
    } catch (error) {
      console.error("Error validating form data:", error);
    }

    return false; // No errors
  };

  //take schema of the form
  const formData = {
    id: custId,
    fullName: signUpForm.fullname.toString().replace(/^\s+|\s+$/gm, ""),
    phone: signUpForm.phone.toString().replace(/\+/g, ""),
    username: signUpForm.username.toString().replace(/^\s+|\s+$/gm, ""),
    email: signUpForm.email.toString().replace(/^\s+|\s+$/gm, ""),
    password: signUpForm.password.toString(),
  };

  // save user information in physical device
  const storeUserDataInDevice = async () => {
    const userData = {
      submitted: true,
      token: 1,
    };
    await AsyncStorage.setItem("@userData", JSON.stringify(userData));
  };

  const submitUserData = async () => {
    setIsLoading(true);
    try {
      setIsLoading(true);
      const { status, data } = await PostRequest(
        `${url}customers`,
        formData,
        undefined
      );
      if (status === 201) {
        storeUserDataInDevice();
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
      const fullnameErrors = await validateFormData(
        "fullName",
        signUpForm.fullname.toString().replace(/^\s+|\s+$/gm, ""),
        "Fullname"
      );

      // Validate phone number from api
      const phoneErrors = await validateFormData(
        "phone",
        phoneWithoutPlus,
        "Phone number"
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
      const userNameErrors = await validateFormData(
        "username",
        signUpForm.username.toString().replace(/^\s+|\s+$/gm, ""),
        "Username"
      );

      // Validate email from api
      const emailErrors = await validateFormData(
        "email",
        signUpForm.email.toString().replace(/^\s+|\s+$/gm, ""),
        "Email"
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
    setCustId,
    isLoading,
  };

  return (
    <UseAuthContext.Provider value={contextValue}>
      {props.children}
    </UseAuthContext.Provider>
  );
};
