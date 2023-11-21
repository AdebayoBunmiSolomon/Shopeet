import React from "react";
import { View, ActivityIndicator } from "react-native";

const Loader: React.FunctionComponent<{}> = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <ActivityIndicator size={"large"} color={"#E77602"} />
    </View>
  );
};

export default Loader;
