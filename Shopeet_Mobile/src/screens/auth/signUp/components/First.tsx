import React, { useState } from "react";
import { View, Text, TextInput, Image } from "react-native";
import { firstScreenStyle } from "./Style";
import { TouchableOpacity } from "react-native";
import DownIcon from "react-native-vector-icons/Entypo";
import { Images } from "../../../../resources/Images";

const First: React.FunctionComponent<{}> = () => {
  const [show, setShow] = useState<boolean>(false);
  const [countryCode, setCountryCode] = useState<string>("");
  return (
    <View>
      <View style={firstScreenStyle.formView}>
        <View>
          <Text style={firstScreenStyle.label}>Enter Fullname</Text>
          <TextInput style={firstScreenStyle.textInput} />
        </View>
        <View>
          <Text style={firstScreenStyle.label}>Enter Phone</Text>
          <View style={firstScreenStyle.phonePadView}>
            <TouchableOpacity
              style={firstScreenStyle.phonePadButton}
              onPress={() => {
                setShow(true);
              }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 10,
                }}>
                <DownIcon name='chevron-down' size={25} color={"white"} />
                <Image
                  source={Images.countryIcon}
                  style={{ width: 25, height: 20 }}
                />
              </View>
            </TouchableOpacity>
            <TextInput
              style={firstScreenStyle.phonePadTextInput}
              keyboardType='phone-pad'
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default First;
