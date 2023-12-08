import React, { useState } from "react";
import { sheetModalProps } from "../interface/AppInterface";
import { View, Text, FlatList, TouchableOpacity, Platform } from "react-native";
import { sheetModalStyles } from "./Style";
import AntIcon from "react-native-vector-icons/AntDesign";

const SheetModal: React.FunctionComponent<sheetModalProps> = ({
  closeBtn,
  data,
  setItem,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number>();
  const [selectedItem, setSelectedItem] = useState<string>();
  const collectionData = data;

  const getSelectedItem = (itemName: string, index: number) => {
    setSelectedIndex(index);
    setSelectedItem(itemName);
    setItem(itemName);
    // console.log(`Selected Index: ${selectedItem}-${selectedIndex}`);
  };

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
              onPress={() => closeBtn()}>
              <Text style={sheetModalStyles.btnText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default SheetModal;
