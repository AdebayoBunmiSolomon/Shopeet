import { Dimensions, Platform, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export const appNameStyle = StyleSheet.create({
  appNameView: {
    paddingTop: 15,
  },
  appNameText: {
    fontSize: Platform.OS === "android" ? 17 : 20,
    fontFamily: "RobotoCondensed-Bold",
  },
});

export const messageStyle = StyleSheet.create({
  animatedView: {
    flex: 1,
    width: width,
    height: height / 10,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    marginTop: Platform.OS === "android" ? 50 : 60,
  },
  msgContainer: {
    backgroundColor: "white",
    width: "90%",
    height: 80,
    borderRadius: 15,
    overflow: "hidden",
    borderWidth: 0.5,
    borderColor: "gray",
  },
  msgContentView: {
    flexDirection: "row",
  },
  lineView: {
    width: 15,
    height: 80,
  },
  messageText: {
    fontSize: 15,
    fontFamily: "RobotoCondensed-Bold",
    color: "#221518",
    paddingLeft: 10,
  },
});

export const sheetModalStyles = StyleSheet.create({
  container: {
    backgroundColor: "#22151850",
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    backgroundColor: "white",
    width: "85%",
    height: "40%",
    borderRadius: 20,
    overflow: "hidden",
    borderWidth: 0.5,
    borderColor: "#E77602",
  },
  contentTopText: {
    color: "black",
    fontSize: Platform.OS === "ios" ? 20 : 18,
    fontFamily: "RobotoCondensed-Bold",
    alignSelf: "center",
  },
  selectionView: {
    flexDirection: "column",
    gap: 15,
    padding: 10,
  },
  collectionListView: {
    height: "77%",
  },
  closeBtnView: {
    flex: 1,
    justifyContent: "flex-end",
  },
  closeBtn: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F01530",
    height: Platform.OS === "ios" ? 45 : 40,
    marginBottom: -1,
  },
  btnText: {
    color: "white",
    fontFamily: "RobotoCondensed-Bold",
  },
  flatListBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  flatListText: {
    padding: 10,
    // color: "#3a3c3fc3",
  },
  flatListIcon: {
    padding: 10,
  },
});

export const indicatorsStyle = StyleSheet.create({
  indicatorListView: {
    width: 10,
    height: 10,
    borderRadius: 50,
    borderWidth: 0.5,
    borderColor: "whitesmoke",
  },
  indicatorText: {
    opacity: 0.0,
  },
});

export const cartIconStyles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  cartCount: {
    position: "absolute",
    color: "white",
    zIndex: 1,
    fontFamily: "RobotoCondensed-Bold",
    fontSize: Platform.OS === "ios" ? 15 : 13,
    backgroundColor: "#F01530",
    paddingHorizontal: 7,
    paddingVertical: 1,
    borderRadius: 50,
    marginTop: -10,
    marginLeft: -5,
  },
});
