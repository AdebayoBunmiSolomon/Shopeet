import React from "react";
import { View, Text, TextInput } from "react-native";
import { thirdScreenStyle } from "./Style";
import Animated, { ZoomIn } from "react-native-reanimated";

const Third: React.FunctionComponent<{}> = () => {
  return (
    <Animated.View entering={ZoomIn.damping(300)}>
      <View style={thirdScreenStyle.formView}>
        <View>
          <Text style={thirdScreenStyle.label}>Enter Password</Text>
          <TextInput style={thirdScreenStyle.textInput} />
        </View>
        <View>
          <Text style={thirdScreenStyle.label}>Enter Confirm Password</Text>
          <TextInput
            style={thirdScreenStyle.textInput}
            keyboardType='phone-pad'
          />
        </View>
      </View>
    </Animated.View>
  );
};

export default Third;
