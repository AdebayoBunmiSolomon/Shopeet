import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { productInfoStyle } from "./Style";
import { productList } from "../resources/utils/Product";
import IonIcons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";

const ProductInfo: React.FunctionComponent<{}> = (props: any) => {
  const { productId } = props.route.params;
  const navigation: any = useNavigation();
  const [productInfo, setProductInfo] = useState<any>();
  const [likeActive, setLikeActive] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

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

  useEffect(() => {
    loadProductInfo();
  }, [productId]);
  return (
    <>
      <View style={productInfoStyle.container}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <IonIcons name='chevron-back' size={30} />
          </TouchableOpacity>
          <Text style={productInfoStyle.topText}>Product information</Text>
        </View>
        {productInfo && (
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
                <Image
                  source={{ uri: productInfo[0].image }}
                  style={{ width: "100%", height: 200 }}
                  transition={1000}
                  contentFit='contain'
                />
              </View>
            </View>
          </>
        )}
      </View>
    </>
  );
};

export default ProductInfo;
