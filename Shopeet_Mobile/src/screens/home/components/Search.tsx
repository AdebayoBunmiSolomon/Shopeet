import React, { useState, useEffect, useRef } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { Images } from "../../../resources/Images";
import { Image } from "expo-image";
import { searchStyle } from "./Style";
import FeatherIcon from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import { productList } from "../../../resources/utils/Product";
import Loader from "../../../components/Loader";
import Products from "../../../components/cards/Products";
import SheetModal from "../../../components/SheetModal";

const Search: React.FunctionComponent<{}> = () => {
  const [productData, setProductData] = useState<any>(null);
  const [dataCount, setDataCount] = useState<number | string>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const loadProductData = () => {
    setIsLoading(true);
    //make get request
    const products = productList;
    try {
      //load data after get request is made.
      setIsLoading(true);
      if (products !== null) {
        setDataCount(products.length);
        setProductData(products);
        setIsLoading(false);
      } else {
        //set data back to null if data not loaded correctly...
        setDataCount("...");
        setProductData(null);
        setIsLoading(true);
      }
    } catch (err) {
      setDataCount("...");
      setProductData(null);
      setIsLoading(true);
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
              style={searchStyle.searchFilterBtn}
              onPress={() => {
                toggleModal();
              }}>
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
          Products {`(${!isLoading ? dataCount : "..."})`}
        </Text>
        <TouchableOpacity>
          <Text style={searchStyle.showAllText}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={searchStyle.productListView}>
        {!isLoading ? <Products data={productData} /> : <Loader />}
      </View>
      {/* collection list modal */}
      <SheetModal modalVisible={isModalVisible} />
    </View>
  );
};

export default Search;
