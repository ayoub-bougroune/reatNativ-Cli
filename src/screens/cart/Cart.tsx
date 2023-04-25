/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable no-empty-pattern */
import React, { FC } from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  View,
} from "react-native";
import { Colors } from "../../constants/colors";
import { CartItems } from "../../types/cart";
import { RootState, AppDispatch } from "../../redux/store";
import { getItemStart } from "../../redux/slice/getCart_items";
import { EmptyCart } from "../../components/empty_cart";
import { Footer } from "../../components/footerCard";
import { Header } from "../../components/Header";
import { ComponentCart } from "../../components/CartComponent";


const Cart: FC = () => {
  
  const CarItems = useSelector(
    (state: RootState | CartItems | any) => state.cartItems.CartItems
  );

  const appColors = useSelector(
    (state: { product: { appColors: string; }; }) => state.product.appColors
  );

  const tokens = useSelector(
    (state: { signIn: { tokens: null; }; }) => state.signIn.tokens
  );

  const dispatch = useDispatch<AppDispatch>(); 
  
   useEffect(() => {
     { tokens && dispatch(getItemStart()) }
   }, [dispatch, CarItems])

  return (
    <>
    {CarItems !== null  && tokens ? (
    <View style={{ flex: 1, backgroundColor: Colors.white, alignItems: "center" }}>
      <Header />
       <ComponentCart />
      <Footer />
      </View>) : ( <EmptyCart />)
      }
    </>
  );
};
export { Cart };
