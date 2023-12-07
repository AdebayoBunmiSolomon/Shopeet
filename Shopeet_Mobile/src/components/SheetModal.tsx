import React, { useEffect, useState } from "react";
import { sheetModalProps } from "../interface/AppInterface";
import { collectionList } from "../resources/utils/Collection";
import {
  View,
  Text,
  Modal,
  Platform,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { sheetModalStyles } from "./Style";

const SheetModal: React.FunctionComponent<sheetModalProps> = ({
  modalVisible,
}) => {
  const [collectionData, setCollectionData] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const loadCollectionList = () => {
    setIsLoading(true);

    const collection = collectionList;
    try {
      setIsLoading(true);
      if (collection !== null) {
        setCollectionData(collection);
        setIsLoading(true);
      } else {
        setIsLoading(true);
        setCollectionData(null);
      }
    } catch (err) {
      console.log(err);
      setIsLoading(true);
      setCollectionData(null);
    }
  };

  useEffect(() => {
    loadCollectionList();
  }, []);

  return (
    <>
      <Modal
        animationType='slide'
        visible={modalVisible}
        transparent={true}
        presentationStyle='overFullScreen'>
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
                  renderItem={({ item }: any) => (
                    <>
                      <Text>{item.name}</Text>
                      <Text>{item.name}</Text>
                    </>
                  )}
                />
              </View>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "flex-end",
              }}>
              <TouchableOpacity
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#F01530",
                  height: Platform.OS === "ios" ? 45 : 40,
                  marginBottom: -1,
                }}>
                <Text>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default SheetModal;
