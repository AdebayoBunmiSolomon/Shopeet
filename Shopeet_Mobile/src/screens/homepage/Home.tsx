import React, { useState } from "react";
import { View, Text } from "react-native";
import { homeScreenStyles } from "./Style";
import BottomTab from "../../navigations/BottomTab";
import HomePage from "./components/HomePage";
import Search from "./components/Search";
import Cart from "./components/Cart";
import Tag from "./components/Tag";
import User from "./components/User";

const Home: React.FunctionComponent<{}> = () => {
  const [state, setState] = useState<string>("home");
  return (
    <View style={homeScreenStyles.container}>
      {(() => {
        switch (state) {
          case "home":
            return <HomePage />;
          case "search":
            return <Search />;
          case "cart":
            return <Cart />;
          case "tag":
            return <Tag />;
          case "user":
            return <User />;
          default:
            return null;
        }
      })()}
      <BottomTab
        homeClick={() => {
          setState("home");
        }}
        searchClick={() => {
          setState("search");
        }}
        cartClick={() => {
          setState("cart");
        }}
        tagClick={() => {
          setState("tag");
        }}
        userClick={() => {
          setState("user");
        }}
        state={state}
      />
    </View>
  );
};

export default Home;
