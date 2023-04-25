/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable no-empty-pattern */
import React, { FC } from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  View,
  Text,
  Pressable
} from "react-native";
import { styles } from "../screens/cart/styles";
import { useNavigation } from "@react-navigation/native";
import { CartItems } from "../types/cart";
import { RootState, AppDispatch } from "../redux/store";
import { getItemStart } from "../redux/slice/getCart_items";
import { StackNavigationProp } from "@react-navigation/stack";
import { CategoryStackParams } from "../navigation/main.tab.navigator";

type ProductDetailsStackType = StackNavigationProp<
  CategoryStackParams,
  "ProductDetail"
  >;

const Footer: FC = () => {

    const dash = () => navigation.goBack();
  
  const CarItems = useSelector(
    (state: RootState | CartItems | any) => state.cartItems.CartItems
  );

  const tokens = useSelector(
    (state: { signIn: { tokens: null; }; }) => state.signIn.tokens
  );

  const navigation = useNavigation<ProductDetailsStackType>();

  const dispatch = useDispatch<AppDispatch>(); 
  
   useEffect(() => {
     { tokens && dispatch(getItemStart()) }
   }, [dispatch, CarItems])

  return (
        <View  style={styles.footer}>
        <View style={{ paddingTop: 10, paddingLeft: 20 }}>
          <Text style={styles.SousTotalText}>
            {"Sous-total"}
          </Text>
          <View style={styles.SousTotalView}>
            <Text style={styles.SousTotalNumber}>
                  {CarItems.reduce((sum: number, item: { price: number, qty: number }) => {
                    return sum + (item.price * item.qty)
                  }, 0)
                  } {"DH"}
            </Text>
          </View>
        </View>
        <View style={styles.FraisService}>
          <Text
            style={styles.FraisServiceText}>
            {"Frais de service"}
          </Text>
          <View style={styles.frSeNumberView}>
            <Text style={styles.FraisNumberText}>
              {15} {"DH"}
            </Text>
          </View>
        </View>
        <View style={styles.prixTotal}>
          <Text style={styles.prixTotalText}>
            {"Prix-total"}
          </Text>
          <View style={styles.prixTotalNbView}>
            <Text style={styles.prixTNbText}>
                  {CarItems.reduce((sum: number, item: { price: number, qty: number }) => {
                    return sum + (item.price * item.qty + 15)
                  }, 0)
                      } {"DH"}
            </Text>
          </View>
        </View>
        <Pressable style={styles.btnPDetails}>
          <Text style={styles.btnValider}>
            Valider et commander
          </Text>
        </Pressable>
        <Pressable onPress={dash} style={styles.btnPDetails2}>
          <Text style={styles.continueAchart}>
            Continuer mes achats
          </Text>
        </Pressable>
        </View>              
  );
};
export { Footer };
