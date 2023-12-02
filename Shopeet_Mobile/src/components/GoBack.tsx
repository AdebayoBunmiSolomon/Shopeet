import React from "react";
import { TouchableOpacity, View } from "react-native";
import BackArrow from "react-native-vector-icons/Ionicons";
import { goBackProps } from "../interface/AppInterface";

const GoBack: React.FunctionComponent<goBackProps> = ({
  onClick,
  buttonStyle,
  iconColor,
}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          onClick();
        }}
        style={buttonStyle}>
        <BackArrow name={"chevron-back"} size={35} color={iconColor} />
      </TouchableOpacity>
    </View>
  );
};

export default GoBack;
