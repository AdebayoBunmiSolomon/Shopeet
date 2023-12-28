import { GetRequest, url } from "../../context/Auth/hooks/useRequest"; 
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";

//validate sign-up form data from api
export const validateSignUpData = async (
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
        text2: `${msgClause}`,
      });
      return true; // Indicates there are errors
    }
  } catch (error) {
    console.error("Error validating form data:", error);
  }

  return false; // No errors
};

//validate login form data from api
export const validateLoginData = async (
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
      return false; // Indicates there are no errors
    }else{
      Toast.show({
        type: "error",
        text1: "Sign-up error",
        text2: `${msgClause}`,
      });
      return true // Indicates there are errors
    }
  } catch (error) {
    console.error("Error validating form data:", error);
  }

  return true; // No errors
};

export const validateUsernameAndPassword = async (clause1:string, clauseValue1:string, clause2:string, clauseValue2:string,msgClause:string) => {
  try{
    const {status, data} = await GetRequest(`${url}customers?${clause1}=${clauseValue1}&${clause2}=${clauseValue2}`, undefined);
    if(status === 200 && data && data.length > 0){
      return false; //Indicates there are no errors
    }else{
      Toast.show({
        type: "error",
        text1: "Sign-up error",
        text2: `${msgClause}`,
      });
      return true; //Indicates there are errors
    }
  }catch(err){
    console.error("Error validating form data", err)
  }
  return true;
}

// save user information in physical device
export const storeUserDataInDevice = async (submittedVal:boolean, deviceImeiVal:string, tokenVal:string) => {
  const userData = {
    submitted: submittedVal,
    deviceImei: deviceImeiVal, //get session id to stand as device IMEI
    token: tokenVal,
  };
  await AsyncStorage.setItem("@userData", JSON.stringify(userData));
}