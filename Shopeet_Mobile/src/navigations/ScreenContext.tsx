import React from "react";
import { UseAuthContextProvider } from "../context/Auth/useAuth";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "../screens/auth/signUp/SignUp";

const Stack = createNativeStackNavigator();

export const SignUpContext: React.FunctionComponent<{}> = () => {
  return (
    <UseAuthContextProvider>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='SignUp' component={SignUp} />
      </Stack.Navigator>
    </UseAuthContextProvider>
  );
};
