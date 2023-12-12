import { StyleSheet, Platform } from "react-native";

export const productInfoStyle = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 50 : 60,
    paddingLeft: 10,
    flex: 1,
  },
  navigationView: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 10,
    justifyContent: "flex-start",
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
    paddingBottom: Platform.OS === "ios" ? 20 : 10,
  },
  likeBtn: {
    backgroundColor: "white",
    width: Platform.OS === "ios" ? 50 : 40,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "ios" ? 10 : 5,
    paddingBottom: Platform.OS === "ios" ? 10 : 5,
    borderRadius: 50,
  },
  loaderView: {
    width: "97%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  indicatorView: {
    padding: 10,
    flexDirection: "row",
    display: "flex",
  },
  imageView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingLeft: Platform.OS === "ios" ? 30 : 20,
    paddingRight: Platform.OS === "ios" ? 30 : 20,
  },
  imageBtnView: {
    flexDirection: "column",
    justifyContent: "center",
    zIndex: 20,
  },
  imgSideBtn: {
    backgroundColor: "white",
    width: Platform.OS === "ios" ? 50 : 40,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "ios" ? 10 : 5,
    paddingBottom: Platform.OS === "ios" ? 10 : 5,
    borderRadius: 50,
  },
  productName: {
    fontSize: Platform.OS === "ios" ? 25 : 20,
    width: "97%",
    paddingTop: 10,
    fontFamily: "RobotoCondensed-Bold",
    color: "#221518",
  },
  productAbout: {
    fontFamily: "RobotoCondensed-Regular",
    fontSize: Platform.OS === "ios" ? 18 : 15,
    width: "97%",
    paddingTop: 5,
    color: "#3a3c3fc3",
    textAlign: "justify",
  },
  productRatingView: {
    flexDirection: "row",
    width: "97%",
    justifyContent: "space-between",
  },
  productRating: {
    color: "#3a3c3fc3",
    fontFamily: "RobotoCondensed-Bold",
    fontSize: Platform.OS === "ios" ? 18 : 15,
  },
  productPrice: {
    fontFamily: "RobotoCondensed-Bold",
    fontSize: Platform.OS === "ios" ? 25 : 20,
    color: "#E77602",
  },
  productDescription: {
    fontSize: Platform.OS === "ios" ? 25 : 20,
    width: "97%",
    paddingTop: 10,
    fontFamily: "RobotoCondensed-Bold",
    color: "#221518",
  },
  productDescriptionText: {
    fontFamily: "RobotoCondensed-Regular",
    fontSize: Platform.OS === "ios" ? 18 : 15,
    width: "97%",
    paddingTop: 10,
    color: "#3a3c3fc3",
    textAlign: "justify",
    paddingBottom: 10,
  },
  reviewBtnView: {
    position: "absolute",
    right: 15,
    bottom: 100,
  },
  reviewBtn: {
    backgroundColor: "#221518",
    width: 50,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 50,
    paddingHorizontal: 12,
    borderWidth: 0.5,
    borderColor: "white",
  },
  bottomBtnView: {
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  bottomBtnText: {
    color: "white",
    fontFamily: "RobotoCondensed-Bold",
    fontSize: Platform.OS === "ios" ? 18 : 15,
  },
  addToCartBtn: {
    backgroundColor: "#E77602",
    width: "48%",
    alignSelf: "center",
    height: Platform.OS === "android" ? 50 : 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: "white",
  },
  checkReviewsBtn: {
    backgroundColor: "#221518",
    width: "48%",
    alignSelf: "center",
    height: Platform.OS === "android" ? 50 : 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: "white",
  },
});

export const productReviewStyle = StyleSheet.create({
  container: {
    backgroundColor: "#22151850",
    width: "100%",
    height: "100%",
    top: 0,
    position: "absolute",
    justifyContent: "flex-end",
  },
  sheetModal: {
    backgroundColor: "#E77602",
    width: "100%",
    height: "45%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
  },
  sheetModalTopContentView: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
  },
  sheetModalTopContentText: {
    fontFamily: "RobotoCondensed-Bold",
    fontSize: Platform.OS === "ios" ? 20 : 17,
    paddingLeft: 10,
    color: "white",
  },
});