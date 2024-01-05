import React, { useState, useEffect, useContext } from "react";
import { View, Text, FlatList, TouchableOpacity, Platform } from "react-native";
import { sheetModalStyles } from "./Style";
import AntIcon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { ShopContext } from "../context/Auth/shopContext";
import { GetRequest, url, axiosConfig } from "../context/Auth/hooks/useRequest";
import Loader from "./Loader";

const SheetModal: React.FunctionComponent<{}> = ({}) => {
  const [selectedIndex, setSelectedIndex] = useState<number>();
  const [collectionData, setCollectionData] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigation: any = useNavigation();
  const { getSelectedCollection } = useContext(ShopContext);

  const getSelectedItem = (itemName: string, itemId: number, index: number) => {
    setSelectedIndex(index);
    getSelectedCollection(itemName, itemId);
  };

  const loadCollectionData = async () => {
    //make get request to api
    const { status, data } = await GetRequest(`${url}category`, axiosConfig);
    try {
      //load data after get request is made.
      setIsLoading(true);
      if (status === 200) {
        setCollectionData(data);
        setIsLoading(false);
      } else {
        //set data back to null if data not loaded correctly...
        setCollectionData(null);
        setIsLoading(true);
      }
    } catch (err) {
      console.log(err);
      setCollectionData(null);
      setIsLoading(true);
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
              {isLoading === true ? (
                <>
                  <Loader />
                </>
              ) : (
                <FlatList
                  data={collectionData}
                  keyExtractor={(item: any) => item.id}
                  horizontal={false}
                  renderItem={({ item, index }: any) => (
                    <TouchableOpacity
                      style={sheetModalStyles.flatListBtn}
                      onPress={() => {
                        getSelectedItem(item.name, item.id, index);
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
                          index === selectedIndex
                            ? "checkcircle"
                            : "checkcircleo"
                        }
                        size={Platform.OS === "ios" ? 30 : 25}
                        color={
                          index === selectedIndex ? "#E77602" : "#3a3c3fc3"
                        }
                        style={sheetModalStyles.flatListIcon}
                      />
                    </TouchableOpacity>
                  )}
                />
              )}
            </View>
          </View>
          <View style={sheetModalStyles.closeBtnView}>
            <TouchableOpacity
              style={sheetModalStyles.closeBtn}
              onPress={() => {
                navigation.goBack();
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
