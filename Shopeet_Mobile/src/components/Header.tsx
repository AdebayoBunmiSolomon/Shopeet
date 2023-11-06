import React from "react";
import { View, Text } from "react-native";
import { headerStyle } from "./Style";
import { headerProps } from "../interface/AppInterface";

const Header: React.FunctionComponent<headerProps> = ({
  headerText,
  subHeaderText1,
  subHeaderText2,
}) => {
  return (
    <>
      <View>
        <Text style={headerStyle.headerText}>{headerText}</Text>
        <View>
          <Text style={headerStyle.subHeaderText}>
            {subHeaderText1} {"\n"}
            {subHeaderText2}
          </Text>
        </View>
      </View>
    </>
  );
};

export default Header;
