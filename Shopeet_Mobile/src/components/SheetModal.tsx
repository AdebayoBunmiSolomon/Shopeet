import React, { useState, useContext, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, Platform } from "react-native";
import { sheetModalStyles } from "./Style";
import AntIcon from "react-native-vector-icons/AntDesign";
import { ShopContext } from "../context/Auth/shopContext";
import { StackActions, useNavigation } from "@react-navigation/native";
import { collectionList } from "../resources/utils/Collection";

const SheetModal: React.FunctionComponent<{}> = ({}) => {
  const [selectedIndex, setSelectedIndex] = useState<number>();
  const [selectedItem, setSelectedItem] = useState<string>();
  const [collectionData, setCollectionData] = useState<any>();
  const { selectedCollection, getSelectedCollection } = useContext(ShopContext);
  const navigation: any = useNavigation();

  const getSelectedItem = (itemName: string, index: number) => {
    setSelectedIndex(index);
    setSelectedItem(itemName);
    getSelectedCollection(itemName);
    // console.log(`Selected Index: ${selectedItem}-${selectedIndex}`);
  };

  const loadCollectionData = () => {
    //make get request
    const collection = collectionList;
    try {
      //load data after get request is made.
      if (collection !== null) {
        setCollectionData(collection);
      } else {
        //set data back to null if data not loaded correctly...
        setCollectionData(null);
      }
    } catch (err) {
      setCollectionData(null);
    }
  };

  useEffect(() => {
    loadCollectionData();
  }, []);

  return (
    <>
      <View style={sheetModalStyles.container}>
        <View style={sheetModalStyles.contentContainer}>
          <View style={sheetModalStyles.selectionView}>
            <Text style={sheetModalStyles.contentTopText}>
              Select Collection List
            </Text>
            <View style={sheetModalStyles.collectionListView}>
              <FlatList
                data={collectionData}
                keyExtractor={(item: any) => item.id}
                horizontal={false}
                renderItem={({ item, index }: any) => (
                  <TouchableOpacity
                    style={sheetModalStyles.flatListBtn}
                    onPress={() => {
                      getSelectedItem(item.name, index);
                    }}>
                    <Text
                      style={[
                        sheetModalStyles.flatListText,
                        {
                          color:
                            index === selectedIndex ? "#E77602" : "#3a3c3fc3",
                        },
                      ]}>
                      {item.name}
                    </Text>
                    <AntIcon
                      name={
                        index === selectedIndex ? "checkcircle" : "checkcircleo"
                      }
                      size={Platform.OS === "ios" ? 30 : 25}
                      color={index === selectedIndex ? "#E77602" : "#3a3c3fc3"}
                      style={sheetModalStyles.flatListIcon}
                    />
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
          <View style={sheetModalStyles.closeBtnView}>
            <TouchableOpacity
              style={sheetModalStyles.closeBtn}
              onPress={() => {
                navigation.dispatch(
                  StackActions.replace("HomeContext", {
                    screen: "Home",
                  })
                );
              }}>
              <Text style={sheetModalStyles.btnText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default SheetModal;
