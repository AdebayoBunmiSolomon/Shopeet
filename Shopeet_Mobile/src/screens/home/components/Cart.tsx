import React, { useState, useContext, useEffect } from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Platform,
} from "react-native";
import CartIcon from "../../../components/CartIcon";
import { cartStyle } from "./Style";
import { ShopContext } from "../../../context/Auth/shopContext";
import Loader from "../../../components/Loader";
import { Image } from "expo-image";
import Octicons from "react-native-vector-icons/Octicons";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import {
  formatProductPrice,
  truncateText,
} from "../../../resources/utils/functions";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Cart: React.FunctionComponent<{}> = () => {
  const navigation: any = useNavigation();
  const isFocused = useIsFocused();
  const [cartLoading, setCartLoading] = useState<boolean>(true);
  const [customerProductInCart, setCustomerProductInCart] = useState<any>();
  const [totalPriceOfProduct, setTotalPriceOfProduct] = useState<any>();
  const [totalTotalItemsInCart, setTotalItemsInCart] = useState<any>();
  const [lengthOfCustomerCart, setLengthOfCustomerCart] = useState<number>();
  const [totalPriceOfProductLoading, setTotalPriceOfProductLoading] =
    useState<boolean>(true);
  const { customerCart, removeFromCart } = useContext(ShopContext);

  const cartModal = () => {
    navigation.navigate("CartModal");
  };

  //get product of customer into cart
  const loadCustomerProductInCart = (gottenCustomerCart: any) => {
    setCartLoading(true);
    if (gottenCustomerCart && gottenCustomerCart.length > 0) {
      setCartLoading(true);
      const customerProdInCart = gottenCustomerCart.filter(
        (certainItem: any) => certainItem.customerId === 1
      );
      try {
        setCartLoading(true);
        if (customerProdInCart !== null) {
          setCustomerProductInCart(customerProdInCart);
          calculateTotalPriceOfProduct(customerCart);
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

  const calculateTotalPriceOfProduct = (gottenCustomerProdInCart: any) => {
    try {
      setTotalPriceOfProductLoading(true);
      if (gottenCustomerProdInCart && gottenCustomerProdInCart.length > 0) {
        const priceOfProd = gottenCustomerProdInCart.map(
          (products: any) => products.price * products.countOfProd
        );
        const totalItemsInCart = gottenCustomerProdInCart.map(
          (products: any) => products.countOfProd
        );

        const arr = priceOfProd;
        const arr2 = totalItemsInCart;
        const length = priceOfProd.length - 1;
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
          sum += arr[i];
        }
        let sum2 = 0;
        for (let i = 0; i < arr.length; i++) {
          sum2 += arr2[i];
        }
        setTotalPriceOfProduct(sum);
        setLengthOfCustomerCart(length);
        setTotalItemsInCart(sum2);
        setTotalPriceOfProductLoading(false);
      } else {
        setTotalPriceOfProductLoading(true);
      }
    } catch (err) {
      console.log(err);
      setTotalPriceOfProductLoading(true);
    }
  };

  useEffect(() => {
    const load = () => {
      loadCustomerProductInCart(customerCart);
    };
    load();
  }, [isFocused, cartLoading, customerCart]);

  return (
    <View>
      <View style={cartStyle.topContentView}>
        <Text style={cartStyle.topContentText}>Cart</Text>
        <CartIcon
          onNavigate={() => {
            cartModal();
          }}
          customerId={1}
        />
      </View>
      <View style={cartStyle.listViewContainer}>
        <ScrollView contentContainerStyle={cartStyle.cartContainer}>
          {cartLoading === true ? (
            <View style={cartStyle.loadingView}>
              <Loader />
            </View>
          ) : (
            <>
              {customerProductInCart && customerProductInCart.length > 0 ? (
                <>
                  {customerProductInCart.map((item: any, index: number) => (
                    <View key={index} style={cartStyle.listContainer}>
                      <Image
                        source={{ uri: item.image }}
                        style={cartStyle.listImage}
                        transition={1000}
                        contentFit='fill'
                      />
                      <View style={cartStyle.listContentContainer}>
                        <View style={cartStyle.listContentView}>
                          <Text style={cartStyle.productListName}>
                            {truncateText(item.prodName)}
                          </Text>
                          <View style={cartStyle.innerListContentView}>
                            <Text>
                              <Text style={cartStyle.countText}>
                                Count:{"  "}
                              </Text>
                              {item.countOfProd}
                            </Text>
                            <Text style={cartStyle.listContentPrice}>
                              <Text style={cartStyle.newPriceText}>
                                New Price:{"  "}
                              </Text>
                              $
                              {formatProductPrice(
                                item.price * item.countOfProd
                              )}
                            </Text>
                          </View>
                        </View>
                        <View>
                          <TouchableOpacity
                            style={cartStyle.trashBtn}
                            onPress={() => {
                              removeFromCart(item.productId);
                            }}>
                            <Octicons
                              name='trash'
                              size={Platform.OS === "ios" ? 35 : 30}
                              color={"#F01530"}
                            />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  ))}
                </>
              ) : (
                <View style={cartStyle.noCartContainer}>
                  <TouchableOpacity style={cartStyle.container}>
                    <View style={{ flexDirection: "row" }}>
                      <View style={cartStyle.cartCountView}>
                        <Text style={cartStyle.cartCountText}>0</Text>
                      </View>
                      <FontAwesome
                        name='shopping-cart'
                        size={Platform.OS === "ios" ? 150 : 140}
                        color={"#c2b9b95e"}
                      />
                    </View>
                  </TouchableOpacity>
                  {/* <Text style={cartStyle.noCartText}>Your cart is empty</Text> */}
                </View>
              )}
            </>
          )}
        </ScrollView>
      </View>
      <View style={cartStyle.prodCalcView}>
        <View style={cartStyle.prodCalcInfoView}>
          <Text style={cartStyle.prodCalcLeftText}>
            Total Price of Product:{" "}
          </Text>
          <Text style={cartStyle.prodCalcRightText}>
            ${" "}
            {formatProductPrice(
              Number(!totalPriceOfProduct ? 0 : totalPriceOfProduct)
            )}
          </Text>
        </View>
        <View style={cartStyle.prodCalcInfoView}>
          <Text style={cartStyle.prodCalcLeftText}>
            Total Number of Product:{" "}
          </Text>
          <Text style={cartStyle.prodCalcRightText}>
            {lengthOfCustomerCart}
          </Text>
        </View>
        <View style={cartStyle.prodCalcInfoView}>
          <Text style={cartStyle.prodCalcLeftText}>
            Total Number of Items:{" "}
          </Text>
          <Text style={cartStyle.prodCalcRightText}>
            {totalTotalItemsInCart}
          </Text>
        </View>
        <TouchableOpacity
          style={cartStyle.paymentBtn}
          onPress={() => {
            navigation.navigate("Payment", { totalPriceOfProduct });
          }}>
          <Text style={cartStyle.paymentBtnText}>Process payment</Text>
          <Text style={cartStyle.paymentBtnText}>
            ${" "}
            {formatProductPrice(
              Number(!totalPriceOfProduct ? 0 : totalPriceOfProduct)
            )}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;
