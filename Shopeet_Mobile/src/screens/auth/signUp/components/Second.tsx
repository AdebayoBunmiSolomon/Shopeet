import React, { useContext } from "react";
import { View, Text, TextInput } from "react-native";
import { secondScreenStyle } from "./Style";
import Animated, { BounceInRight } from "react-native-reanimated";
import { UseAuthContext } from "../../../../context/Auth/hooks/useAuth";

const Second: React.FunctionComponent<{}> = () => {
  const { signUpForm, setSignUpForm } = useContext(UseAuthContext);
  return (
    <Animated.View entering={BounceInRight.delay(300)}>
      <View style={secondScreenStyle.formView}>
        <View>
          <Text style={secondScreenStyle.label}>Enter Username</Text>
          <TextInput
            style={secondScreenStyle.textInput}
            onChangeText={(username) => {
              setSignUpForm({ ...signUpForm, username: username });
            }}
          />
        </View>
        <View>
          <Text style={secondScreenStyle.label}>Enter Email</Text>
          <TextInput
            style={secondScreenStyle.textInput}
            keyboardType='email-address'
            onChangeText={(email) => {
              setSignUpForm({ ...signUpForm, email: email });
            }}
          />
        </View>
      </View>
    </Animated.View>
  );
};

export default Second;
