import React, { useContext, useEffect } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Platform, Text, TouchableOpacity, View } from "react-native";
import { cartIconStyles } from "./Style";
import { cartIconProps } from "../interface/AppInterface";
import { ShopContext } from "../context/Auth/shopContext";

const CartIcon: React.FunctionComponent<cartIconProps> = ({
  onNavigate,
  customerId,
}) => {
  const { customerCartLength, getLengthOfCustomerCart, customerCart } =
    useContext(ShopContext);

  useEffect(() => {
    getLengthOfCustomerCart(customerId);
  }, [customerCart, customerId]);
  return (
    <>
      <View>
        <TouchableOpacity
          style={cartIconStyles.container}
          onPress={() => {
            onNavigate();
          }}>
          <View style={{ flexDirection: "row" }}>
            <View style={cartIconStyles.cartCountView}>
              <Text style={cartIconStyles.cartCountText}>
                {customerCartLength}
              </Text>
            </View>
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
