import React from "react";
import { cardProps } from "../../interface/AppInterface";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
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
                source={item.img}
                style={collectionStyleSheet.collectionListItemImage}
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
