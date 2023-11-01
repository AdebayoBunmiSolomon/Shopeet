import { Platform, StyleSheet } from "react-native";
import { welcomeScreenColors } from "../resources/Colors";

export const headerStyle = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? 50 : 60,
  },
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
