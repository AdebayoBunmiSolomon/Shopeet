import { StyleSheet, Platform } from "react-native";

export const collectionStyleSheet = StyleSheet.create({
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

export const productListStyle = StyleSheet.create({
  productListView: {
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
    width: "45.5%",
    height: Platform.OS === "ios" ? 335 : 290,
    marginLeft: 10,
    marginBottom: 15,
  },
  productListImage: {
    width: "95%",
    height: "50%",
    marginLeft: 4,
    marginTop: 4,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  productListName: {
    alignSelf: "center",
    fontSize: Platform.OS === "ios" ? 20 : 18,
    fontFamily: "RobotoCondensed-Bold",
  },
  productPriceRatingView: {
    flexDirection: "column",
    alignItems: "center",
    paddingTop: Platform.OS === "ios" ? 5 : 0,
    gap: 2,
    paddingBottom: 15,
  },
  productPriceRatingText: {
    color: "#3a3c3fc3",
    fontSize: Platform.OS === "ios" ? 16 : 14,
  },
  productListBtnView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  productListBtn: {
    width: "100%",
    backgroundColor: "#E77602",
    height: Platform.OS === "ios" ? 50 : 40,
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  productListBtnText: {
    color: "white",
    fontFamily: "RobotoCondensed-Bold",
  },
});
