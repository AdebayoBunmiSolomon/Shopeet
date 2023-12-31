import React, { useCallback, useContext, useEffect, useState } from "react";
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
import { useNavigation, useIsFocused } from "@react-navigation/native";
import GoBack from "../../components/GoBack";
import Loader from "../../components/Loader";
import { productImageList } from "../../resources/utils/ProductImage";
import Indicators from "../../components/Indicators";
import AntDesign from "react-native-vector-icons/AntDesign";
import PostReview from "./PostReview";
import CartIcon from "../../components/CartIcon";
import { ShopContext } from "../../context/Auth/shopContext";
import Toast from "react-native-toast-message";
import {
  GetRequest,
  axiosConfig,
  url,
} from "../../context/Auth/hooks/useRequest";
import { formatProductPrice } from "../../resources/utils/functions";

const ProductInfo: React.FunctionComponent<{}> = (props: any) => {
  const { productId } = props.route.params;
  const navigation: any = useNavigation();
  const isFocused = useIsFocused();
  const [productInfo, setProductInfo] = useState<any>();
  const [prodImgList, setProdImgList] = useState<any>();
  const [likeActive, setLikeActive] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [initialIndex, setInitialIndex] = useState<number>(0);
  const [openReview, setOpenReview] = useState<boolean>(false);
  const [countOfSpecificProdInCart, setCountOfSpecificProdInCart] =
    useState<number>(1);
  const [productExistInCart, setProductExistInCart] = useState<boolean>(false);
  const { addToCart, customerCart, addToCartLoading } = useContext(ShopContext);
  let [newProdPrice, setNewProdPrice] = useState<any>();
  const changeLikeActivity = () => {
    setLikeActive(!likeActive);
  };

  const showReview = () => {
    setOpenReview(!openReview);
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
        if (countOfSpecificProductInCart && countOfSpecificProdInCart !== 0) {
          setCountOfSpecificProdInCart(
            countOfSpecificProductInCart[0].countOfProd
          );
          setProductExistInCart(true);
        } else {
          setCountOfSpecificProdInCart(1);
          setProductExistInCart(false);
        }
      } catch (err) {
        console.log(err);
        setCountOfSpecificProdInCart(1);
        setProductExistInCart(false);
      }
    }
  };

  //load product information
  const loadProductInfo = async (productIdVal: number) => {
    setIsLoading(true);
    //make get request
    const { status, data } = await GetRequest(
      `${url}products?id=${productIdVal}`,
      axiosConfig
    );
    try {
      //load data after get request is made.
      setIsLoading(true);
      if (status === 200) {
        setProductInfo(data);
        loadProductImage(productIdVal);
        loadCountOfSpecificProductInCart(productIdVal, 1);
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

  //get list of images of product
  const loadProductImage = async (gottenProductId: number) => {
    //make get request
    const { status, data } = await GetRequest(
      `${url}productImage?productId=${gottenProductId}`,
      undefined
    );

    //proceed to get product image list
    try {
      if (status === 200) {
        setProdImgList(data);
      } else {
        setProdImgList(null);
        console.log("Error fetching data");
      }
    } catch (err) {
      console.log(err);
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

  useEffect(() => {
    const load = () => {
      loadProductInfo(productId);
    };
    load();
  }, [isFocused, productId]);

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
                      source={{
                        uri: prodImgList && prodImgList[initialIndex].image,
                      }}
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
              productInfo[0].name,
              1,
              prodImgList[0].image,
              !newProdPrice ? productInfo[0].price : newProdPrice,
              countOfSpecificProdInCart
            );
          }}>
          {addToCartLoading === true ? (
            <Text style={productInfoStyle.bottomBtnText}>Loading</Text>
          ) : (
            <Text style={productInfoStyle.bottomBtnText}>
              {productExistInCart === true ? "Update cart" : "Add to cart"}
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ProductInfo;
