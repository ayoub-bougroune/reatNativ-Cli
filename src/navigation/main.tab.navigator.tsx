// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
import React, { FC, useEffect } from "react";
import { Text, View, Image, TouchableOpacity, Pressable } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Commandes } from "../screens/Commandes/Commandes";
import { Cart } from "../screens/cart/Cart";
import Compte from "../screens/Compte/Compte";
import Dashboard from "../screens/Dashboard/Dashboard";
import { Colors } from "../constants/colors";
import { CategoriesScreen } from "../screens/categories/CategoriesScreen";
import { ProductList } from "../screens/product/ProductList";
import { ProductDetail } from "../screens/product/Produit_details";
import { Adresses } from "../screens/adresses/Adresses";
import { AddAdresses } from "../screens/adresses/Add_adresses";
import { EditAdresses } from "../screens/adresses/Edit_adresses";
import { Settings } from "../screens/paramétres/Settings";
import { EditSettings } from "../screens/paramétres/Edit_Pssword";
import { Location } from "../screens/map/Location";
import { DrawerContent } from "../components/DrawerContent";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigatorScreenParams } from "@react-navigation/native";
import { styles } from "../constants/styles";
import { AppDispatch } from "../../src/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { getItemStart } from "../redux/slice/getCart_items";
import { CartItems } from "../types/cart";

export type DrawerTabStackParams = {
  Dashboard: undefined;
  ProductList: {
    id: number;
    name: string;
    appColors: string;
  };
};

export type CategoryStackParams = {
  DrawerNavigator: NavigatorScreenParams<DrawerTabStackParams>;
  CategoriesScreen: undefined;
  ProductList: {
    id: number;
    name: string;
    appColors: string;
  };
  ProductDetail: {
    id: number;
    sku: string;
    qty: number;
    appColors: string;
  };
  openDrawer: undefined;
};

export type CompteStackParams = {
  CompteDetails: undefined;
  Adresses: undefined;
  AddAdresses: undefined;
  EditAdresses: undefined;
  Settings: undefined;
  EditSettings: undefined;
  Location: undefined;
};

export type TabStackParams = {
  Accueil: NavigatorScreenParams<CategoryStackParams>;
  Panier: undefined;
  Commandes: undefined;
  Compte: NavigatorScreenParams<CompteStackParams>;
};

const Drawer = createDrawerNavigator<DrawerTabStackParams>();
const CategoryStack = createNativeStackNavigator<CategoryStackParams>();
const CompteStack = createNativeStackNavigator<CompteStackParams>();
const Tab = createMaterialBottomTabNavigator<TabStackParams>();

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
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="ProductList" component={ProductList} />
    </Drawer.Navigator>
  );
};
const CategoryDetailsStack = () => {
  return (
    <CategoryStack.Navigator screenOptions={{ headerShown: false }}>
      <CategoryStack.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
      />
      <CategoryStack.Screen
        name="CategoriesScreen"
        component={CategoriesScreen}
      />
      <CategoryStack.Screen name="ProductList" component={ProductList} />
      <CategoryStack.Screen name="ProductDetail" component={ProductDetail} />
    </CategoryStack.Navigator>
  );
};
export const CompteDetailsStack = () => {
  return (
    <CompteStack.Navigator screenOptions={{ headerShown: false }}>
      <CompteStack.Screen name="CompteDetails" component={Compte} />
      <CompteStack.Screen name="Adresses" component={Adresses} />
      <CompteStack.Screen name="AddAdresses" component={AddAdresses} />
      <CompteStack.Screen name="EditAdresses" component={EditAdresses} />
      <CompteStack.Screen name="Settings" component={Settings} />
      <CompteStack.Screen name="EditSettings" component={EditSettings} />
      <CompteStack.Screen name="Location" component={Location} />
    </CompteStack.Navigator>
  );
};

const MainTab: FC = () => {
   const dispatch = useDispatch<AppDispatch>();

   const CartItems = useSelector(
     (state: { cartItems: { CartItems: CartItems } }) => state.cartItems.CartItems
   );
  const tokens = useSelector(
    (state: { signIn: { tokens: null; }; }) => state.signIn.tokens
  );
    useEffect(() => {
      { tokens && dispatch(getItemStart()); }
   }, [dispatch]);
  return (
    <Tab.Navigator
      initialRouteName="Accueil"
      activeColor={Colors.appColor}
      barStyle={styles.tabBarStyle}
      screenOptions={({ route }) => ({
        tabBarLabel: "",
        
        tabBarIcon: ({ focused }) => {
          let image: any;
          let name: string;
               if (route.name === "Accueil") {
                          image = require("../assets/icons/home.png");
                          name = "Accueil";
                  } else if (route.name === "Panier") {
                          image = require("../assets/icons/shopping-bag.png");
                          name = "Panier";
                  } else if (route.name === "Commandes") {
                          image = require("../assets/icons/clipboard.png");
                          name = "Commandes";
                  } else if (route.name === "Compte"){
                          image = require("../assets/icons/user.png");
                          name = "Compte";
                  }
       
          return (
            
            <Pressable  style={[ styles.tabContainer,  !tokens && { opacity:0.5  } ]}>
              <Image
                source={image}
                resizeMode="contain"
                style={[styles.tabBarIcon,{
                  tintColor: focused ? Colors.appColor :
                  Colors.black,
                }]}
              />
              <Text style={styles.tabBarText}>
                {name}
              </Text>
            </Pressable>
          );
        },

      })}
    >
      <Tab.Screen name="Accueil" component={CategoryDetailsStack} />
        <Tab.Screen name="Panier" component={Cart}
          options={tokens && {
            tabBarBadge: 
              Array.isArray(CartItems) && (CartItems).reduce((sum: number, item: {  qty: number }) => {
                    return item.qty > 0 ? sum + item.qty : null
              }, 0)   
          }}
        />
     
        <Tab.Screen name="Commandes" component={Commandes} />
        <Tab.Screen name="Compte" component={CompteDetailsStack} />  
      </Tab.Navigator >
  );
};

export default MainTab;

