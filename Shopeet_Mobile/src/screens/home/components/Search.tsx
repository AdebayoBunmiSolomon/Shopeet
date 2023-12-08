import React, { useState, useEffect, useRef } from "react";
import { Text, View, TextInput, TouchableOpacity, Modal } from "react-native";
import { Images } from "../../../resources/Images";
import { Image } from "expo-image";
import { searchStyle } from "./Style";
import FeatherIcon from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import { productList } from "../../../resources/utils/Product";
import { collectionList } from "../../../resources/utils/Collection";
import Loader from "../../../components/Loader";
import Products from "../../../components/cards/Products";
import SheetModal from "../../../components/SheetModal";

const Search: React.FunctionComponent<{}> = () => {
  const [productData, setProductData] = useState<any>(null);
  const [collectionData, setCollectionData] = useState<any>();
  const [dataCount, setDataCount] = useState<number | string>();
  const [isProductLoading, setIsProductLoading] = useState<boolean>(true);
  const [isCollectionLoading, setIsCollectionLoading] = useState<boolean>(true);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [selectedCollection, setSelectedCollection] =
    useState<string>("Products");

  const loadCollectionData = () => {
    setIsModalVisible(!isModalVisible);
    setIsCollectionLoading(true);
    //make get request
    const collection = collectionList;
    try {
      //load data after get request is made.
      setIsCollectionLoading(true);
      if (collection !== null) {
        setCollectionData(collection);
        setIsCollectionLoading(false);
      } else {
        //set data back to null if data not loaded correctly...
        setCollectionData(null);
        setIsCollectionLoading(true);
      }
    } catch (err) {
      setCollectionData(null);
      setIsCollectionLoading(true);
    }
  };

  const loadProductData = () => {
    setIsProductLoading(true);
    //make get request
    const products = productList;
    try {
      //load data after get request is made.
      setIsProductLoading(true);
      if (products !== null) {
        setDataCount(products.length);
        setProductData(products);
        setIsProductLoading(false);
      } else {
        //set data back to null if data not loaded correctly...
        setDataCount("...");
        setProductData(null);
        setIsProductLoading(true);
      }
    } catch (err) {
      setDataCount("...");
      setProductData(null);
      setIsProductLoading(true);
    }
  };

  useEffect(() => {
    loadProductData();
  }, []);

  return (
    <View>
      {/* top view */}
      <View style={searchStyle.searchTopTextView}>
        <Text style={searchStyle.searchTopText}>Welcome back, </Text>
        <Image source={Images.welcomeBack} style={searchStyle.searchTopImage} />
      </View>
      {/* search view */}
      <View style={searchStyle.searchView}>
        <View style={searchStyle.searchContentView}>
          {/* text input & search icon */}
          <View style={searchStyle.searchTextInputView}>
            <FeatherIcon
              name='search'
              size={25}
              style={{
                paddingLeft: 4,
              }}
            />
            <TextInput
              placeholder='search products here...'
              style={searchStyle.searchTextInput}
            />
          </View>
          {/* filter button beside text input */}
          <View>
            <TouchableOpacity
              style={[
                searchStyle.searchFilterBtn,
                { opacity: isProductLoading === false ? undefined : 0.6 },
              ]}
              onPress={() => {
                isProductLoading === false ? loadCollectionData() : undefined;
              }}
              disabled={isProductLoading === false ? false : true}>
              <FontAwesome name='filter' size={25} color={"#FFFFFF"} />
            </TouchableOpacity>
          </View>
        </View>
        {/*find button */}
        <View>
          <TouchableOpacity style={searchStyle.searchFindBtn}>
            <Text style={searchStyle.searchFindBtnText}>find products</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* products label */}
      <View style={searchStyle.shopeetTopView}>
        <Text style={searchStyle.shopeetTopText}>
          Shopeet & Services <Entypo name='shop' size={35} color={"#0B1423"} />
        </Text>
        <Text style={searchStyle.shopeetBottomText}>
          This shop offers both products and services.
        </Text>
      </View>
      <View style={searchStyle.productCountView}>
        <Text style={searchStyle.productCountText}>
          {selectedCollection} {`(${!isProductLoading ? dataCount : "..."})`}
        </Text>
        <TouchableOpacity>
          <Text style={searchStyle.showAllText}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={searchStyle.productListView}>
        {!isProductLoading ? <Products data={productData} /> : <Loader />}
      </View>
      {/* collection list modal */}
      <Modal animationType='slide' visible={isModalVisible} transparent={true}>
        {isCollectionLoading === true ? (
          <View
            style={{
              backgroundColor: "#22151850",
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Loader />
          </View>
        ) : (
          <SheetModal
            data={collectionData}
            closeBtn={() => {
              setIsModalVisible(!isModalVisible);
            }}
            setItem={(itemName: string) => {
              if (itemName) {
                // setSelectedCollection(itemName);
                console.log(itemName);
              }
            }}
          />
        )}
      </Modal>
    </View>
  );
};

export default Search;
