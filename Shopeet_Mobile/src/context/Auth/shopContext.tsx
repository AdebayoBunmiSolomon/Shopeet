import React, { createContext, useState } from "react";
import { Alert } from "react-native";
import Toast from "react-native-toast-message";

//empty customer cart
const customerBasket = [
  {
    customerId: 0,
    productId: 0,
    prodName: "",
    image: "",
    price: 0,
    countOfProd: 0,
  },
];

export const ShopContext = createContext<any>(null);

export const ShopContextProvider = (props: any) => {
  const [selectedCollection, setSelectedCollection] =
    useState<string>("Product");
  const [customerCart, setCustomerCart] = useState<any>(customerBasket);
  const [customerCartLength, setCustomerCartLength] = useState<any>(0);
  const [addToCartLoading, setAddToCartLoading] = useState<boolean>(false);

  //get the selected collection from the collection modal
  const getSelectedCollection = (itemName: string) => {
    setSelectedCollection(itemName);
  };

  //add particular product to cart
  const addToCart = (
    gottenProdId: number,
    gottenProdName: string,
    gottenCustomerId: number,
    gottenImage: string,
    gottenPrice: number,
    countOfProd: number
  ) => {
    if (customerCart && customerCart.length > 0) {
      const product = customerCart.filter(
        (prodItem: any) => prodItem.productId === gottenProdId
      );
      if (product && product.length > 0) {
        updateProductInCart(
          gottenProdId,
          gottenProdName,
          gottenCustomerId,
          gottenImage,
          gottenPrice,
          countOfProd
        );
        Toast.show({
          type: "info",
          text1: "Cart Information",
          text2: "cart updated successfully",
        });
      } else {
        pushProductToCart(
          gottenCustomerId,
          gottenProdId,
          gottenProdName,
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
    // setCustomerCart(customerBasket);
    getLengthOfCustomerCart(gottenCustomerId);
  };

  //update product in cart
  const updateProductInCart = (
    gottenProdId: number,
    gottenProdName: string,
    gottenCustomerId: number,
    gottenImage: string,
    gottenPrice: number,
    countOfProd: number
  ) => {
    const productItem = customerCart.filter(
      (cartItem: any) => gottenProdId !== cartItem.productId
    );
    productItem.push({
      customerId: gottenCustomerId,
      productId: gottenProdId,
      prodName: gottenProdName,
      image: gottenImage,
      price: gottenPrice,
      countOfProd: countOfProd,
    });
    const updatedCart = productItem;
    setCustomerCart(updatedCart);
  };

  //push product to basket
  const pushProductToCart = (
    gottenCustomerId: number,
    gottenProdId: number,
    gottenProdName: string,
    gottenImage: string,
    gottenPrice: number,
    countOfProd: number
  ) => {
    try {
      customerCart.push({
        customerId: gottenCustomerId,
        productId: gottenProdId,
        prodName: gottenProdName,
        image: gottenImage,
        price: gottenPrice,
        countOfProd: countOfProd,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const removeFromCart = (gottenProdId: number) => {
    Alert.alert("Cart", "Are you sure you remove item", [
      {
        text: "Yes",
        onPress: () => {
          if (customerCart && customerCart.length > 0) {
            const remainingProduct = customerCart.filter(
              (cartItems: any) => gottenProdId !== cartItems.productId
            );
            console.log(remainingProduct);
            setCustomerCart(remainingProduct);
          }
        },
      },
      {
        text: "No",
        onPress: () => {
          console.log("No pressed");
        },
      },
    ]);
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
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
