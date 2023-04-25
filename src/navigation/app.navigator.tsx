// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  NavigationContainer,
  NavigatorScreenParams,
} from "@react-navigation/native";
import Welcome from "../screens/Welcome/WelcomeScreen";
import { SignIn } from "../screens/auth/signIn/SignIn";
import { SignUp } from "../screens/auth/signUp/SignUp";
import MainTab from "../navigation/main.tab.navigator";
import { ProductList } from "../screens/product/ProductList";
import { useSelector } from "react-redux";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContent } from "../components/DrawerContent";
import { Location } from "../screens/map/Location";
import { CompteDetailsStack, CompteStackParams } from "../navigation/main.tab.navigator"

export type RootStackParams = {
  DrawerNavigator: NavigatorScreenParams<DrawerStackParams>;
  SignIn: undefined;
  Welcome: undefined;
  MainTab: undefined;
  AddAdresses: undefined;
  MapDetailsStack: NavigatorScreenParams<MapStackParams>;
  Consulter: undefined;
  CompteAppNav: NavigatorScreenParams<CompteStackParams>;
  openDrawer: () => void;
};

export type MapStackParams = {
  SignUp: undefined;
  Location: undefined;
};

export type DrawerStackParams = {
  MainTab: undefined;
  ProductList: {
    id: number;
    name: string;
    appColors: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParams>();
const MapStack = createNativeStackNavigator<MapStackParams>();
const Drawer = createDrawerNavigator<DrawerStackParams>();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        swipeEnabled: false,
        drawerPosition: "right",
        headerTitle: "",
        drawerStyle: { width: "80%" },
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="MainTab" component={MainTab} />
      <Drawer.Screen name="ProductList" component={ProductList} />
    </Drawer.Navigator>
  );
};
const MapDetailsStack = () => {
  return (
    <MapStack.Navigator screenOptions={{ headerShown: false }}>
      <MapStack.Screen name="SignUp" component={SignUp} />
      <MapStack.Screen name="Location" component={Location} />
    </MapStack.Navigator>
  );
};

const MyStack = () => {
  
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}initialRouteName="Welcome">
      <Stack.Screen name="MainTab" component={MainTab} />
      <Stack.Screen name="CompteAppNav" component={CompteDetailsStack} />
    </Stack.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="MapDetailsStack" component={MapDetailsStack} />
      <Stack.Screen name="Consulter" component={DrawerNavigator} />
    </Stack.Navigator >
  );
};

//import CryptoJS from "react-native-crypto-js";

const AppNavigator = () => {
  const tokens = useSelector((state: { signIn: { tokens: string; }; }) => state.signIn.tokens);
  // const cipherToken = CryptoJS.AES.encrypt(tokens, "secret tokens").toString();
  // const bytes  = CryptoJS.AES.decrypt(cipherToken, "secret tokens");
  // const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));


  return (
    <NavigationContainer>
         {tokens ? <MyStack /> : <AuthStack />}  
    </NavigationContainer>
  );
};

export default AppNavigator;
