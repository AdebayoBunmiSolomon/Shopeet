import { StyleSheet, Platform } from "react-native";

export const productInfoStyle = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 50 : 60,
    paddingLeft: 10,
  },
  topText: {
    fontFamily: "RobotoCondensed-Bold",
    fontSize: Platform.OS === "ios" ? 25 : 20,
    color: "#221518",
  },
  productInfoView: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#dde5f0c3",
    width: "97%",
    padding: 10,
    overflow: "hidden",
    borderRadius: 20,
  },
  likeBtnView: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingBottom: 10,
  },
  likeBtn: {
    backgroundColor: "white",
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 50,
  },
});
