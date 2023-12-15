import React, { createContext, useState } from "react";
import Toast from "react-native-toast-message";

//empty customer cart
const customerBasket = [
  {
    customerId: 0,
    productId: 0,
    image: "",
    price: 0,
    countOfProd: 0,
  },
];

export const ShopContext = createContext<any>(null);

export const ShopContextProvider = (props: any) => {
  const [selectedCollection, setSelectedCollection] =
    useState<string>("Product");
  const [customerCart, setCustomerCart] = useState<any>();
  const [customerCartLength, setCustomerCartLength] = useState<any>(0);
  const [addToCartLoading, setAddToCartLoading] = useState<boolean>(false);

  //get the selected collection from the collection modal
  const getSelectedCollection = (itemName: string) => {
    setSelectedCollection(itemName);
  };

  //add particular product to cart
  const addToCart = (
    gottenProdId: number,
    gottenCustomerId: number,
    gottenImage: string,
    gottenPrice: number,
    countOfProd: number
  ) => {
    if (customerBasket && customerBasket.length > 0) {
      const product = customerBasket.filter(
        (prodItem: any) => prodItem.productId === gottenProdId
      );
      if (product && product.length > 0) {
        Toast.show({
          type: "info",
          text1: "Cart Information",
          text2: "cart updated successfully",
        });
      } else {
        pushProductToBasket(
          gottenCustomerId,
          gottenProdId,
          gottenImage,
          gottenPrice,
          countOfProd
        );
        Toast.show({
          type: "success",
          text1: "Cart Information",
          text2: "product added successfully",
        });
      }
    }
    setCustomerCart(customerBasket);
    getLengthOfCustomerCart(gottenCustomerId);
  };

  //push product to basket
  const pushProductToBasket = (
    gottenCustomerId: number,
    gottenProdId: number,
    gottenImage: string,
    gottenPrice: number,
    countOfProd: number
  ) => {
    try {
      customerBasket.push({
        customerId: gottenCustomerId,
        productId: gottenProdId,
        image: gottenImage,
        price: gottenPrice,
        countOfProd: countOfProd,
      });
    } catch (err) {
      console.log(err);
    }
  };

  //get length of customer product in cart
  const getLengthOfCustomerCart = (gottenCustomerId: number) => {
    setAddToCartLoading(true);
    try {
      setAddToCartLoading(true);
      if (customerCart && customerCart.length > 0) {
        const cartLength = customerCart.filter(
          (cartItems: any) => cartItems.customerId === gottenCustomerId
        ).length;
        setCustomerCartLength(cartLength);
        setAddToCartLoading(false);
      } else {
        setAddToCartLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const contextValue = {
    selectedCollection,
    getSelectedCollection,
    addToCart,
    customerCartLength,
    getLengthOfCustomerCart,
    customerCart,
    addToCartLoading,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
