import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from "react-native";
import HomeIcon from "react-native-vector-icons/FontAwesome";
import SearchIcon from "react-native-vector-icons/FontAwesome";
import CartIcon from "react-native-vector-icons/FontAwesome";
import TagIcon from "react-native-vector-icons/FontAwesome";
import UserIcon from "react-native-vector-icons/FontAwesome";
import { bottomTabProps } from "../interface/AppInterface";

const BottomTab: React.FunctionComponent<bottomTabProps> = ({
  homeClick,
  searchClick,
  cartClick,
  tagClick,
  userClick,
  state,
}) => {
  return (
    <View style={bottomTabStyle.container}>
      <View style={bottomTabStyle.bottomTabView}>
        <TouchableOpacity onPress={() => homeClick()}>
          <HomeIcon
            name='home'
            size={25}
            color={state === "home" ? "#E77602" : "gray"}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => searchClick()}>
          <SearchIcon
            name='search'
            size={25}
            color={state === "search" ? "#E77602" : "gray"}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => cartClick()}>
          <CartIcon
            name='shopping-cart'
            size={25}
            color={state === "cart" ? "#E77602" : "gray"}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => tagClick()}>
          <TagIcon
            name='tags'
            size={25}
            color={state === "tag" ? "#E77602" : "gray"}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => userClick()}>
          <UserIcon
            name='user'
            size={25}
            color={state === "user" ? "#E77602" : "gray"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomTab;

const bottomTabStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: Platform.OS === "android" ? 20 : 30,
  },
  bottomTabView: {
    flexDirection: "row",
    backgroundColor: "#0B1423",
    width: "85%",
    height: Platform.OS === "android" ? 50 : 60,
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: "white",
  },
});
