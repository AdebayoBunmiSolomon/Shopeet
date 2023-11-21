import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Alert,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import Carousel from "../../../components/Carousel";
import LocationIcon from "react-native-vector-icons/Entypo";
import * as Location from "expo-location";
import { homePageStyle } from "./Style";
import { collectionList } from "../../../resources/Data";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Image } from "expo-image";
import Loader from "../../../components/Loader";

const HomePage: React.FunctionComponent<{}> = () => {
  const [locationServiceEnabled, setLocationServiceEnabled] = useState<any>();
  const [displayCurrentAddress, setDisplayCurrentAddress] = useState<any>(
    "Waiting to fetch current address..."
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [collectionData, setCollectionData] = useState<any>(null);

  const loadCollectionList = () => {
    setIsLoading(true);
    //make get request to api
    const collection = collectionList;
    try {
      //load data after get request is made.
      setIsLoading(true);
      if (collection !== null) {
        setCollectionData(collection);
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

  const CheckIfLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();

    if (!enabled) {
      Alert.alert(
        "Location Service not enabled",
        "Please enable your location services to continue",
        [{ text: "OK" }],
        { cancelable: false }
      );
    } else {
      setLocationServiceEnabled(enabled);
      GetCurrentLocation();
    }
  };

  const GetCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permission not granted",
        "Allow the app to use location service.",
        [{ text: "OK" }],
        { cancelable: false }
      );
    }

    let { coords } = await Location.getCurrentPositionAsync();

    if (coords) {
      const { latitude, longitude } = coords;
      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      for (let item of response) {
        let address = `${item.street}, ${item.city}, ${item.country}`;

        setDisplayCurrentAddress(address);
      }
    }
  };

  useEffect(() => {
    CheckIfLocationEnabled();
    loadCollectionList();
  }, []);

  return (
    <View>
      <View style={homePageStyle.topContainer}>
        <LocationIcon name='location' size={25} />
        <Text style={homePageStyle.locationText}>{displayCurrentAddress}</Text>
      </View>
      <Carousel />
      {/* Collection's view */}
      <View style={homePageStyle.collectionView}>
        <Text style={homePageStyle.collectionTopText}>
          Our Collection{" "}
          <MaterialIcons name='category' size={25} color={"#E77602"} />
        </Text>
        <Text style={homePageStyle.collectionBottomText}>
          Everything you need at just one place.
        </Text>
      </View>
      {/* Collection list */}
      <View style={homePageStyle.collectionListView}>
        {isLoading === true ? (
          <Loader />
        ) : (
          <FlatList
            data={collectionList}
            keyExtractor={(item: any) => item.id}
            renderItem={({ item }: any) => (
              <TouchableOpacity
                style={[
                  homePageStyle.collectionListItemBtn,
                  {
                    backgroundColor: item.color,
                  },
                ]}>
                <View style={homePageStyle.collectionListItemView}>
                  <Text style={homePageStyle.collectionListItemText}>
                    {item.name}
                  </Text>
                  <Image
                    source={item.img}
                    style={homePageStyle.collectionListItemImage}
                  />
                </View>
              </TouchableOpacity>
            )}
            horizontal={false}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </View>
  );
};

export default HomePage;
