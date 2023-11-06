import React from "react";
import { View, Text } from "react-native";
import { appNameStyle } from "./Style";
import { appNameProps } from "../interface/AppInterface";

const AppName: React.FunctionComponent<appNameProps> = ({ color }) => {
  return (
    <View style={appNameStyle.appNameView}>
      <Text style={[appNameStyle.appNameText, { color: color }]}>
        Shopeet 2.0
      </Text>
    </View>
  );
};

export default AppName;
