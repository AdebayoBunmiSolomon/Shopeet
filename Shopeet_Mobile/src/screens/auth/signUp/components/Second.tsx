import React from "react";
import { View, Text, TextInput } from "react-native";
import { secondScreenStyle } from "./Style";
import Animated, { BounceInRight } from "react-native-reanimated";

const Second: React.FunctionComponent<{}> = () => {
  return (
    <Animated.View entering={BounceInRight.delay(300)}>
      <View style={secondScreenStyle.formView}>
        <View>
          <Text style={secondScreenStyle.label}>Enter Username</Text>
          <TextInput style={secondScreenStyle.textInput} />
        </View>
        <View>
          <Text style={secondScreenStyle.label}>Enter Email</Text>
          <TextInput
            style={secondScreenStyle.textInput}
            keyboardType='email-address'
          />
        </View>
      </View>
    </Animated.View>
  );
};

export default Second;
