import React, { useContext } from "react";
import { View, Text, TextInput, Dimensions } from "react-native";
import { firstScreenStyle } from "./Style";
import PhoneInput from "react-native-phone-number-input";
import Animated, { BounceInLeft } from "react-native-reanimated";
import { UseAuthContext } from "../../../../context/Auth/hooks/useAuth";

const First: React.FunctionComponent<{}> = () => {
  const { signUpForm, setSignUpForm } = useContext(UseAuthContext);

  return (
    <Animated.View entering={BounceInLeft.delay(200)}>
      <View style={firstScreenStyle.formView}>
        <View>
          <Text style={firstScreenStyle.label}>Enter Fullname</Text>
          <TextInput
            style={firstScreenStyle.textInput}
            onChangeText={(fullname) => {
              setSignUpForm({ ...signUpForm, fullname: fullname });
            }}
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
            />
          </View>
        </View>
      </View>
    </Animated.View>
  );
};

export default First;
