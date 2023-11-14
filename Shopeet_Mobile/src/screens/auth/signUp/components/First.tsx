import React, { useState } from "react";
import { View, Text, TextInput, Dimensions } from "react-native";
import { firstScreenStyle } from "./Style";
import PhoneInput from "react-native-phone-number-input";
import Animated, { BounceInLeft } from "react-native-reanimated";

const First: React.FunctionComponent<{}> = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  return (
    <Animated.View entering={BounceInLeft.delay(200)}>
      <View style={firstScreenStyle.formView}>
        <View>
          <Text style={firstScreenStyle.label}>Enter Fullname</Text>
          <TextInput style={firstScreenStyle.textInput} />
        </View>
        <View>
          <Text style={firstScreenStyle.label}>Enter Phone</Text>
          <View style={firstScreenStyle.phonePadView}>
            <PhoneInput
              defaultCode='NG'
              onChangeFormattedText={(number) => {
                setPhoneNumber(number);
                console.log(phoneNumber);
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
