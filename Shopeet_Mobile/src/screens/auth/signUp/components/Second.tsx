import React from "react";
import { View, Text, TextInput } from "react-native";
import { secondScreenStyle } from "./Style";

const Second: React.FunctionComponent<{}> = () => {
  return (
    <View>
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
    </View>
  );
};

export default Second;
