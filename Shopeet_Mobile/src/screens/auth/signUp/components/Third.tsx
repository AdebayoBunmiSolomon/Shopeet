import React, { useContext } from "react";
import { View, Text, TextInput } from "react-native";
import { thirdScreenStyle } from "./Style";
import Animated, { ZoomIn } from "react-native-reanimated";
import { UseAuthContext } from "../../../../context/Auth/useAuth";

const Third: React.FunctionComponent<{}> = () => {
  const { signUpForm, setSignUpForm } = useContext(UseAuthContext);
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
        {/* <View>
          <Text style={thirdScreenStyle.label}>Enter Confirm Password</Text>
          <TextInput
            style={thirdScreenStyle.textInput}
            secureTextEntry={true}
            onChangeText={(conPassword) => {
              setSignUpForm({ ...signUpForm, conPassword: conPassword });
            }}
            keyboardType='default'
          />
        </View> */}
      </View>
    </Animated.View>
  );
};

export default Third;
