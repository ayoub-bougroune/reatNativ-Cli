/* eslint-disable react/prop-types */
import React, { FC, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "react-native-gesture-handler";
import { Colors } from "../../constants/colors";
import {
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  Pressable,
  Alert,
} from "react-native";
import { styles } from "./styles";
import { useNavigation, RouteProp } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { CategoryStackParams } from "../../navigation/main.tab.navigator";
import { CartItem } from "../../types/product";
import { AppDispatch, RootState, store} from "../../redux/store";
import { addItemStart } from "../../redux/slice/addTo_cart";
import { getCartIdStart } from "../../redux/slice/cartId";
import { CartItems } from "../../types/cart";
import { getItemStart } from "../../redux/slice/getCart_items";
import { Counter } from "../../components/Counter";
import { incrementStart } from "../../redux/slice/counter";
import axios from "axios";
import { HOST } from "../../constants/env";
import { singleProductStart } from "../../redux/slice/single_product";


type ProductParamsType = RouteProp<CategoryStackParams, "ProductDetail">;
const screenHeight = Dimensions.get('window').height;
export interface IC {
    id: number;
    name: string;
    price: number;
    sku: string;
    qty: number;
    appColors: string;
}
const ProductDetail: FC = () => {
  const route = useRoute<ProductParamsType>();
  const { id, appColors: appColors, sku, qty } = route.params;
  const navigation = useNavigation();
  const dispatch = useDispatch<AppDispatch>();
  const ProductPage = () => navigation.goBack();
  const tokens = useSelector((state: { signIn: { tokens: null; }; }) => state.signIn.tokens);
  const CartId = useSelector((state: { cartId: { CartId: number; } }) => state.cartId.CartId);
  const singleProduct = useSelector((state: RootState) => state.singleProduct.Product);
  const state = store.getState();
  const USER_TOKEN = state.signIn.tokens;

  const CartItem = {
    sku: sku,
    qty: 1,
    quote_id: CartId,
  };
  
  const increment = async (id: number, cartItem: CartItem) => {
    const res = await axios.put(`${HOST}carts/mine/items/${id}`, {
      header: { 'Authorization': `Bearer ${USER_TOKEN}` }
      , body: { cartItem }
    });
    console.log(res.data);
  }
  
  const addItemToCart = (CartItem: CartItem) => {
    dispatch(addItemStart(CartItem));
  }

  const createTwoButtonAlert = () =>
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
      ]
    );

  useEffect(() => {
    {
      tokens &&
      dispatch(getCartIdStart());
      dispatch(singleProductStart(sku));
    }
  }, [dispatch]);

  return (
    <View style={styles.detailsContainer}>
      <View  style={{ height: screenHeight - 20 }}>

          <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: Colors.white }}>
            <View style={[styles.DetailsHeader, { backgroundColor: appColors }]}>
              <Pressable onPress={ProductPage}>
                <Image
                  style={styles.goBack}
                  source={require("../../assets/imgtest/back.webp")}
                />
              </Pressable>
            </View>
            <View style={styles.cardImage}>
              <Image
                source={require("../../assets/images/default.png")}
                resizeMode={"contain"}
                style={styles.imagePDetails} />
          </View>
            <View  style={styles.textDetails}>
              <Text style={styles.productDetailsTex}>
                {singleProduct.price} DH
              </Text>
              <Text style={[styles.productDetailsTex, { fontFamily: "TTNorms-Regular" }]}>
                {singleProduct.name.toLowerCase()}
              </Text>
              {tokens && <Counter sku={singleProduct.sku} appColors={appColors} qty={qty} incrementQty={() => increment(id, CartItem)} />}
            </View>
            <Pressable
              style={styles.btnPDetails}
              onPress={() => tokens ? addItemToCart(CartItem) : createTwoButtonAlert()}>
              <Text style={[styles.productDetailsTex, { color: Colors.white }]}>
                Ajouter au panier
              </Text>
            </Pressable>
            </ScrollView>
        </View>
     
    </View>
   
  );
};

export { ProductDetail };
