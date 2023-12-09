import React from "react";
import { UseAuthContextProvider } from "../context/Auth/useAuth";
import { ShopContextProvider } from "../context/Auth/shopContext";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "../screens/auth/signUp/SignUp";
import Home from "../screens/home/routes/TabRoutes";
import SheetModal from "../components/SheetModal";

const Stack = createNativeStackNavigator();

//for authentication
export const SignUpContext: React.FunctionComponent<{}> = () => {
  return (
    <UseAuthContextProvider>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='SignUp' component={SignUp} />
      </Stack.Navigator>
    </UseAuthContextProvider>
  );
};

//for shopping and the likes
export const HomeContext: React.FunctionComponent<{}> = () => {
  return (
    <ShopContextProvider>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Collection' component={SheetModal} />
      </Stack.Navigator>
    </ShopContextProvider>
  );
};

// export const CollectionContext: React.FunctionComponent<{}> = () => {
//   return (
//     <ShopContextProvider>
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         <Stack.Screen name='Collection' component={SheetModal} />
//       </Stack.Navigator>
//     </ShopContextProvider>
//   );
// };
