import React from "react";
import { Text, View } from "react-native";
import { indicatorsProps } from "../interface/AppInterface";
import { indicatorsStyle } from "./Style";

const Indicators: React.FunctionComponent<indicatorsProps> = ({
  imgData,
  index,
}) => {
  const prodImgList = imgData;
  const initialIndex = index;
  return (
    <>
      {prodImgList.map((item: any, index: number) => (
        <View key={index} style={{ padding: 3 }}>
          <View
            style={[
              indicatorsStyle.indicatorListView,
              {
                backgroundColor:
                  index === initialIndex ? "#E77602" : "#3c3f4455",
              },
            ]}>
            <Text style={indicatorsStyle.indicatorText}>{item.productId}</Text>
          </View>
        </View>
      ))}
    </>
  );
};

export default Indicators;
