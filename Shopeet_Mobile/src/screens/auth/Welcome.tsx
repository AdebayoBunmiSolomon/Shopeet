import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import { welcomeScreenStyle } from "./style";
import Header from "../../components/Header";
import { Images } from "../../resources/Images";
import { StackActions, useNavigation } from "@react-navigation/native";

const Welcome: React.FunctionComponent<{}> = () => {
  const navigation: any = useNavigation();
  return (
    <View style={welcomeScreenStyle.container}>
      <Header
        headerText={"Welcome"}
        subHeaderText1={"Automatic Identity Verification"}
        subHeaderText2={"which enables you to verify"}
      />
      <View style={welcomeScreenStyle.imageView}>
        <Image source={Images.image} style={welcomeScreenStyle.image} />
      </View>
      <View style={welcomeScreenStyle.buttonView}>
        <View>
          <TouchableOpacity
            style={welcomeScreenStyle.loginBtn}
            onPress={() => {
              navigation.dispatch(StackActions.replace("Login", {}));
            }}
          >
            <Text style={welcomeScreenStyle.loginBtnText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={welcomeScreenStyle.signUpBtn}>
            <Text style={welcomeScreenStyle.signUpBtnText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Welcome;
