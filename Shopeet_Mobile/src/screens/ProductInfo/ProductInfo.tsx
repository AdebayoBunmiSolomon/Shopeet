import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";
import { productInfoStyle } from "./Style";
import { productList } from "../../resources/utils/Product";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import GoBack from "../../components/GoBack";
import Loader from "../../components/Loader";
import { productImageList } from "../../resources/utils/ProductImage";
import Indicators from "../../components/Indicators";
import AntDesign from "react-native-vector-icons/AntDesign";
import PostReview from "./PostReview";
import CartIcon from "../../components/CartIcon";
import { ShopContext } from "../../context/Auth/shopContext";
import Toast from "react-native-toast-message";

const ProductInfo: React.FunctionComponent<{}> = (props: any) => {
  const { productId } = props.route.params;
  const navigation: any = useNavigation();
  const [productInfo, setProductInfo] = useState<any>();
  const [prodImgList, setProdImgList] = useState<any>();
  const [likeActive, setLikeActive] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [initialIndex, setInitialIndex] = useState<number>(0);
  const [openReview, setOpenReview] = useState<boolean>(false);
  const [countOfSpecificProdInCart, setCountOfSpecificProdInCart] =
    useState<number>(1);
  const { addToCart, customerCart, addToCartLoading } = useContext(ShopContext);
  let [newProdPrice, setNewProdPrice] = useState<any>();
  const changeLikeActivity = () => {
    setLikeActive(!likeActive);
  };

  const showReview = () => {
    setOpenReview(!openReview);
  };

  const formatProductPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const productReview = () => {
    navigation.navigate("ProductReview", { productId });
  };

  const cartModal = () => {
    navigation.navigate("CartModal");
  };

  //get count of specific product in cart
  const loadCountOfSpecificProductInCart = (
    gottenProdId: number,
    gottenCustomerId: number
  ) => {
    if (customerCart && customerCart.length > 0) {
      const countOfSpecificProductInCart: any = customerCart.filter(
        (specificProduct: any) =>
          specificProduct.productId === gottenProdId &&
          specificProduct.customerId === gottenCustomerId
      );
      try {
        if (countOfSpecificProductInCart !== null) {
          console.log(countOfSpecificProductInCart[0].countOfProd);
          setCountOfSpecificProdInCart(
            countOfSpecificProductInCart[0].countOfProd
          );
        } else {
          console.log("this product does not exist in cart");
          setCountOfSpecificProdInCart(1);
        }
      } catch (err) {
        console.log(err);
        setCountOfSpecificProdInCart(1);
      }
    }
  };

  //load product information
  const loadProductInfo = () => {
    setIsLoading(true);
    //make get request
    const productInfo = productList.filter(
      (product: any) => product.id === productId
    );
    try {
      //load data after get request is made.
      setIsLoading(true);
      if (productInfo !== null) {
        setProductInfo(productInfo);
        loadProductImage(productId);
        loadCountOfSpecificProductInCart(productId, 1);
        setIsLoading(false);
      } else {
        //set data back to null if data not loaded correctly...
        setProductInfo(null);
        setIsLoading(true);
      }
    } catch (err) {
      console.log(err);
      setIsLoading(true);
    }
  };

  const nextButton = () => {
    const productImageLength = prodImgList.length - 1;
    if (initialIndex !== Number(productImageLength)) {
      setInitialIndex(initialIndex + 1);
    }
  };

  const prevButton = () => {
    const productImageLength = prodImgList.length - 1;
    if (initialIndex === Number(productImageLength)) {
      setInitialIndex(initialIndex - 1);
    } else {
      setInitialIndex(initialIndex - 1);
    }
  };

  //get list of images of product
  const loadProductImage = (gottenProductId: number) => {
    //make get request
    const productImage = productImageList.filter(
      (prodImgList: any) => prodImgList.productId === gottenProductId
    );
    //proceed to get product image list
    try {
      if (productImage !== null) {
        setProdImgList(productImage);
      } else {
        setProdImgList(null);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadProductInfo();
  }, [productId]);
  return (
    <>
      <View style={{ zIndex: 1 }}>
        <Toast />
      </View>
      <View style={productInfoStyle.container}>
        <View style={productInfoStyle.navigationView}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <GoBack
              onClick={() => {
                navigation.goBack();
              }}
              buttonStyle={undefined}
              iconColor={"#221518"}
            />
            <Text style={productInfoStyle.topText}>Product information</Text>
          </View>
          <View>
            <CartIcon
              onNavigate={() => {
                cartModal();
              }}
              customerId={1}
            />
          </View>
        </View>
        {/* product information */}
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}>
          {isLoading === true ? (
            <View style={productInfoStyle.loaderView}>
              <Loader />
            </View>
          ) : (
            <>
              <View>
                <View style={productInfoStyle.productInfoView}>
                  <View style={productInfoStyle.likeBtnView}>
                    <TouchableOpacity
                      style={productInfoStyle.likeBtn}
                      onPress={() => {
                        changeLikeActivity();
                      }}>
                      <FontAwesome
                        name={likeActive === false ? "heart-o" : "heart"}
                        size={25}
                        color={likeActive === false ? "#3a3c3fc3" : "#E77602"}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={productInfoStyle.imageView}>
                    <View style={productInfoStyle.imageBtnView}>
                      <TouchableOpacity
                        style={[
                          productInfoStyle.imgSideBtn,
                          { opacity: initialIndex > 0 ? undefined : 0.6 },
                        ]}
                        onPress={() => {
                          prevButton();
                        }}
                        disabled={initialIndex > 0 ? false : true}>
                        <Entypo
                          name='chevron-left'
                          size={30}
                          color={"#E77602"}
                        />
                      </TouchableOpacity>
                    </View>
                    <Image
                      source={{ uri: prodImgList[initialIndex].image }}
                      style={{ width: "100%", height: 300 }}
                      transition={1000}
                      contentFit='contain'
                    />
                    <View style={productInfoStyle.imageBtnView}>
                      <TouchableOpacity
                        style={productInfoStyle.imgSideBtn}
                        onPress={() => {
                          nextButton();
                        }}>
                        <Entypo
                          name='chevron-right'
                          size={30}
                          color={"#E77602"}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={productInfoStyle.indicatorView}>
                    {prodImgList && (
                      <Indicators imgData={prodImgList} index={initialIndex} />
                    )}
                  </View>
                </View>
              </View>
              {/* add to product count */}
              <View style={productInfoStyle.plusBtnView}>
                <View
                  style={{
                    backgroundColor: "#E77602",
                    width: 100,
                    height: 40,
                    borderRadius: 10,
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      if (countOfSpecificProdInCart > 1) {
                        setCountOfSpecificProdInCart(
                          countOfSpecificProdInCart - 1
                        );
                        // getNewProdPrice(productInfo[0].price);
                      } else {
                        //nothing should happen
                      }
                    }}>
                    <FontAwesome
                      name='minus'
                      size={Platform.OS === "ios" ? 18 : 16}
                      color={"#FFFFFF"}
                    />
                  </TouchableOpacity>
                  <Text style={productInfoStyle.countText}>
                    {countOfSpecificProdInCart}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      setCountOfSpecificProdInCart(
                        countOfSpecificProdInCart + 1
                      );
                    }}>
                    <FontAwesome
                      name='plus'
                      size={Platform.OS === "ios" ? 18 : 16}
                      color={"#FFFFFF"}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              {/* other product details */}
              <View style={{ flexDirection: "column", gap: 10 }}>
                {/* name & desc */}
                <Text style={productInfoStyle.productName}>
                  {productInfo[0].name}
                </Text>
                <Text style={productInfoStyle.productAbout}>
                  {productInfo[0].about}
                </Text>
                <View style={productInfoStyle.productRatingView}>
                  <View style={{ flexDirection: "row" }}>
                    <FontAwesome
                      name='star'
                      size={Platform.OS === "ios" ? 25 : 27}
                      color={"#E77602"}
                    />
                    <Text
                      style={{
                        fontSize: Platform.OS === "ios" ? 25 : 20,
                        fontFamily: "RobotoCondensed-Bold",
                        paddingLeft: 5,
                        color: "#221518",
                      }}>
                      {productInfo[0].rating}{" "}
                      <Text style={productInfoStyle.productRating}>
                        (Avg.Rating)
                      </Text>
                    </Text>
                  </View>
                  <View>
                    <Text style={productInfoStyle.productPrice}>
                      $
                      {!newProdPrice
                        ? formatProductPrice(productInfo[0].price)
                        : formatProductPrice(newProdPrice)}
                    </Text>
                  </View>
                </View>
                {/* description */}
                <View>
                  <Text style={productInfoStyle.productDescription}>
                    Description
                  </Text>
                  <Text style={productInfoStyle.productDescriptionText}>
                    {productInfo[0].description}
                  </Text>
                </View>
              </View>
            </>
          )}
        </ScrollView>
      </View>
      {/* product review button */}
      {openReview === true ? <PostReview /> : null}
      <View style={productInfoStyle.reviewBtnView}>
        <TouchableOpacity
          style={productInfoStyle.reviewBtn}
          onPress={() => {
            showReview();
          }}>
          <AntDesign name='message1' size={25} color={"#E77602"} />
        </TouchableOpacity>
      </View>
      <View style={productInfoStyle.bottomBtnView}>
        {/* check reviews */}
        <TouchableOpacity
          style={productInfoStyle.checkReviewsBtn}
          onPress={() => {
            productReview();
          }}>
          <Text style={productInfoStyle.bottomBtnText}>Check review</Text>
        </TouchableOpacity>
        {/* add to cart */}
        <TouchableOpacity
          style={productInfoStyle.addToCartBtn}
          onPress={() => {
            addToCart(
              productId,
              1,
              prodImgList[0].image,
              !newProdPrice ? productInfo[0].price : newProdPrice,
              countOfSpecificProdInCart
            );
          }}>
          {addToCartLoading === true ? (
            <Text style={productInfoStyle.bottomBtnText}>Loading</Text>
          ) : (
            <Text style={productInfoStyle.bottomBtnText}>Add to cart</Text>
          )}
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ProductInfo;
