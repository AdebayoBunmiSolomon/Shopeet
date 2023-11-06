import React from "react";
import { TouchableOpacity, View } from "react-native";
import BackArrow from "react-native-vector-icons/Ionicons";
import { goBackprops } from "../interface/AppInterface";

const GoBack: React.FunctionComponent<goBackprops> = ({ onClick }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          onClick();
        }}
        style={{
          borderWidth: 1.5,
          borderColor: "black",
          padding: 5,
          marginTop: 10,
          backgroundColor: "white",
          borderRadius: 50,
          //   shadowColor: "rgb(8, 8, 8)",
          //   shadowOpacity: 0.8,
          //   elevation: 6,
          //   shadowRadius: 15,
          //   shadowOffset: { width: 1, height: 13 },
        }}>
        <BackArrow name={"chevron-back"} size={25} />
      </TouchableOpacity>
    </View>
  );
};

export default GoBack;
