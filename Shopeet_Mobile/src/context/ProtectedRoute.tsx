import React, { createContext, useState, useRef, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, StackActions } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import { GetRequest, url } from "./Auth/hooks/useRequest";
import {
  storeUserDataInDevice,
  validateLoginData,
  validateUsernameAndPassword,
} from "../resources/utils/functions";
import Constants from "expo-constants";

export const ProtectedRouteContext = createContext<any>(null);

export const ProtectedRouteContextProvider = (props: any) => {
  const navigation: any = useNavigation();
  const [submitted, setSubmitted] = useState<boolean | null>(false);
  const [deviceImei, setDeviceImei] = useState<string>("");
  const [token, setToken] = useState<string>("");

  //form data state for username & password
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  //username and password for input focus
  const username_ref = useRef<any>(null);
  const password_ref = useRef<any>(null);

  const btnContinue = async () => {
    if (token) {
      //take user to home page if there's a token in the user's device
      navigation.dispatch(StackActions.replace("Home", {}));
    } else {
      //take user to login page if there's not a token in the user's device
      navigation.dispatch(StackActions.replace("Login", {}));
    }
  };

  //check if user has submitted his/her credentials to the server via async storage
  const onPageLoad = async () => {
    //await AsyncStorage.removeItem("@userData");
    const userData: string | null = await AsyncStorage.getItem("@userData");
    const parsedData = JSON.parse(userData!);
    if (parsedData === null) {
      setSubmitted(false);
    } else {
      setToken(parsedData.token);
      setSubmitted(parsedData.submitted);
      setDeviceImei(parsedData.deviceImei);
    }
  };

  useEffect(() => {
    console.log(token);
  }, [token]);

  const Login = async () => {
    //username validation
    if (!formData.username.trim()) {
      Toast.show({
        type: "error",
        text1: "Login error",
        text2: "Username or email is empty",
      });
      username_ref.current.focus();
      return;
    }

    //password validation
    if (!formData.password.trim()) {
      Toast.show({
        type: "error",
        text1: "Login error",
        text2: "Password is empty",
      });
      password_ref.current.focus();
      return;
    }

    const userNameErrors = await validateLoginData(
      "username",
      formData.username
        .toLowerCase()
        .toString()
        .replace(/^\s+|\s+$/gm, ""),
      "Username is incorrect"
    );

    const passwordErrors = await validateLoginData(
      "password",
      formData.password.toString().replace(/^\s+|\s+$/gm, ""),
      "Password is incorrect"
    );

    //check if username or password exist
    if (userNameErrors || passwordErrors) {
      console.log("Can't go to home screen");
      return;
    }

    //check if username and password exist
    const usernameAndPassword = await validateUsernameAndPassword(
      "username",
      formData.username
        .toLowerCase()
        .toString()
        .replace(/^\s+|\s+$/gm, ""),
      "password",
      formData.password.toString().replace(/^\s+|\s+$/gm, ""),
      "Username and password do not match same credentials"
    );

    if (usernameAndPassword) {
      console.log("Username and password do not match same credentials");
      return;
    }

    //update user data with token in user device
    storeUserDataInDevice(true, deviceImei, Constants.sessionId);

    //navigate user to home screen if no errors
    navigation.dispatch(StackActions.replace("Home", {}));
  };

  const contextValue = {
    submitted,
    deviceImei,
    btnContinue,
    onPageLoad,
    formData,
    setFormData,
    Login,
    username_ref,
    password_ref,
  };

  return (
    <ProtectedRouteContext.Provider value={contextValue}>
      {props.children}
    </ProtectedRouteContext.Provider>
  );
};
