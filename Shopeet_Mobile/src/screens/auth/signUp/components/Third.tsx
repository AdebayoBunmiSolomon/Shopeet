import React from "react";
import { View, Text, TextInput } from "react-native";
import { thirdScreenStyle } from "./Style";

const Third: React.FunctionComponent<{}> = () => {
  return (
    <View>
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
    </View>
  );
};

export default Third;
