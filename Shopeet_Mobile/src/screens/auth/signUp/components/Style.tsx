import { StyleSheet } from "react-native";
import { signUpScreenColors } from "../../../../resources/Colors";

export const firstScreenStyle = StyleSheet.create({
  formView: {
    flexDirection: "column",
    gap: 10,
  },
  label: {
    fontFamily: "RobotoCondensed-Regular",
    fontSize: 17,
    color: signUpScreenColors.button.textColor.tertiary,
    paddingLeft: 10,
  },
  textInput: {
    width: 300,
    height: 50,
    paddingLeft: 5,
    borderRadius: 20,
    backgroundColor: "white",
    borderWidth: 0.5,
  },
  phonePadView: {
    width: 300,
    height: 50,
    borderRadius: 20,
    backgroundColor: "white",
    borderWidth: 0.5,
    flexDirection: "row",
    overflow: "hidden",
  },
  phonePadButton: {
    backgroundColor: "#1a1b1dfc",
    justifyContent: "center",
    alignItems: "center",
  },
  phonePadTextInput: {
    width: 239,
    height: 49,
    paddingLeft: 5,
    backgroundColor: "white",
  },
});

export const secondScreenStyle = StyleSheet.create({
  formView: {
    flexDirection: "column",
    gap: 10,
  },
  label: {
    fontFamily: "RobotoCondensed-Regular",
    fontSize: 17,
    color: signUpScreenColors.button.textColor.tertiary,
    paddingLeft: 10,
  },
  textInput: {
    width: 300,
    height: 50,
    paddingLeft: 5,
    borderRadius: 20,
    backgroundColor: "white",
    borderWidth: 0.5,
  },
});

export const thirdScreenStyle = StyleSheet.create({
  formView: {
    flexDirection: "column",
    gap: 10,
  },
  label: {
    fontFamily: "RobotoCondensed-Regular",
    fontSize: 17,
    color: signUpScreenColors.button.textColor.tertiary,
    paddingLeft: 10,
  },
  textInput: {
    width: 300,
    height: 50,
    paddingLeft: 5,
    borderRadius: 20,
    backgroundColor: "white",
    borderWidth: 0.5,
  },
});
