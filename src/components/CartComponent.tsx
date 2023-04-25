/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable no-empty-pattern */
import React, { FC } from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  View,
  Text,
  FlatList,
  Image,
  Pressable
} from "react-native";
import { Colors } from "../constants/colors";
import { styles } from "../screens/cart/styles";
import { useNavigation } from "@react-navigation/native";
import { CartItems } from "../types/cart";
import { RootState, AppDispatch } from "../redux/store";
import { getItemStart } from "../redux/slice/getCart_items";
import { StackNavigationProp } from "@react-navigation/stack";
import { CategoryStackParams } from "../navigation/main.tab.navigator";
import { deleteProduct } from "../redux/slice/getCart_items";

type ProductDetailsStackType = StackNavigationProp<
  CategoryStackParams,
  "ProductDetail"
  >;

const ComponentCart: FC = () => {
  const [count, setCount] = useState(0);
  
  const CarItems = useSelector(
    (state: RootState | CartItems | any) => state.cartItems.CartItems
  );

  const appColors = useSelector(
    (state: { product: { appColors: string; }; }) => state.product.appColors
  );

  const tokens = useSelector(
    (state: { signIn: { tokens: null; }; }) => state.signIn.tokens
  );

  const navigation = useNavigation<ProductDetailsStackType>();

  const dispatch = useDispatch<AppDispatch>(); 
  
  const renderItem: FC<CartItems> = ({ item: product }) => {
    return (
      <>
        <Pressable style={styles.container}
           onPress={() =>
           navigation.navigate("ProductDetail", {
            id: product.item_id,
            sku: product.sku,
            qty: product.qty,
            appColors: appColors,
          })
        } 
        >
          <Pressable onPress={() => dispatch(deleteProduct(product.item_id))} style={styles.delete}>
            <Image
              style={{ tintColor: Colors.black, width: 40, height: 40 }}
              resizeMode="contain"
              source={require("../assets/images/x.png")}
            />
          </Pressable>
          <View style={styles.ViewImg}>
            <Image
              style={{ width: 65, height: 65 }}
              resizeMode="contain"
              source={require("../assets/images/default.png")}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ position: "relative", top: -25, left: 90 }}>
              <Text
                style={{
                  color: Colors.appColor,
                  fontSize: 10,
                  fontFamily: "TTNorms-Regular",
                }}
              >
                Prix unitaire
              </Text>
              <Text
                style={{
                  color: Colors.black,
                  fontSize: 14,
                  fontFamily: "TTNorms-Bold",
                }}
              >
                {product.price} DH
              </Text>
            </View>
            <View style={{ position: "relative", top: -25, left: 180 }}>
              <Text
                style={{
                  color: Colors.appColor,
                  fontSize: 10,
                  fontFamily: "TTNorms-Regular",
                }}
              >
                Total
              </Text>
              <Text
                style={{
                  color: Colors.black,
                  fontSize: 14,
                  fontFamily: "TTNorms-Bold",
                }}
              >
                {product.price * product.qty} DH
              </Text>
            </View>
          </View>
          <Text
            style={{
              position: "relative",
              left: 90,
              top: -98,
              fontFamily: "TTNorms-Regular",
              fontSize: 12,
            }}
          >
            {product.name}{" "}
          </Text>
          <View style={styles.Counter}>
            <Pressable onPress={() => setCount(count - 1)}>
              <Image
                source={require("../assets/images/-.png")}
                resizeMode={"contain"}
                style={{ tintColor: Colors.appColor, width: 25, height: 30 }}
              />
            </Pressable>
            <Text
              style={{
                fontFamily: "TTNorms-Bold",
                fontSize: 20,
                color: Colors.black,
              }}>
              {product.qty}
            </Text>
            <Pressable onPress={() => setCount(count + 1)}>
              <Image
                source={require("../assets/images/+.png")}
                resizeMode={"contain"}
                style={{ tintColor: Colors.appColor, width: 25, height: 30 }}
              />
            </Pressable>
          </View>
        </Pressable>
      </>
    );
  }

   useEffect(() => {
     { tokens && dispatch(getItemStart()) }
   }, [dispatch, CarItems])

  return (
    <>  
      <FlatList
        data={CarItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.item_id.toString()}
        //ListFooterComponent={Totals}
        showsVerticalScrollIndicator={false} />
          
      </>
  );
};
export { ComponentCart };
