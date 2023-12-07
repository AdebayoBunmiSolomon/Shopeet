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
  closeBtnView: {},
});
