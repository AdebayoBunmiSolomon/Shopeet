import React, { createContext, useState } from "react";
import { cartList } from "../../resources/utils/Cart";
import Toast from "react-native-toast-message";

export const ShopContext = createContext<any>(null);

export const ShopContextProvider = (props: any) => {
  const [selectedCollection, setSelectedCollection] =
    useState<string>("Product");
  const [customerCart, setCustomerCart] = useState<any>();
  const [cartLoading, setCartLoading] = useState<boolean>(true);
  const [countOfCartItems, setCountOfCartItem] = useState<number | null>(0);
  const [checkCart, setCheckCart] = useState<boolean>(false);

  //get the selected collection from the collection modal
  const getSelectedCollection = (itemName: string) => {
    setSelectedCollection(itemName);
  };

  const addToCart = (gottenProdId: number, customerId: number) => {
    const productList = cartList.filter(
      (cart: any) =>
        cart.productId === gottenProdId && cart.customerId === customerId
    );
    if (productList.length > 0) {
      Toast.show({
        type: "info",
        text1: "Cart Information",
        text2: "Product already added to cart",
      });
      setCheckCart(!checkCart);
    } else {
      setCheckCart(!checkCart);
    }
  };

  const getCountOfCartItems = () => {
    const countOfItemsInCart: number = cartList.filter(
      (cart: any) => cart.customerId === 1
    ).length;
    try {
      if (countOfItemsInCart !== null) {
        setCountOfCartItem(countOfItemsInCart);
      } else {
        console.log(0);
        setCountOfCartItem(0);
      }
    } catch (err) {
      console.log(err);
      setCountOfCartItem(0);
    }
  };

  const getCustomerCart = () => {
    setCartLoading(true);

    const customerCartList = cartList.filter(
      (cart: any) => cart.customerId === 1
    );
    try {
      setCartLoading(true);
      if (customerCartList !== null) {
        setCustomerCart(customerCartList);
        setCartLoading(false);
      } else {
        setCustomerCart(null);
        setCartLoading(true);
      }
    } catch (err) {
      console.log(err);
      setCustomerCart(null);
      setCartLoading(true);
    }
  };

  const contextValue = {
    selectedCollection,
    getSelectedCollection,
    customerCart,
    cartLoading,
    getCustomerCart,
    countOfCartItems,
    getCountOfCartItems,
    addToCart,
    checkCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
