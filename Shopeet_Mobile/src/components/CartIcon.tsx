import React, { useContext, useEffect } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Platform, Text, TouchableOpacity, View } from "react-native";
import { cartIconStyles } from "./Style";
import { cartIconProps } from "../interface/AppInterface";
import { ShopContext } from "../context/Auth/shopContext";

const CartIcon: React.FunctionComponent<cartIconProps> = ({ onNavigate }) => {
  const { countOfCartItems, getCountOfCartItems } = useContext(ShopContext);

  useEffect(() => {
    getCountOfCartItems();
  }, []);
  return (
    <>
      <View>
        <TouchableOpacity
          style={cartIconStyles.container}
          onPress={() => {
            onNavigate();
          }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={cartIconStyles.cartCount}>{countOfCartItems}</Text>
            <FontAwesome
              name='shopping-cart'
              size={Platform.OS === "ios" ? 35 : 30}
            />
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default CartIcon;
