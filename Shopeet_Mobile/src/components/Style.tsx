import { Platform, StyleSheet } from "react-native";
import { welcomeScreenColors } from "../resources/Colors";

export const headerStyle = StyleSheet.create({
  headerText: {
    color: welcomeScreenColors.textColor.text.tertiary,
    fontSize: 30,
    fontFamily: "RobotoCondensed-Bold",
  },
  subHeaderText: {
    color: welcomeScreenColors.textColor.text.primary,
    fontSize: Platform.OS === "android" ? 15 : 17,
  },
});

export const appNameStyle = StyleSheet.create({
  appNameView: {
    paddingTop: 15,
  },
  appNameText: {
    fontSize: Platform.OS === "android" ? 17 : 20,
    fontFamily: "RobotoCondensed-Bold",
  },
});
