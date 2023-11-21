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
  headerText: {
    color: welcomeScreenColors.textColor.text.tertiary,
    fontSize: 30,
    fontFamily: "RobotoCondensed-Bold",
  },
  subHeaderText: {
    color: welcomeScreenColors.textColor.text.primary,
    fontSize: Platform.OS === "android" ? 15 : 17,
    opacity: 0.6,
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
    height: Platform.OS === "android" ? 50 : 60,
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
    height: Platform.OS === "android" ? 50 : 60,
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
  headerText: {
    color: welcomeScreenColors.textColor.text.tertiary,
    fontSize: 30,
    fontFamily: "RobotoCondensed-Bold",
  },
  subHeaderText: {
    color: welcomeScreenColors.textColor.text.primary,
    fontSize: Platform.OS === "android" ? 15 : 17,
    opacity: 0.6,
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
    height: Platform.OS === "android" ? 50 : 60,
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
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    right: 0,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    paddingTop: Platform.OS === "android" ? 50 : 60,
    paddingLeft: 10,
    paddingRight: 10,
  },
  goBackBtn: {
    padding: 5,
    marginTop: 10,
    borderRadius: 50,
  },
  goBackBtnIcon: {
    color: "white",
  },
  headerText: {
    color: welcomeScreenColors.textColor.text.secondary,
    fontSize: 30,
    fontFamily: "RobotoCondensed-Bold",
  },
  subHeaderText: {
    color: welcomeScreenColors.textColor.text.secondary,
    fontSize: Platform.OS === "android" ? 15 : 17,
    opacity: 0.6,
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  dotView: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    backgroundColor: "#F2EBEE",
    width: 40,
    height: 3,
    borderRadius: 5,
    marginLeft: 10,
  },
  bottomBtnView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingRight: 20,
    paddingLeft: 20,
    paddingBottom: Platform.OS === "android" ? 20 : 30,
  },
  bottomBtnText: {
    color: signUpScreenColors.button.textColor.tertiary,
    fontFamily: "RobotoCondensed-Regular",
    fontSize: 17,
  },
  nextBtn: {
    backgroundColor: signUpScreenColors.button.backGroundColor.secondary,
    width: 150,
    height: 50,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  skipBtn: {
    width: 150,
    height: 50,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "flex-start",
  },
});
