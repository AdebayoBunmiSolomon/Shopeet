import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../screens/authScreen/Welcome";

const Stack = createNativeStackNavigator();

const Screen: React.FunctionComponent<{}> = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Welcome' component={Welcome} />
    </Stack.Navigator>
  );
};

export default Screen;
