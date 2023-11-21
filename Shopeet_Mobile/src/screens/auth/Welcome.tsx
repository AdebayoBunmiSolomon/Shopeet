import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { welcomeScreenStyle } from "./style";
import Header from "../../components/Header";
import { Images } from "../../resources/Images";
import { StackActions, useNavigation } from "@react-navigation/native";
import AppName from "../../components/AppName";
import { welcomeScreenColors } from "../../resources/Colors";
import { Image } from "expo-image";

const Welcome: React.FunctionComponent<{}> = () => {
  const navigation: any = useNavigation();
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
          <View>
            <TouchableOpacity
              style={welcomeScreenStyle.loginBtn}
              onPress={() => {
                navigation.dispatch(StackActions.replace("Login", {}));
              }}>
              <Text style={welcomeScreenStyle.loginBtnText}>Continue</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={welcomeScreenStyle.signUpBtn}>
              <Text style={welcomeScreenStyle.signUpBtnText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default Welcome;
