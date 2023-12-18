import React from "react";
import { StyleSheet, Platform } from "react-native";

export const homePageStyle = StyleSheet.create({
  topContainer: {
    flexDirection: "row",
    paddingLeft: 10,
    paddingBottom: 10,
  },
  locationText: {
    fontSize: Platform.OS === "android" ? 15 : 17,
    fontFamily: "RobotoCondensed-Bold",
    color: "#E77602",
    marginTop: 2,
  },
  collectionView: {
    flexDirection: "column",
    gap: 5,
    paddingTop: 20,
    paddingLeft: 10,
    paddingBottom: 5,
  },
  collectionTopText: {
    fontFamily: "RobotoCondensed-Bold",
    fontSize: Platform.OS === "android" ? 30 : 35,
    color: "#221518",
  },
  collectionBottomText: {
    fontFamily: "RobotoCondensed-Regular",
    fontSize: Platform.OS === "android" ? 15 : 17,
    color: "gray",
  },
  collectionListView: {
    height: Platform.OS === "ios" ? "45%" : "42%",
  },
});

export const searchStyle = StyleSheet.create({
  searchTopTextView: {
    flexDirection: "row",
  },
  searchTopText: {
    fontSize: Platform.OS === "ios" ? 25 : 20,
    fontFamily: "RobotoCondensed-Bold",
    paddingLeft: 10,
  },
  searchTopImage: {
    width: 25,
    height: 25,
  },
  searchView: {
    flexDirection: "column",
    gap: 10,
  },
  searchContentView: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  searchTextInputView: {
    height: Platform.OS === "ios" ? 55 : 45,
    borderWidth: 0.5,
    alignItems: "center",
    width: "87%",
    alignSelf: "center",
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    overflow: "hidden",
    flexDirection: "row",
  },
  searchTextInput: {
    height: Platform.OS === "ios" ? 50 : 40,
    paddingLeft: 2,
    marginLeft: 3,
    width: "89%",
  },
  searchFilterBtn: {
    backgroundColor: "#300fd8e1",
    width: 50,
    height: Platform.OS === "ios" ? 55 : 45,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  searchFindBtn: {
    backgroundColor: "#0B1423",
    width: "95%",
    height: Platform.OS === "ios" ? 38 : 32,
    borderWidth: 0.5,
    borderColor: "#0B1423",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 10,
  },
  searchFindBtnText: {
    color: "#ffffffc0",
    fontFamily: "RobotoCondensed-Regular",
    fontSize: Platform.OS === "ios" ? 17 : 13,
  },
  shopeetTopView: {
    flexDirection: "column",
    gap: 5,
    paddingTop: 20,
    paddingLeft: 10,
    paddingBottom: 5,
  },
  shopeetTopText: {
    fontFamily: "RobotoCondensed-Bold",
    fontSize: Platform.OS === "android" ? 30 : 35,
    color: "#0B1423",
  },
  shopeetBottomText: {
    fontFamily: "RobotoCondensed-Regular",
    fontSize: Platform.OS === "android" ? 15 : 17,
    color: "gray",
  },
  productCountView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
  },
  productCountText: {
    fontSize: Platform.OS === "ios" ? 19 : 16,
    color: "#0B1423",
    fontWeight: Platform.OS === "ios" ? "300" : "400",
  },
  showAllText: {
    fontSize: Platform.OS === "ios" ? 18 : 16,
    color: "#300fd8e1",
    fontWeight: Platform.OS === "ios" ? "600" : "700",
  },
  productListView: {
    height: Platform.OS === "ios" ? "65%" : "63%",
    alignItems: "center",
  },
});

export const cartStyle = StyleSheet.create({
  topContentView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
  },
  topContentText: {
    fontSize: Platform.OS === "ios" ? 25 : 20,
    fontFamily: "RobotoCondensed-Bold",
  },
  cartContainer: {
    width: "97%",
    alignSelf: "center",
    paddingLeft: 5,
    flexDirection: "column",
    gap: 20,
    overflow: "scroll",
    flexGrow: 1,
  },
  listViewContainer: {
    height: "60%",
    marginTop: 20,
    alignItems: "center",
    paddingTop: 7,
  },
  loadingView: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  listContentView: {
    flexDirection: "column",
    justifyContent: "center",
    gap: 7,
  },
  noCartContainer: {
    width: "99%",
    height: "85%",
    justifyContent: "center",
    alignItems: "center",
  },
  noCartText: {
    color: "#E77602",
    fontFamily: "RobotoCondensed-Bold",
    fontSize: Platform.OS === "ios" ? 20 : 17,
  },
  listContainer: {
    backgroundColor: "white",
    borderRadius: 15,
    overflow: "hidden",
    flexDirection: "row",
  },
  listImage: {
    width: 120,
    height: 90,
    marginRight: 5,
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
  },
  listContentContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "65%",
  },
  innerListContentView: {
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  countText: {
    fontFamily: "RobotoCondensed-Bold",
    fontSize: Platform.OS === "ios" ? 17 : 15,
  },
  newPriceText: {
    fontFamily: "RobotoCondensed-Bold",
    fontSize: Platform.OS === "ios" ? 17 : 15,
  },
  trashBtn: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "whitesmoke",
    borderRadius: 50,
  },
  listContentPrice: {
    fontFamily: "RobotoCondensed-Bold",
    fontSize: Platform.OS === "ios" ? 20 : 18,
    color: "#E77602",
  },
  prodCalcView: {
    flexDirection: "column",
    gap: 20,
    alignItems: "center",
    width: "100%",
  },
  prodCalcInfoView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 14,
    paddingRight: 14,
    width: "100%",
  },
  prodCalcLeftText: {
    color: "#221518",
    fontFamily: "RobotoCondensed-Bold",
    fontSize: Platform.OS === "ios" ? 20 : 18,
  },
  prodCalcRightText: {
    color: "#3a3c3fc3",
    fontFamily: "RobotoCondensed-Bold",
    fontSize: Platform.OS === "ios" ? 20 : 18,
  },
  paymentBtn: {
    backgroundColor: "#34bd34a2",
    width: "95%",
    paddingVertical: Platform.OS === "ios" ? 20 : 15,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
  },
  paymentBtnText: {
    fontFamily: "RobotoCondensed-Bold",
    color: "white",
    fontSize: Platform.OS === "ios" ? 19 : 16,
  },
});
