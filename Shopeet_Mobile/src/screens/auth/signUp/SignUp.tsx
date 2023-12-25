import React, { useContext, useEffect, useState } from "react";
import { View, ScrollView, TouchableOpacity, Text } from "react-native";
import { signUpScreenStyle } from "../style";
import Header from "../../../components/Header";
import GoBack from "../../../components/GoBack";
import { useNavigation, StackActions } from "@react-navigation/native";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";
import { UseAuthContext } from "../../../context/Auth/hooks/useAuth";
import Toast from "react-native-toast-message";
import {
  GetRequest,
  axiosConfig,
  url,
} from "../../../context/Auth/hooks/useRequest";

const SignUp: React.FunctionComponent<{}> = () => {
  const navigation: any = useNavigation();
  const { signUp, signUpStage, bgColor, nxtBtnTxt, setCustId } =
    useContext(UseAuthContext);
  const [isLengthLoading, setIsLengthLoading] = useState<boolean>(true);

  const nextSubmit = () => {
    signUp();
  };

  const getLengthOfCustomerFromServer = async () => {
    setIsLengthLoading(true);
    try {
      setIsLengthLoading(true);
      const { status, data } = await GetRequest(`${url}customers`, axiosConfig);
      if (status === 200 && data && data.length > 0) {
        setCustId(data.length + 1);
        setIsLengthLoading(false);
        return false;
      } else {
        setCustId(0);
        setIsLengthLoading(true);
      }
    } catch (err) {
      console.log("Error fetching customer length", err);
      setCustId(0);
      setIsLengthLoading(true);
    }
  };

  useEffect(() => {
    getLengthOfCustomerFromServer();
  }, []);

  return (
    <View
      style={[
        signUpScreenStyle.container,
        {
          backgroundColor: bgColor,
        },
      ]}>
      <View style={signUpScreenStyle.header}>
        <GoBack
          onClick={() => {
            navigation.dispatch(StackActions.replace("Welcome", {}));
          }}
          buttonStyle={signUpScreenStyle.goBackBtn}
          iconColor={signUpScreenStyle.goBackBtnIcon.color}
        />
        <Header
          headerText={"Sign up"}
          subHeaderText1={"Sign up for unlimited access"}
          subHeaderText2={""}
          headerTextStyle={signUpScreenStyle.headerText}
          subHeaderTextStyle={signUpScreenStyle.subHeaderText}
        />
        <Toast />
      </View>
      {/* form view */}
      <ScrollView contentContainerStyle={signUpScreenStyle.scrollViewContainer}>
        {(() => {
          switch (signUpStage) {
            case "first":
              return <First />;
            case "second":
              return <Second />;
            case "third":
              return <Third />;
            default:
              return null;
          }
        })()}
      </ScrollView>

      {/* dot view */}
      <View style={signUpScreenStyle.dotView}>
        {/* first dot */}
        <View
          style={[
            signUpScreenStyle.dot,
            { opacity: signUpStage === "first" ? 0.6 : undefined },
          ]}></View>
        {/* second dot */}
        <View
          style={[
            signUpScreenStyle.dot,
            { opacity: signUpStage === "second" ? 0.6 : undefined },
          ]}></View>
        {/* third dot */}
        <View
          style={[
            signUpScreenStyle.dot,
            { opacity: signUpStage === "third" ? 0.6 : undefined },
          ]}></View>
      </View>
      {/* bottom button */}
      <View style={signUpScreenStyle.bottomBtnView}>
        {/* skip btn */}
        <TouchableOpacity
          style={signUpScreenStyle.skipBtn}
          onPress={() => {
            navigation.dispatch(StackActions.replace("Welcome", {}));
          }}>
          <Text style={signUpScreenStyle.bottomBtnText}>Skip</Text>
        </TouchableOpacity>
        {/* next btn */}
        <TouchableOpacity
          style={signUpScreenStyle.nextBtn}
          onPress={() => {
            nextSubmit();
          }}>
          <Text style={signUpScreenStyle.bottomBtnText}>
            {!isLengthLoading ? nxtBtnTxt : "Loading..."}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SignUp;
