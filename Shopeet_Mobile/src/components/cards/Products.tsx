import React from "react";
import { View, Text, FlatList, TouchableOpacity, Platform } from "react-native";
import { cardProps } from "../../interface/AppInterface";
import { Image } from "expo-image";
import { productListStyle } from "./Style";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { AirbnbRating } from "react-native-ratings";
import { useNavigation } from "@react-navigation/native";
import { truncateText } from "../../resources/utils/functions";

const Products: React.FunctionComponent<cardProps> = ({ data }) => {
  const productList = data;
  const navigation: any = useNavigation();

  const buyProduct = (productId: number) => {
    navigation.navigate("ProductInfo", { productId });
  };

  return (
    <View
      style={{
        width: "97%",
        paddingTop: 10,
      }}>
      <FlatList
        data={productList}
        key={"#"}
        horizontal={false}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item: any) => "#" + item.id}
        renderItem={({ item }: any) => (
          <TouchableOpacity
            style={productListStyle.productListView}
            onPress={() => {
              buyProduct(Number(item.id));
            }}>
            <Image
              source={{ uri: item.image }}
              style={productListStyle.productListImage}
            />
            <Text style={productListStyle.productListName}>
              {truncateText(item.name)}
            </Text>
            <View style={productListStyle.productPriceRatingView}>
              <Text style={productListStyle.productPriceRatingText}>
                $ {item.price}
              </Text>
              <Text style={productListStyle.productPriceRatingText}>
                Product Ratings
              </Text>
            </View>
            <AirbnbRating
              count={5}
              defaultRating={Number(item.rating)}
              size={Platform.OS === "ios" ? 15 : 13}
              showRating={false}
              isDisabled={true}
            />
            <View style={productListStyle.productListBtnView}>
              <TouchableOpacity
                style={productListStyle.productListBtn}
                onPress={() => {
                  buyProduct(Number(item.id));
                }}>
                <Text style={productListStyle.productListBtnText}>Buy</Text>
                <FontAwesome name='shopping-cart' color={"white"} size={18} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Products;
