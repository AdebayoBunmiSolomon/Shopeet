import React, { useEffect, useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  TouchableWithoutFeedback,
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
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <View style={{ height: "55%", width: "100%" }}></View>
        </TouchableWithoutFeedback>
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
            <View style={productReviewStyle.loadingView}>
              <Text style={productReviewStyle.loadingText}>loading...</Text>
            </View>
          ) : (
            <View style={{ height: "82%" }}>
              <ScrollView
                contentContainerStyle={productReviewStyle.reviewContainer}
                showsVerticalScrollIndicator={false}>
                {prodReview && prodReview.length > 0 ? (
                  prodReview.map((review: any, index: number) => (
                    <View key={index}>
                      <Text style={productReviewStyle.reviewCustomerName}>
                        {review.customerName}:
                      </Text>
                      <Text style={productReviewStyle.reviewReview}>
                        {review.review}
                      </Text>
                      <View style={productReviewStyle.reviewDivider}></View>
                    </View>
                  ))
                ) : (
                  <View style={productReviewStyle.noReviewContainer}>
                    <Text style={productReviewStyle.noReviewText}>
                      This product has no review(s)
                    </Text>
                  </View>
                )}
              </ScrollView>
            </View>
          )}
        </View>
      </View>
    </>
  );
};

export default ProductReview;
