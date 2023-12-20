import React from "react";
import { cardProps } from "../../interface/AppInterface";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { collectionStyleSheet } from "./Style";

const Collection: React.FunctionComponent<cardProps> = ({ data }) => {
  const collectionList = data;

  return (
    <>
      <FlatList
        data={collectionList}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }: any) => (
          <TouchableOpacity
            style={[
              collectionStyleSheet.collectionListItemBtn,
              {
                backgroundColor: item.color,
              },
            ]}>
            <View style={collectionStyleSheet.collectionListItemView}>
              <Text style={collectionStyleSheet.collectionListItemText}>
                {item.name}
              </Text>
              <Image
                source={
                  item.img
                    ? { uri: item.img }
                    : require("../../../assets/icons/no_image.jpeg")
                }
                style={collectionStyleSheet.collectionListItemImage}
                transition={1000}
                contentFit='fill'
              />
            </View>
          </TouchableOpacity>
        )}
        horizontal={false}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};

export default Collection;
