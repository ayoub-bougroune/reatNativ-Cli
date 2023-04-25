/* eslint-disable react/prop-types */ // eslint-disable-next-line no-unused-vars
import React, { FC, useEffect } from "react";
import "react-native-gesture-handler";
import {
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import { styles } from "../screens/product/styles";
import { Colors } from "../constants/colors";
import { CartItems } from "../types/cart";
import { useDispatch, useSelector } from "react-redux";
import { getItemStart } from "../redux/slice/getCart_items";
import { AppDispatch } from "../redux/store";


type CounterItem = {
  sku: string;
  appColors: string;
  qty: number;
  incrementQty: () => void;
};

const Counter: FC<CounterItem> = ({ appColors: appColors, sku, qty, incrementQty}) => {
  const dispatch = useDispatch<AppDispatch>();

  const CartItems = useSelector(
    (state: { cartItems: { CartItems: CartItems } }) => state.cartItems.CartItems
  );
  useEffect(() => {
      dispatch(getItemStart());
  }, [dispatch]);
  return (
  <>
      {Array.isArray(CartItems) ? (CartItems).map((item: { qty: number, sku: string, item_id: number }) => (
           item.sku === sku && item.qty !== 0 ? 
          <View key={item.item_id} style={styles.Counter}>
            <Pressable>
              <Image
                source={require("../assets/images/-.png")}
                resizeMode={"contain"}
                style={{ tintColor: appColors, width: 18, height: 18 }}
              />
         </Pressable>
             <Text style={styles.counterText}>{item.qty}</Text> 
           <Pressable onPress={() => incrementQty()} >
              <Image
                source={require("../assets/images/+.png")}
                resizeMode={"contain"}
                style={{ tintColor: appColors, width: 18, height: 18 }}
              />
            </Pressable>
            </View> : <View></View>
       )) : null} 
</>
);
};

export { Counter };


