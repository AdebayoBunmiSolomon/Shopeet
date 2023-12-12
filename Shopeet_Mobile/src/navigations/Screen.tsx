import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../screens/auth/Welcome";
import Login from "../screens/auth/Login";
import { SignUpContext } from "./SignUpNavigationContext";
import SheetModal from "../components/CollectionModal";
import Home from "../screens/home/routes/TabRoutes";
import ProductInfo from "../screens/ProductInfo/ProductInfo";
import { ShopContextProvider } from "../context/Auth/shopContext";
import ProductReview from "../screens/ProductInfo/ProductReview";

const Stack = createNativeStackNavigator();
const Modal = createNativeStackNavigator();
const Screens = createNativeStackNavigator();

const Screen: React.FunctionComponent<{}> = () => {
  return (
    <>
      <ShopContextProvider>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Screens.Group>
            <Screens.Screen name='Welcome' component={Welcome} />
            <Screens.Screen
              name='Login'
              component={Login}
              options={{
                animation: "slide_from_right",
              }}
            />
            <Screens.Screen
              name='SignUpContext'
              component={SignUpContext}
              options={{
                animation: "slide_from_bottom",
              }}
            />
            <Screens.Screen
              name='Home'
              component={Home}
              options={{
                animation: "slide_from_right",
              }}
            />
            <Screens.Screen
              name='ProductInfo'
              component={ProductInfo}
              options={{
                animation: "slide_from_left",
              }}
            />
          </Screens.Group>
          <Modal.Group>
            <Modal.Screen
              name='Collection'
              component={SheetModal}
              options={{
                presentation: "transparentModal",
                animation: "slide_from_bottom",
                animationDuration: 100,
              }}
            />
            <Modal.Screen
              name='ProductReview'
              component={ProductReview}
              options={{
                presentation: "transparentModal",
                animation: "slide_from_bottom",
                animationDuration: 100,
              }}
            />
          </Modal.Group>
        </Stack.Navigator>
      </ShopContextProvider>
    </>
  );
};

export default Screen;
