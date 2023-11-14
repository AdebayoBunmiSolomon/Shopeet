import React, { useState } from "react";
import { View, ScrollView, TouchableOpacity, Text } from "react-native";
import { signUpScreenStyle } from "../style";
import { signUpScreenColors } from "../../../resources/Colors";
import Header from "../../../components/Header";
import GoBack from "../../../components/GoBack";
import { useNavigation, StackActions } from "@react-navigation/native";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";

const SignUp: React.FunctionComponent<{}> = () => {
  const navigation: any = useNavigation();
  const [state, setState] = useState<number>(1);
  const [bgColor, setBgColor] = useState<string>(
    signUpScreenColors.form.primary
  );
  const [nxtBtnTxt, setNxtBtnTxt] = useState<string>("Next");
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
            navigation.dispatch(StackActions.replace("Login", {}));
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
      </View>
      {/* form view */}
      <ScrollView contentContainerStyle={signUpScreenStyle.scrollViewContainer}>
        {(() => {
          switch (state) {
            case 1:
              return <First />;
            case 2:
              return <Second />;
            case 3:
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
            { opacity: state === 1 ? 0.6 : undefined },
          ]}></View>
        {/* second dot */}
        <View
          style={[
            signUpScreenStyle.dot,
            { opacity: state === 2 ? 0.6 : undefined },
          ]}></View>
        {/* third dot */}
        <View
          style={[
            signUpScreenStyle.dot,
            { opacity: state === 3 ? 0.6 : undefined },
          ]}></View>
      </View>
      {/* bottom button */}
      <View style={signUpScreenStyle.bottomBtnView}>
        {/* skip btn */}
        <TouchableOpacity
          style={signUpScreenStyle.skipBtn}
          onPress={() => {
            navigation.dispatch(StackActions.replace("Login", {}));
          }}>
          <Text style={signUpScreenStyle.bottomBtnText}>Skip</Text>
        </TouchableOpacity>
        {/* next btn */}
        <TouchableOpacity
          style={signUpScreenStyle.nextBtn}
          onPress={() => {
            if (state === 1) {
              setState(state + 1);
              setBgColor(signUpScreenColors.form.tertiary);
            } else if (state === 2) {
              setState(state + 1);
              setBgColor(signUpScreenColors.form.secondary);
              setNxtBtnTxt("Submit");
            } else if (nxtBtnTxt === "Submit" && state === 3) {
              console.log("Operation can now be performed");
            }
          }}>
          <Text style={signUpScreenStyle.bottomBtnText}>{nxtBtnTxt}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SignUp;
