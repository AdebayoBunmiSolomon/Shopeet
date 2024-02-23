import React from "react";
import { View, Text, TextInput } from "react-native";
import { thirdScreenStyle } from "./Style";
import Animated, { ZoomIn } from "react-native-reanimated";
import { AuthContext } from "../../../../context/Auth/hooks/useAuth";

const Third: React.FunctionComponent<{}> = () => {
  const { signUpForm, setSignUpForm } = AuthContext();
  return (
    <Animated.View entering={ZoomIn.damping(300)}>
      <View style={thirdScreenStyle.formView}>
        <View>
          <Text style={thirdScreenStyle.label}>Enter Password</Text>
          <TextInput
            style={thirdScreenStyle.textInput}
            secureTextEntry={true}
            onChangeText={(password) => {
              setSignUpForm({ ...signUpForm, password: password });
            }}
            keyboardType='default'
          />
        </View>
      </View>
    </Animated.View>
  );
};

export default Third;
