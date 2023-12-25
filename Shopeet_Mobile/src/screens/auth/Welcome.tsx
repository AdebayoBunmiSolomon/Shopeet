import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { welcomeScreenStyle } from "./style";
import Header from "../../components/Header";
import { Images } from "../../resources/Images";
import { StackActions, useNavigation } from "@react-navigation/native";
import AppName from "../../components/AppName";
import { welcomeScreenColors } from "../../resources/Colors";
import { Image } from "expo-image";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Welcome: React.FunctionComponent<{}> = () => {
  const navigation: any = useNavigation();
  const [tokenValue, setTokenValue] = useState<string | null>("");

  const btnContinue = async () => {
    navigation.dispatch(StackActions.replace("Login", {}));
  };

  const onPageLoad = async () => {
    const token: string | null = await AsyncStorage.getItem("@userData");
    const parsedToken = JSON.parse(token!);
    if (parsedToken.submitted === false) {
      setTokenValue("");
    } else {
      //take me to home screen if there is token
      setTokenValue(parsedToken);
    }
  };

  useEffect(() => {
    onPageLoad();
  }, []);

  //handleSignUp
  const SignUp = () => {
    navigation.dispatch(StackActions.replace("SignUpContext", {}));
  };
  return (
    <>
      <View style={welcomeScreenStyle.container}>
        <View style={welcomeScreenStyle.header}>
          <Header
            headerText={"Welcome"}
            subHeaderText1={"Automatic Identity Verification"}
            subHeaderText2={"which enables you to verify"}
            headerTextStyle={welcomeScreenStyle.headerText}
            subHeaderTextStyle={welcomeScreenStyle.subHeaderText}
          />
          <AppName
            color={welcomeScreenColors.backGroundColors.buttons.tertiary}
          />
        </View>
        <View style={welcomeScreenStyle.imageView}>
          <Image
            source={Images.image}
            style={welcomeScreenStyle.image}
            transition={1000}
          />
        </View>
        <View style={welcomeScreenStyle.buttonView}>
          {!tokenValue ? (
            <View>
              <TouchableOpacity
                style={welcomeScreenStyle.signUpBtn}
                onPress={() => {
                  SignUp();
                }}>
                <Text style={welcomeScreenStyle.signUpBtnText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              <TouchableOpacity
                style={welcomeScreenStyle.loginBtn}
                onPress={() => {
                  btnContinue();
                }}>
                <Text style={welcomeScreenStyle.loginBtnText}>Continue</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </>
  );
};

export default Welcome;
