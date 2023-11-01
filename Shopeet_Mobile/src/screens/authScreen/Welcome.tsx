import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import { welcomeScreenStyle } from "./style";
import Header from "../../components/Header";
import { welcomeScreenImages } from "../../resources/Images";

const Welcome: React.FunctionComponent<{}> = () => {
  return (
    <View style={welcomeScreenStyle.container}>
      <Header
        headerText={"Welcome"}
        subHeaderText1={"Automatic Identity Verification"}
        subHeaderText2={"which enables you to verify"}
      />
      <View style={welcomeScreenStyle.imageView}>
        <Image
          source={welcomeScreenImages.image}
          style={welcomeScreenStyle.image}
        />
      </View>
      <View style={welcomeScreenStyle.buttonView}>
        <View>
          <TouchableOpacity style={welcomeScreenStyle.loginBtn}>
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
