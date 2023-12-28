import { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Screen from "./src/navigations/Screen";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { ProtectedRouteContextProvider } from "./src/context/ProtectedRoute";

export default function App() {
  // FONTS
  const [fontsLoaded, fontError] = useFonts({
    "RobotoCondensed-Bold": require("./assets/fonts/RobotoCondensed-Bold.ttf"),
    "RobotoCondensed-Regular": require("./assets/fonts/RobotoCondensed-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) await SplashScreen.hideAsync();
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) return null;

  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <ProtectedRouteContextProvider>
          <Screen />
        </ProtectedRouteContextProvider>
      </NavigationContainer>
    </>
  );
}
