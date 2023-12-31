import { StyleSheet, Platform, PlatformColor } from "react-native";

export const paymentStyles = StyleSheet.create({
  container: {
    backgroundColor: "#22151840",
    width: "100%",
    height: "100%",
    top: 0,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  formView: {
    backgroundColor: "white",
    width: "80%",
    height: "40%",
    borderRadius: 20,
    overflow: "hidden",
  },
  formContentView: {
    flexDirection: "column",
    gap: 10,
    marginTop: 10,
  },
  formTopText: {
    fontFamily: "RobotoCondensed-Bold",
    fontSize: Platform.OS === "ios" ? 20 : 18,
    paddingLeft: 10,
    paddingTop: 10,
  },
  amtView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "95%",
    height: 35,
  },
  amtText: {
    fontFamily: "RobotoCondensed-Bold",
    fontSize: Platform.OS === "ios" ? 30 : 25,
    color: "grey",
    opacity: 0.7,
  },
  locationInput: {
    width: "95%",
    borderWidth: 0.5,
    borderColor: "gainsboro",
    alignSelf: "center",
    borderRadius: 5,
    height: "48%",
  },
  btnView: {
    flexDirection: "column",
    width: "100%",
    gap: 10,
  },
  continueBtn: {
    backgroundColor: "#34bd34a2",
    height: 30,
    width: "95%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  closeBtn: {
    backgroundColor: "#221518",
    height: 30,
    width: "95%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  btnText: {
    color: "white",
    fontFamily: "RobotoCondensed-Bold",
    fontSize: Platform.OS === "ios" ? 16 : 14,
  },
});
