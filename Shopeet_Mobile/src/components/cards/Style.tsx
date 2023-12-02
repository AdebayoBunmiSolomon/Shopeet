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
