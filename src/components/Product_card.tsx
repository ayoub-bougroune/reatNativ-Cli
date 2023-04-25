/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { FC, useState } from "react";
import "react-native-gesture-handler";
import {
  Text,
  View,
  Image,
  FlatList,
  ListRenderItem,
  ScrollView,
  Pressable,
  Alert,
  TouchableWithoutFeedback,
} from "react-native";
import { styles } from "../screens/product/styles";
import { useNavigation, } from "@react-navigation/native";
import { IProductList } from "../types/product";
import { StackNavigationProp } from "@react-navigation/stack";
import { CategoryStackParams } from "../navigation/main.tab.navigator";
import { Item } from "../types/product";
import { useSelector } from "react-redux";
import { addItemToCart } from "../redux/slice/addTo_cart";

export const numColumns = 3;

type ProductDetailsStackType = StackNavigationProp<
  CategoryStackParams,
  "ProductDetail"
  >;

type Product = {
  appColors: string;
  product: Item[];
  isPress: number;
  name: string;
};
const ProductCard: FC<Product> = ({ product, appColors, isPress, name }) => {
  const navigation = useNavigation<ProductDetailsStackType>();
  const CartId = useSelector((state: { cartId: { CartId: number; } }) => state.cartId.CartId);
  const tokens = useSelector((state: { signIn: { tokens: null; }; })=> state.signIn.tokens);
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

  const _ItemView: ListRenderItem<IProductList> = ({ item: product }) => {
    //const img =  item.custom_attributes.find((attributes: { attribute_code: string; }) => attributes.attribute_code === "small_image").value;
    //const url = `https://munchy-re7.ayaline.com/${img}`;
    const CartItem = {
    sku: product.sku,
    qty: 1,
    quote_id: CartId,
   };
    return (
      <Pressable
        style={styles.productCard}
        onPress={() =>
          navigation.navigate("ProductDetail", {
            id: product.id,
            sku: product.sku,
            qty: product.qty,
            appColors: appColors,
          })
        }
      >
        <View>
          <View>
            <Image
              source={require("../assets/images/default.png")}
              resizeMode={"center"}
              style={styles.imageDefault}
            />
          </View>
          <View style={styles.cardContent}>
            <Text numberOfLines={1} style={styles.productName}>{product.name.toLocaleLowerCase()}</Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
            <Text style={styles.productPrice}>
              {product.price} DH
            </Text>
            <TouchableWithoutFeedback  onPress={() => tokens ? addItemToCart(CartItem) : createTwoButtonAlert()}>
              <Image
              source={require("../assets/images/plus.png")}
              resizeMode={"contain"}
              style={[styles.plus, {tintColor: appColors}]} />
            </TouchableWithoutFeedback>
          </View>
        </View>
      </Pressable>
    );
  };
 
  return (
      <ScrollView>
        <View style={styles.cardContainer}>
          <View style={{ paddingTop: 10, marginLeft: -5 }}>
            <Text style={styles.categoryName}>
              {isPress ? name : null}
            </Text>
          </View>
          <FlatList
            data={product}
            keyExtractor={(_item: any, index: number) => {
              return index.toString();
            }}
            renderItem={_ItemView}
            numColumns={numColumns}
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled
          />
        </View>
      </ScrollView>
  );
};

export { ProductCard }
