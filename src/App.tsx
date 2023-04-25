import React, { FC, useEffect } from "react";
import AppNavigator from "./navigation/app.navigator";
import { enableLatestRenderer } from "react-native-maps";
import SplashScreen from "react-native-splash-screen";
import { TailwindProvider } from "tailwindcss-react-native";

enableLatestRenderer();
const App: FC = () => {
  // useEffect(() => {
  //   return SplashScreen.hide();
  // },[])
  return (
    <TailwindProvider>
      <AppNavigator />
    </TailwindProvider>
  );
};

export default App;
