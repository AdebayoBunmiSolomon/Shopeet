import { Platform, StyleSheet } from "react-native";

export const appNameStyle = StyleSheet.create({
  appNameView: {
    paddingTop: 15,
  },
  appNameText: {
    fontSize: Platform.OS === "android" ? 17 : 20,
    fontFamily: "RobotoCondensed-Bold",
  },
});
