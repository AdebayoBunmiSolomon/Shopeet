import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { paymentStyles } from "./Style";
import { useNavigation } from "@react-navigation/native";
import { formatProductPrice } from "../resources/utils/functions";

const Payment: React.FunctionComponent<{}> = (props: any) => {
  const { totalPriceOfProduct } = props.route.params;
  const navigation: any = useNavigation();
  return (
    <>
      <View style={paymentStyles.container}>
        <View style={paymentStyles.formView}>
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
                <TouchableOpacity style={paymentStyles.continueBtn}>
                  <Text style={paymentStyles.btnText}>Continue</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={[paymentStyles.continueBtn, { backgroundColor: "" }]}>
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
