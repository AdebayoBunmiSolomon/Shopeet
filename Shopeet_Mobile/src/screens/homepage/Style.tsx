import { StyleSheet, Platform } from "react-native";

export const homeScreenStyles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    right: 0,
    paddingTop: Platform.OS === "android" ? 50 : 60,
  },
});
