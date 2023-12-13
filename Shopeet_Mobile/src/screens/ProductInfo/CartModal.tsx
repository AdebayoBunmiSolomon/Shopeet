import React, { useContext, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  Platform,
} from "react-native";
import { cartModalStyles } from "./Style";
import OctIcons from "react-native-vector-icons/Octicons";
import { useNavigation } from "@react-navigation/native";
import { ShopContext } from "../../context/Auth/shopContext";
import { Image } from "expo-image";
import Entypo from "react-native-vector-icons/Entypo";

const CartModal: React.FunctionComponent<{}> = () => {
  const navigation: any = useNavigation();
  const { customerCart, cartLoading, getCustomerCart } =
    useContext(ShopContext);

  const formatProductPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  useEffect(() => {
    getCustomerCart();
  }, []);

  return (
    <>
      <View style={cartModalStyles.container}>
        <View style={cartModalStyles.sheetModal}>
          <View style={cartModalStyles.sheetModalTopContentView}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <OctIcons name='chevron-down' size={30} color={"#E77602"} />
            </TouchableOpacity>
            <Text style={cartModalStyles.sheetModalTopContentText}>Carts</Text>
          </View>
          <View style={{ height: "82%" }}>
            <ScrollView
              contentContainerStyle={cartModalStyles.cartContainer}
              showsVerticalScrollIndicator={false}>
              {cartLoading === true ? (
                <View style={cartModalStyles.loadingView}>
                  <Text style={cartModalStyles.loadingText}>loading...</Text>
                </View>
              ) : (
                <>
                  {customerCart && customerCart.length > 0 ? (
                    <>
                      {customerCart.map((item: any, index: number) => (
                        <View key={index} style={cartModalStyles.listContainer}>
                          <Image
                            source={{ uri: item.image }}
                            style={cartModalStyles.listImage}
                            transition={1000}
                            contentFit='fill'
                          />
                          <View style={cartModalStyles.listContentContainer}>
                            <View
                              style={{
                                flexDirection: "column",
                                justifyContent: "center",
                                gap: 7,
                              }}>
                              <Text>Name of Product</Text>
                              <View style={cartModalStyles.listContentView}>
                                <TouchableOpacity
                                  style={cartModalStyles.listContentMinusBtn}>
                                  <Entypo
                                    name='minus'
                                    size={Platform.OS === "ios" ? 25 : 20}
                                    color={"white"}
                                  />
                                </TouchableOpacity>
                                <Text>1</Text>
                                <TouchableOpacity
                                  style={cartModalStyles.listContentPlusBtn}>
                                  <Entypo
                                    name='plus'
                                    size={Platform.OS === "ios" ? 25 : 20}
                                    color={"white"}
                                  />
                                </TouchableOpacity>
                              </View>
                            </View>
                            <Text style={cartModalStyles.listContentPrice}>
                              ${formatProductPrice(item.price)}
                            </Text>
                          </View>
                        </View>
                      ))}
                    </>
                  ) : (
                    <View style={cartModalStyles.noCartContainer}>
                      <Text style={cartModalStyles.noCartText}>
                        You currently do not have any cart(s)
                      </Text>
                    </View>
                  )}
                </>
              )}
            </ScrollView>
          </View>
        </View>
      </View>
    </>
  );
};

export default CartModal;
