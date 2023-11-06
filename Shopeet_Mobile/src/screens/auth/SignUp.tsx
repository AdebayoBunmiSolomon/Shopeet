import React from "react";
import {
  View,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  TextInput,
  Text,
} from "react-native";
import { signUpScreenStyle } from "./style";
import Header from "../../components/Header";
import AppName from "../../components/AppName";
import { signUpScreenColors } from "../../resources/Colors";
import GoBack from "../../components/GoBack";
import { useNavigation, StackActions } from "@react-navigation/native";

const SignUp: React.FunctionComponent<{}> = () => {
  const navigation: any = useNavigation();
  return (
    <View style={signUpScreenStyle.container}>
      <View style={signUpScreenStyle.header}>
        <GoBack
          onClick={() => {
            navigation.dispatch(StackActions.replace("Login", {}));
          }}
        />
        <Header
          headerText={"Sign up"}
          subHeaderText1={"Sign up for unlimited access"}
          subHeaderText2={""}
        />
        <AppName color={signUpScreenColors.button.backGroundColor.secondary} />
      </View>
      <ScrollView contentContainerStyle={signUpScreenStyle.scrollViewContainer}>
        <View style={signUpScreenStyle.formView}>
          <View style={signUpScreenStyle.subFormView}>
            <View style={signUpScreenStyle.textInputView}>
              <TextInput
                placeholder='fullname'
                style={signUpScreenStyle.textInput}
              />
            </View>
            <View style={signUpScreenStyle.textInputView}>
              <TextInput
                placeholder='email'
                style={signUpScreenStyle.textInput}
                keyboardType='email-address'
              />
            </View>
            <View style={signUpScreenStyle.textInputView}>
              <TextInput
                placeholder='username'
                style={signUpScreenStyle.textInput}
              />
            </View>
            <View style={signUpScreenStyle.textInputView}>
              <TextInput
                placeholder='password'
                style={signUpScreenStyle.textInput}
                secureTextEntry={true}
              />
            </View>
            <View style={signUpScreenStyle.textInputView}>
              <TextInput
                placeholder='confirm password'
                style={signUpScreenStyle.textInput}
                secureTextEntry={true}
              />
            </View>
            <View style={signUpScreenStyle.buttonView}>
              <TouchableOpacity style={signUpScreenStyle.button}>
                <Text style={signUpScreenStyle.buttonText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default SignUp;
