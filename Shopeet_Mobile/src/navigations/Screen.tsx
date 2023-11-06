import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../screens/auth/Welcome";
import Login from "../screens/auth/Login";
import SignUp from "../screens/auth/SignUp";

const Stack = createNativeStackNavigator();

const Screen: React.FunctionComponent<{}> = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Welcome' component={Welcome} />
      <Stack.Screen
        name='Login'
        component={Login}
        options={{
          animation: "slide_from_right",
        }}
      />
      <Stack.Screen
        name='SignUp'
        component={SignUp}
        options={{
          animation: "slide_from_bottom",
        }}
      />
    </Stack.Navigator>
  );
};

export default Screen;