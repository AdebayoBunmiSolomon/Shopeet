import React, { useContext, useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { paymentStyles } from "./Style";
import { useNavigation } from "@react-navigation/native";
import { formatProductPrice } from "../resources/utils/functions";
import { ShopContext } from "../context/Auth/shopContext";
import { ProtectedRouteContext } from "../context/ProtectedRoute";
import { GetRequest, url, axiosConfig } from "../context/Auth/hooks/useRequest";
import Toast from "react-native-toast-message";
import { Paystack, paystackProps } from "react-native-paystack-webview";

const Payment: React.FunctionComponent<{}> = (props: any) => {
  const { totalPriceOfProduct } = props.route.params;
  const { postCartToDb, setCustomerCart } = useContext(ShopContext);
  const { token } = useContext(ProtectedRouteContext);
  const navigation: any = useNavigation();
  const [custInfo, setCustInfo] = useState<any>();
  const paystackWebViewRef = useRef<paystackProps.PayStackRef | any>();

  const getCustomerInfo = async () => {
    const { status, data } = await GetRequest(
      `${url}customers?id=${token}`,
      axiosConfig
    );
    try {
      if (status === 200 && data && data.length > 0) {
        setCustInfo(data);
      } else {
        setCustInfo(null);
        console.log("Customer does not exist");
      }
    } catch (err) {
      console.log("Error fetching customer data", err);
    }
  };

  useEffect(() => {
    getCustomerInfo();
  }, []);

  return (
    <>
      <View style={paymentStyles.container}>
        <Toast />
        <View style={paymentStyles.formView}>
          <View style={{ flex: 1 }}>
            <Paystack
              paystackKey='pk_test_d536259a2abfa993a7df0dac078667c39e61c0df'
              billingEmail={custInfo && custInfo[0].email}
              billingName={custInfo && custInfo[0].fullname}
              phone='08152282617'
              amount={totalPriceOfProduct}
              currency='NGN'
              activityIndicatorColor='#E77602'
              onCancel={(e) => {
                console.log(e);
              }}
              onSuccess={(res) => {
                console.log(res);
                postCartToDb(
                  custInfo && custInfo[0].id,
                  custInfo && custInfo[0].email,
                  custInfo && custInfo[0].phone
                );
              }}
              ref={paystackWebViewRef}
            />
          </View>
          <Text style={paymentStyles.formTopText}>Set Destination</Text>
          <View style={paymentStyles.formContentView}>
            <View style={paymentStyles.amtView}>
              <Text style={paymentStyles.amtText}>
                ${" "}
                {formatProductPrice(
                  !totalPriceOfProduct ? "0" : totalPriceOfProduct
                )}
              </Text>
            </View>
            <TextInput
              placeholder='enter pickup location'
              multiline={true}
              style={paymentStyles.locationInput}
            />
            <View style={paymentStyles.btnView}>
              {Number(totalPriceOfProduct) > 0 ? (
                <TouchableOpacity
                  style={paymentStyles.continueBtn}
                  onPress={() => {
                    paystackWebViewRef.current.startTransaction();
                  }}>
                  <Text style={paymentStyles.btnText}>paystack</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={[paymentStyles.continueBtn, { backgroundColor: "" }]}
                  onPress={() => postCartToDb()}>
                  <Text style={[paymentStyles.btnText, { color: "gray" }]}>
                    Oops, nothing to pay for
                  </Text>
                </TouchableOpacity>
              )}
              <TouchableOpacity
                style={paymentStyles.closeBtn}
                onPress={() => {
                  navigation.goBack();
                }}>
                <Text style={paymentStyles.btnText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default Payment;
