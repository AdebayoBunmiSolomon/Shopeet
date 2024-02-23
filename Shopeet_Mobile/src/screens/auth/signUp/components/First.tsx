import React from "react";
import { View, Text, TextInput } from "react-native";
import { firstScreenStyle } from "./Style";
import PhoneInput from "react-native-phone-number-input";
import Animated, { BounceInLeft } from "react-native-reanimated";
import { AuthContext } from "../../../../context/Auth/hooks/useAuth";

const First: React.FunctionComponent<{}> = () => {
  const { signUpForm, setSignUpForm } = AuthContext();

  return (
    <Animated.View entering={BounceInLeft.delay(200)}>
      <View style={firstScreenStyle.formView}>
        <View>
          <Text style={firstScreenStyle.label}>Enter Fullname</Text>
          <TextInput
            style={firstScreenStyle.textInput}
            onChangeText={(fullname) => {
              setSignUpForm({
                ...signUpForm,
                fullname: fullname,
              });
            }}
            // value={signUpForm.fullname}
          />
        </View>
        <View>
          <Text style={firstScreenStyle.label}>Enter Phone</Text>
          <View style={firstScreenStyle.phonePadView}>
            <PhoneInput
              defaultCode='NG'
              onChangeFormattedText={(number) => {
                setSignUpForm({ ...signUpForm, phone: number });
              }}
              textContainerStyle={firstScreenStyle.phonePadTextInput}
              flagButtonStyle={firstScreenStyle.phonePadButton}
              placeholder=''
              codeTextStyle={{ color: "black" }}
              // value={signUpForm.phone}
            />
          </View>
        </View>
      </View>
    </Animated.View>
  );
};

export default First;
