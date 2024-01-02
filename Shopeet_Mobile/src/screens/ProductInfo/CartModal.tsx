import React, { useContext, useEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import { cartModalStyles } from "./Style";
import OctIcons from "react-native-vector-icons/Octicons";
import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import Entypo from "react-native-vector-icons/Entypo";
import { ShopContext } from "../../context/Auth/shopContext";
import {
  formatProductPrice,
  truncateText,
} from "../../resources/utils/functions";

const CartModal: React.FunctionComponent<{}> = () => {
  const navigation: any = useNavigation();
  const [cartLoading, setCartLoading] = useState<boolean>(true);
  const [customerProductInCart, setCustomerProductInCart] = useState<any>();
  const { customerCart } = useContext(ShopContext);
  let [prodCount, setProdCount] = useState<any>();

  useEffect(() => {
    loadCustomerProductInCart();
  }, []);

  //get product of customer into cart
  const loadCustomerProductInCart = () => {
    setCartLoading(true);
    if (customerCart && customerCart.length > 0) {
      setCartLoading(true);
      const customerProdInCart = customerCart.filter(
        (certainItem: any) => certainItem.customerId === 1
      );
      try {
        setCartLoading(true);
        if (customerProdInCart !== null) {
          setCustomerProductInCart(customerProdInCart);
          setCartLoading(false);
        } else {
          setCustomerProductInCart(null);
          setCartLoading(true);
        }
      } catch (err) {
        console.log(err);
        setCustomerProductInCart(null);
        setCartLoading(true);
      }
    } else {
      setCartLoading(false);
    }
  };

  return (
    <>
      <View style={cartModalStyles.container}>
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <View style={{ height: "55%", width: "100%" }}></View>
        </TouchableWithoutFeedback>
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
                  {customerProductInCart && customerProductInCart.length > 0 ? (
                    <>
                      {customerProductInCart.map((item: any, index: number) => (
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
                              <Text style={cartModalStyles.productListName}>
                                {truncateText(item.prodName)}
                              </Text>
                              <View style={cartModalStyles.listContentView}>
                                <TouchableOpacity
                                  style={cartModalStyles.listContentMinusBtn}
                                  onPress={() => {
                                    if (item.countOfProd > 1) {
                                      setProdCount(
                                        (prodCount = item.countOfProd--)
                                      );
                                    } else {
                                      //don't do anything
                                    }
                                  }}>
                                  <Entypo
                                    name='minus'
                                    size={Platform.OS === "ios" ? 25 : 20}
                                    color={"white"}
                                  />
                                </TouchableOpacity>
                                <Text>{item.countOfProd}</Text>
                                <TouchableOpacity
                                  style={cartModalStyles.listContentPlusBtn}
                                  onPress={() => {
                                    setProdCount(
                                      (prodCount = item.countOfProd++)
                                    );
                                  }}>
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
                        You currently do not have any item in cart(s)
                      </Text>
                    </View>
                  )}
                </>
              )}
            </ScrollView>
            <TouchableOpacity
              style={{
                backgroundColor: "#34bd34a2",
                width: "95%",
                paddingVertical: Platform.OS === "ios" ? 20 : 15,
                flexDirection: "row",
                justifyContent: "center",
                borderRadius: 10,
                alignSelf: "center",
                marginBottom: 10,
              }}
              onPress={() => navigation.navigate("Home")}>
              <Text
                style={{
                  fontFamily: "RobotoCondensed-Bold",
                  color: "white",
                  fontSize: Platform.OS === "ios" ? 19 : 16,
                }}>
                Proceed to payment
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default CartModal;
