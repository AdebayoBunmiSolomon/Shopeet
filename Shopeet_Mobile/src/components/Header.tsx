import React from "react";
import { View, Text } from "react-native";
import { headerProps } from "../interface/AppInterface";

const Header: React.FunctionComponent<headerProps> = ({
  headerText,
  subHeaderText1,
  subHeaderText2,
  headerTextStyle,
  subHeaderTextStyle,
}) => {
  return (
    <>
      <View>
        <Text style={headerTextStyle}>{headerText}</Text>
        <View>
          <Text style={subHeaderTextStyle}>
            {subHeaderText1} {"\n"}
            {subHeaderText2}
          </Text>
        </View>
      </View>
    </>
  );
};

export default Header;
