import { StyleSheet, Dimensions, Platform } from "react-native";
import {
  signUpScreenColors,
  welcomeScreenColors,
} from "../../resources/Colors";
import { loginScreenColors } from "../../resources/Colors";

const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;

export const welcomeScreenStyle = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: welcomeScreenColors.backGroundColors.form.tertiary,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    paddingTop: Platform.OS === "android" ? 50 : 60,
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
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

export const loginScreenStyle = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: loginScreenColors.form.tertiary,
    justifyContent: "center",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    paddingTop: Platform.OS === "android" ? 50 : 60,
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
  },
  formView: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  subFormView: {
    flexDirection: "column",
    gap: Platform.OS === "android" ? 40 : 45,
  },
  textInputView: {
    display: "flex",
    flexDirection: "row",
    width: "95%",
  },
  textInput: {
    borderBottomWidth: 1,
    width: "92%",
    fontSize: Platform.OS === "android" ? 15 : 16,
    paddingLeft: 3,
  },
  textInputIcon: {
    paddingTop: 5,
  },
  button: {
    backgroundColor: loginScreenColors.button.backGroundColor.tertiary,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  buttonText: {
    color: welcomeScreenColors.textColor.text.secondary,
    fontFamily: "RobotoCondensed-Bold",
    fontSize: Platform.OS === "android" ? 17 : 20,
  },
  bottomText: {
    color: "gray",
    fontSize: Platform.OS === "android" ? 17 : 20,
  },
  bottomTextView: {
    flexDirection: "row",
    justifyContent: "center",
  },
  bottomButtonText: {
    color: welcomeScreenColors.textColor.text.tertiary,
    fontFamily: "RobotoCondensed-Bold",
    fontSize: Platform.OS === "android" ? 17 : 20,
  },
  imageView: {
    display: "flex",
    alignItems: "center",
  },
  image: {
    height: 300,
    width: 300,
  },
});

export const signUpScreenStyle = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: signUpScreenColors.form.tertiary,
    justifyContent: "center",
  },
  scrollViewContainer: {
    display: "flex",
    justifyContent: "center",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    paddingTop: Platform.OS === "android" ? 50 : 60,
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
  },
  formView: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  subFormView: {
    width: screenWidth,
    height: screenHeight,
    flexDirection: "column",
    gap: Platform.OS === "android" ? 40 : 45,
    alignItems: "center",
    paddingTop: 20,
  },
  textInputView: {
    width: "95%",
    display: "flex",
  },
  textInput: {
    width: "99%",
    borderWidth: 1.1,
    height: 45,
    borderColor: "gray",
    borderRadius: 10,
    paddingLeft: 5,
  },
  buttonView: {
    width: "97%",
    alignItems: "center",
  },
  button: {
    backgroundColor: loginScreenColors.button.backGroundColor.secondary,
    height: 50,
    width: "97%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  buttonText: {
    color: welcomeScreenColors.textColor.text.secondary,
    fontFamily: "RobotoCondensed-Bold",
    fontSize: Platform.OS === "android" ? 17 : 20,
  },
});
