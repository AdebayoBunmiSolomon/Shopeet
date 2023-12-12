import React, { useEffect, useState } from "react";
import {
  Platform,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { productReviewStyle } from "./Style";
import OctIcons from "react-native-vector-icons/Octicons";
import { useNavigation } from "@react-navigation/native";
import { productReviewList } from "../../resources/utils/ProductReview";

const ProductReview: React.FunctionComponent<{}> = (props: any) => {
  const { productId } = props.route.params;
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [prodReview, setProdReview] = useState<any>();

  const loadProductReview = () => {
    setIsLoading(true);
    //make get request
    const productReview = productReviewList.filter(
      (reviews: any) => reviews.productId === productId
    );
    try {
      setIsLoading(true);
      if (productReview !== null) {
        setProdReview(productReview);
        setIsLoading(false);
      } else {
        setProdReview(null);
        setIsLoading(true);
      }
    } catch (err) {
      console.log(err);
      setProdReview(null);
      setIsLoading(true);
    }
  };

  useEffect(() => {
    loadProductReview();
  }, [productId]);

  const navigation: any = useNavigation();
  return (
    <>
      <View style={productReviewStyle.container}>
        <View style={productReviewStyle.sheetModal}>
          <View style={productReviewStyle.sheetModalTopContentView}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <OctIcons name='chevron-down' size={30} color={"white"} />
            </TouchableOpacity>
            <Text style={productReviewStyle.sheetModalTopContentText}>
              Product Reviews
            </Text>
          </View>
          {isLoading === true ? (
            <View
              style={{
                width: "97%",
                height: "82%",
                alignSelf: "center",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <Text
                style={{
                  fontFamily: "RobotoCondensed-Bold",
                  fontSize: Platform.OS === "ios" ? 20 : 17,
                  color: "white",
                }}>
                loading...
              </Text>
            </View>
          ) : (
            <View style={{ height: "82%" }}>
              <ScrollView
                contentContainerStyle={{
                  width: "97%",
                  alignSelf: "center",
                  paddingLeft: 5,
                  flexDirection: "column",
                  gap: 20,
                  overflow: "scroll",
                  flexGrow: 1,
                }}
                showsVerticalScrollIndicator={false}>
                {prodReview &&
                  prodReview.map((review: any, index: number) => (
                    <View key={index}>
                      <Text
                        style={{
                          textAlign: "justify",
                          color: "white",
                          opacity: 0.8,
                        }}>
                        {review.customerName}:
                      </Text>
                      <Text
                        style={{
                          textAlign: "justify",
                          color: "#3a3c3fc3",
                          opacity: 0.9,
                          paddingTop: 5,
                        }}>
                        {review.review}
                      </Text>
                      <View
                        style={{
                          borderBottomWidth: 0.5,
                          paddingTop: 5,
                          borderColor: "white",
                        }}></View>
                    </View>
                  ))}
              </ScrollView>
            </View>
          )}
        </View>
      </View>
    </>
  );
};

export default ProductReview;
