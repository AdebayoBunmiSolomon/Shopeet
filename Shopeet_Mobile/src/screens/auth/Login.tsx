import React, { useRef, useState } from "react";
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
import Message from "../../components/Message";

const Login: React.FunctionComponent<{}> = () => {
  const navigation: any = useNavigation();
  const [userNameBorderColor, setUserNameBorderColor] =
    useState<string>("gray");
  const [passWordBorderColor, setPassWordBorderColor] =
    useState<string>("gray");

  //form data state for username & password
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  //msg data state
  const [msgDetails, setMsgDetails] = useState<any>({
    msgType: "",
    animationTimeIn: 0,
    msgText: "",
  });
  //username and password for input focus
  const username_ref = useRef<any>(null);
  const password_ref = useRef<any>(null);

  //to clear toast message
  const [isShow, setIsShow] = useState<boolean>(false);
  const timeOutMsg = (timeOutVal: number) => {
    setIsShow(true);
    const timer = setTimeout(() => {
      setIsShow(false);
      clearTimeout(timer);
    }, timeOutVal);
  };

  //handleSignUp
  const SignUp = () => {
    navigation.dispatch(StackActions.replace("SignUpContext", {}));
  };

  //handleLogin
  const Login = () => {
    if (!formData.username.trim()) {
      setMsgDetails({
        ...msgDetails,
        msgText: "Username is empty",
        msgType: "danger",
        animationTimeIn: 200,
      });
      timeOutMsg(1500);
      username_ref.current.focus();
      return null;
    }
    if (!formData.password.trim()) {
      setMsgDetails({
        ...msgDetails,
        msgText: "Password is empty",
        msgType: "danger",
        animationTimeIn: 200,
      });
      timeOutMsg(1500);
      password_ref.current.focus();
      return null;
    } else {
      console.log(formData.username + " " + formData.password);
    }
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
        <Message
          msgType={msgDetails.msgType !== "" ? msgDetails.msgType : "danger"}
          msgText={msgDetails.msgText}
          animationTimeIn={msgDetails.timeIn}
          show={isShow}
        />
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
                  setUserNameBorderColor("#E77602");
                }}
                onBlur={() => {
                  setUserNameBorderColor("gray");
                }}
                value={formData.username}
                onChangeText={(username) => {
                  setFormData({ ...formData, username: username });
                }}
                ref={username_ref}
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
                  setPassWordBorderColor("#E77602");
                }}
                onBlur={() => {
                  setPassWordBorderColor("gray");
                }}
                secureTextEntry={true}
                value={formData.password}
                onChangeText={(password) => {
                  setFormData({ ...formData, password: password });
                }}
                ref={password_ref}
              />
            </View>
            <View>
              <TouchableOpacity
                style={loginScreenStyle.button}
                onPress={() => {
                  Login();
                }}>
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
