import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { loginScreenStyle } from "./style";
import Header from "../../components/Header";
import UserIcon from "react-native-vector-icons/Entypo";
import EyeIcon from "react-native-vector-icons/Entypo";
import { Images } from "../../resources/Images";

const Login: React.FunctionComponent<{}> = () => {
  return (
    <View style={loginScreenStyle.container}>
      <Header
        headerText={"Login"}
        subHeaderText1={"Please input credentials to gain access"}
        subHeaderText2={""}
      />
      <ScrollView contentContainerStyle={loginScreenStyle.container}>
        <View style={loginScreenStyle.imageView}>
          <Image source={Images.loginImage} style={loginScreenStyle.image} />
        </View>
        <View style={loginScreenStyle.textInputView}>
          <View style={loginScreenStyle.textInputView2}>
            <TextInput placeholder="Email" style={loginScreenStyle.textInput} />
            <UserIcon
              name={"user"}
              size={20}
              style={loginScreenStyle.textInputIcon}
              color={"gray"}
            />
          </View>
          <View style={loginScreenStyle.textInputView2}>
            <TextInput
              placeholder="Password"
              style={loginScreenStyle.textInput}
              secureTextEntry={true}
            />
            <EyeIcon
              name={"eye"}
              size={20}
              style={loginScreenStyle.textInputIcon}
              color={"gray"}
            />
          </View>
          <View style={loginScreenStyle.buttonView}>
            <TouchableOpacity style={loginScreenStyle.button}>
              <Text style={loginScreenStyle.buttonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;
