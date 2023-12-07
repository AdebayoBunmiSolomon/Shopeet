import React from "react";
import { View, Text, FlatList, TouchableOpacity, Platform } from "react-native";
import { cardProps } from "../../interface/AppInterface";
import { Image } from "expo-image";
import { productListStyle } from "./Style";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { AirbnbRating } from "react-native-ratings";

const Products: React.FunctionComponent<cardProps> = ({ data }) => {
  const productList = data;

  const truncateText = (str: string) => {
    return str.length > 15 ? str.substring(0, 15) + "...." : str;
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
          <View style={productListStyle.productListView}>
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
              <TouchableOpacity style={productListStyle.productListBtn}>
                <Text style={productListStyle.productListBtnText}>Buy</Text>
                <FontAwesome name='shopping-cart' color={"white"} size={18} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Products;
