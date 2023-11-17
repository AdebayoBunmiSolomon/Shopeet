import { Dimensions, Platform, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export const appNameStyle = StyleSheet.create({
  appNameView: {
    paddingTop: 15,
  },
  appNameText: {
    fontSize: Platform.OS === "android" ? 17 : 20,
    fontFamily: "RobotoCondensed-Bold",
  },
});

export const messageStyle = StyleSheet.create({
  animatedView: {
    flex: 1,
    width: width,
    height: height / 10,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    marginTop: Platform.OS === "android" ? 50 : 60,
  },
  msgContainer: {
    backgroundColor: "#ebe6e6e6",
    width: "90%",
    height: 80,
    borderRadius: 15,
    overflow: "hidden",
  },
  msgContentView: {
    flexDirection: "row",
  },
  lineView: {
    width: 15,
    height: 80,
  },
  messageText: {
    fontSize: 15,
    fontFamily: "RobotoCondensed-Bold",
    color: "#221518",
    paddingLeft: 10,
  },
});
