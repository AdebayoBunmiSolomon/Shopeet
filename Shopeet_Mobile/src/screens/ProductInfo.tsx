import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";
import { productInfoStyle } from "./Style";
import { productList } from "../resources/utils/Product";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import GoBack from "../components/GoBack";
import Loader from "../components/Loader";
import { productImageList } from "../resources/utils/ProductImage";
import Indicators from "../components/Indicators";
import AntDesign from "react-native-vector-icons/AntDesign";

const ProductInfo: React.FunctionComponent<{}> = (props: any) => {
  const { productId } = props.route.params;
  const navigation: any = useNavigation();
  const [productInfo, setProductInfo] = useState<any>();
  const [prodImgList, setProdImgList] = useState<any>();
  const [likeActive, setLikeActive] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [initialIndex, setInitialIndex] = useState<number>(0);

  const changeLikeActivity = () => {
    setLikeActive(!likeActive);
  };

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
      <View style={productInfoStyle.container}>
        <View style={productInfoStyle.navigationView}>
          <GoBack
            onClick={() => {
              navigation.goBack();
            }}
            buttonStyle={undefined}
            iconColor={"#221518"}
          />
          <Text style={productInfoStyle.topText}>Product information</Text>
        </View>
        {/* product information */}
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
                      ${productInfo[0].price}
                    </Text>
                  </View>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: Platform.OS === "ios" ? 25 : 20,
                      width: "97%",
                      paddingTop: 10,
                      fontFamily: "RobotoCondensed-Bold",
                      color: "#221518",
                    }}>
                    Description
                  </Text>
                  <Text
                    style={{
                      fontFamily: "RobotoCondensed-Regular",
                      fontSize: Platform.OS === "ios" ? 18 : 15,
                      width: "97%",
                      paddingTop: 10,
                      color: "#3a3c3fc3",
                      textAlign: "justify",
                      paddingBottom: 10,
                    }}>
                    {productInfo[0].description}
                  </Text>
                </View>
              </View>
            </>
          )}
        </ScrollView>
      </View>
      <View
        style={{
          position: "absolute",
          backgroundColor: "red",
          flexDirection: "column",
          alignSelf: "flex-end",
          justifyContent: "flex-end",
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            width: 50,
            paddingTop: 10,
            paddingBottom: 10,
            borderRadius: 50,
            paddingHorizontal: 12,
          }}>
          <AntDesign name='message1' size={25} color={"#E77602"} />
        </TouchableOpacity>
      </View>
      <View style={{ paddingBottom: 10 }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#E77602",
            width: "97%",
            alignSelf: "center",
            height: Platform.OS === "android" ? 50 : 60,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
            borderWidth: 0.5,
            borderColor: "white",
          }}>
          <Text
            style={{
              color: "white",
              fontFamily: "RobotoCondensed-Bold",
              fontSize: Platform.OS === "ios" ? 18 : 15,
            }}>
            Add to cart
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ProductInfo;
