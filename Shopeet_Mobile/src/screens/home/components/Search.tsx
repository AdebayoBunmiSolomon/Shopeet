import React, { useState, useEffect, useContext } from "react";
import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import { Images } from "../../../resources/Images";
import { Image } from "expo-image";
import { searchStyle } from "./Style";
import FeatherIcon from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import Loader from "../../../components/Loader";
import Products from "../../../components/cards/Products";
import { useNavigation } from "@react-navigation/native";
import { ShopContext } from "../../../context/Auth/shopContext";
import { GetRequest, url } from "../../../context/Auth/hooks/useRequest";

const Search: React.FunctionComponent<{}> = () => {
  const [productData, setProductData] = useState<any>(null);
  const [dataCount, setDataCount] = useState<number | string>();
  const [isProductLoading, setIsProductLoading] = useState<boolean>(true);
  const navigation: any = useNavigation();
  const { selectedCollection, token } = useContext(ShopContext);
  const [searchValue, setSearchValue] = useState<string>();
  const [searchedProducts, setSearchedProducts] = useState<any>();

  const openCollectionModal = () => {
    navigation.navigate("Collection");
  };

  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const loadProductData = async () => {
    setSearchValue("");
    setIsProductLoading(true);
    //make get request
    const { status, data } = await GetRequest(`${url}products`, axiosConfig);
    try {
      //load data after get request is made.
      setIsProductLoading(true);
      if (status === 200) {
        setSearchedProducts(null);
        setProductData(data);
        setDataCount(data.length);
        setIsProductLoading(false);
      } else {
        //set data back to null if data not loaded correctly...
        setDataCount("...");
        setSearchedProducts(null);
        setProductData(null);
        setIsProductLoading(true);
      }
    } catch (err) {
      setDataCount("...");
      setSearchedProducts(null);
      setProductData(null);
      setIsProductLoading(true);
    }
  };

  const showAll = async () => {
    await loadProductData();
  };

  const findProducts = async () => {
    setIsProductLoading(true);
    try {
      setIsProductLoading(true);
      const { status, data } = await GetRequest(
        `${url}products?name_like=${searchValue}`,
        axiosConfig
      );
      if (status === 200 && data && data.length > 0) {
        setProductData(null);
        setSearchedProducts(data);
        setDataCount(data.length);
        setIsProductLoading(false);
      } else {
        setProductData(null);
        setSearchedProducts(null);
        setDataCount("...");
        console.log("No product like", searchValue);
        setIsProductLoading(true);
      }
    } catch (err) {
      setSearchedProducts(null);
      setDataCount("...");
      console.log("Error fetching product data", err);
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
              placeholder='search by product name here...'
              style={searchStyle.searchTextInput}
              onChangeText={(searchText: string) => {
                if (!searchText.trim()) {
                  loadProductData();
                } else {
                  setSearchValue(searchText);
                  //don't do anything
                }
              }}
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
                isProductLoading === false ? openCollectionModal() : undefined;
              }}
              disabled={isProductLoading === false ? false : true}>
              <FontAwesome name='filter' size={25} color={"#FFFFFF"} />
            </TouchableOpacity>
          </View>
        </View>
        {/*find button */}
        <View>
          <TouchableOpacity
            style={searchStyle.searchFindBtn}
            onPress={() => findProducts()}>
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
        <TouchableOpacity
          onPress={() => {
            showAll();
          }}>
          <Text style={searchStyle.showAllText}>Show all</Text>
        </TouchableOpacity>
      </View>
      {/* Product card */}
      <View style={searchStyle.productListView}>
        {!isProductLoading ? (
          <Products
            data={
              productData && productData.length > 0
                ? productData
                : searchedProducts
            }
          />
        ) : (
          <Loader />
        )}
      </View>
    </View>
  );
};

export default Search;
