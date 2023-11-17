import React, { useEffect, useState } from "react";
import { Platform, Text, View, Dimensions } from "react-native";
import { messageProps } from "../interface/AppInterface";
import Animated, { ZoomIn, SlideOutUp } from "react-native-reanimated";
import { messageStyle } from "./Style";
import ErrorIcon from "react-native-vector-icons/MaterialIcons";
import WarningIcon from "react-native-vector-icons/FontAwesome";
import InfoIcon from "react-native-vector-icons/Ionicons";
import SuccessIcon from "react-native-vector-icons/FontAwesome";

const { width, height } = Dimensions.get("window");

const toastProperties: any = {
  success: {
    lineColor: "#14A44D",
    icon: (
      <SuccessIcon
        name='check-circle'
        color={"#14A44D"}
        size={25}
        style={{ paddingLeft: 20 }}
      />
    ),
  },
  danger: {
    lineColor: "#e63956",
    icon: (
      <ErrorIcon
        name='error'
        color={"#e63956"}
        size={25}
        style={{ paddingLeft: 20 }}
      />
    ),
  },
  warning: {
    lineColor: "#E4A11B",
    icon: (
      <WarningIcon
        name='warning'
        color={"#E4A11B"}
        size={25}
        style={{ paddingLeft: 20 }}
      />
    ),
  },
  info: {
    lineColor: "#54B4D3",
    icon: (
      <InfoIcon
        name='information-circle'
        color={"#54B4D3"}
        size={25}
        style={{ paddingLeft: 20 }}
      />
    ),
  },
};

const Message: React.FunctionComponent<messageProps> = ({
  msgType,
  animationTimeIn,
  show,
  msgText,
}) => {
  const lineColor: any = toastProperties[msgType].lineColor;
  const msgIcon: any = toastProperties[msgType].icon;

  return (
    <>
      {show === true ? (
        <Animated.View
          style={messageStyle.animatedView}
          entering={ZoomIn.delay(animationTimeIn)}
          exiting={SlideOutUp}>
          <View style={messageStyle.msgContainer}>
            <View style={messageStyle.msgContentView}>
              <View
                style={[
                  messageStyle.lineView,
                  {
                    backgroundColor: lineColor,
                  },
                ]}></View>
              <View
                style={{
                  justifyContent: "space-around",
                  flexDirection: "row",
                  alignItems: "center",
                }}>
                <Text style={messageStyle.messageText}>{msgText}</Text>
                {msgIcon}
              </View>
            </View>
          </View>
        </Animated.View>
      ) : null}
    </>
  );
};

export default Message;
