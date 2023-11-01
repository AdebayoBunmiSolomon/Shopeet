import { StyleSheet, Dimensions, Platform } from "react-native";
import { welcomeScreenColors } from "../../resources/Colors";

const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;

export const welcomeScreenStyle = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: welcomeScreenColors.backGroundColors.form.tertiary,
  },
  imageView: {
    display: "flex",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? 80 : 100,
  },
  image: {
    height: 300,
    width: 300,
  },
  buttonView: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 20,
    paddingBottom: Platform.OS === "android" ? 20 : 30,
  },
  loginBtn: {
    backgroundColor: welcomeScreenColors.backGroundColors.buttons.tertiary,
    width: screenWidth - 20,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  loginBtnText: {
    color: welcomeScreenColors.textColor.text.secondary,
    fontFamily: "RobotoCondensed-Bold",
    fontSize: Platform.OS === "android" ? 17 : 20,
  },
  signUpBtn: {
    backgroundColor: welcomeScreenColors.backGroundColors.buttons.secondary,
    width: screenWidth - 20,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  signUpBtnText: {
    color: welcomeScreenColors.textColor.text.secondary,
    fontFamily: "RobotoCondensed-Bold",
    fontSize: Platform.OS === "android" ? 17 : 20,
  },
});

export const LoginScreenStyle = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
  },
});
