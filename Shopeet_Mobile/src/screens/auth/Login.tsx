import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { loginScreenStyle } from "./style";
import Header from "../../components/Header";
import UserIcon from "react-native-vector-icons/Entypo";
import EyeIcon from "react-native-vector-icons/Entypo";
import { Images } from "../../resources/Images";
import AppName from "../../components/AppName";
import { loginScreenColors } from "../../resources/Colors";
import { StackActions, useNavigation } from "@react-navigation/native";

const Login: React.FunctionComponent<{}> = () => {
  const navigation: any = useNavigation();
  const [userNameBorderColor, setUserNameBorderColor] =
    useState<string>("gray");
  const [passWordBorderColor, setPassWordBorderColor] =
    useState<string>("gray");

  const onTextUsernameFocus = () => {
    setUserNameBorderColor("#E77602");
  };
  const onTextUsernameBlur = () => {
    setUserNameBorderColor("gray");
  };

  const onTextPasswordFocus = () => {
    setPassWordBorderColor("#E77602");
  };
  const onTextPasswordBlur = () => {
    setPassWordBorderColor("gray");
  };

  const SignUp = () => {
    navigation.dispatch(StackActions.replace("SignUp", {}));
  };

  return (
    <View style={loginScreenStyle.container}>
      <View style={loginScreenStyle.header}>
        <Header
          headerText={"Login"}
          subHeaderText1={"provide credentials to gain access"}
          subHeaderText2={""}
          headerTextStyle={loginScreenStyle.headerText}
          subHeaderTextStyle={loginScreenStyle.subHeaderText}
        />
        <AppName color={loginScreenColors.button.backGroundColor.tertiary} />
      </View>
      <ScrollView contentContainerStyle={loginScreenStyle.container}>
        <View style={loginScreenStyle.imageView}>
          <Image source={Images.loginImage} style={loginScreenStyle.image} />
        </View>
        <KeyboardAvoidingView
          style={loginScreenStyle.formView}
          behavior={Platform.OS === "ios" ? "padding" : "height"}>
          <View style={loginScreenStyle.subFormView}>
            <View style={loginScreenStyle.textInputView}>
              <UserIcon
                name={"user"}
                size={25}
                color={
                  userNameBorderColor === "gray"
                    ? userNameBorderColor
                    : userNameBorderColor
                }
                style={loginScreenStyle.textInputIcon}
              />
              <TextInput
                placeholder='username or email'
                style={[
                  loginScreenStyle.textInput,
                  {
                    borderColor:
                      userNameBorderColor === "gray"
                        ? userNameBorderColor
                        : userNameBorderColor,
                  },
                ]}
                onFocus={() => {
                  onTextUsernameFocus();
                }}
                onBlur={() => {
                  onTextUsernameBlur();
                }}
              />
            </View>
            <View style={loginScreenStyle.textInputView}>
              <EyeIcon
                name={"eye"}
                size={25}
                color={
                  passWordBorderColor === "gray"
                    ? passWordBorderColor
                    : passWordBorderColor
                }
                style={loginScreenStyle.textInputIcon}
              />
              <TextInput
                placeholder='password'
                style={[
                  loginScreenStyle.textInput,
                  {
                    borderColor:
                      passWordBorderColor === "gray"
                        ? passWordBorderColor
                        : passWordBorderColor,
                  },
                ]}
                onFocus={() => {
                  onTextPasswordFocus();
                }}
                onBlur={() => {
                  onTextPasswordBlur();
                }}
                secureTextEntry={true}
              />
            </View>
            <View>
              <TouchableOpacity style={loginScreenStyle.button}>
                <Text style={loginScreenStyle.buttonText}>Continue</Text>
              </TouchableOpacity>
            </View>
            <View style={loginScreenStyle.bottomTextView}>
              <Text style={loginScreenStyle.bottomText}>
                Don't have an account,{" "}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  SignUp();
                }}>
                <Text style={loginScreenStyle.bottomButtonText}>SignUp</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default Login;
