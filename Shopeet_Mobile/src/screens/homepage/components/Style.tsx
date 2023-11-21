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
    height: Platform.OS === "ios" ? "62%" : "59%",
  },
  collectionListItemBtn: {
    width: "95%",
    height: 100,
    marginTop: 10,
    alignSelf: "center",
    borderRadius: 20,
    overflow: "hidden",
    justifyContent: "center",
    borderWidth: 0.5,
    borderColor: "gainsboro",
  },
  collectionListItemView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  collectionListItemText: {
    paddingLeft: 10,
    fontSize: Platform.OS === "android" ? 16 : 20,
    color: "whitesmoke",
    alignItems: "center",
    paddingTop: 20,
  },
  collectionListItemImage: {
    width: 150,
    height: 90,
    marginRight: 5,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
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
    color: "#E77602",
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
    justifyContent: "center",
    alignItems: "center",
  },
});
