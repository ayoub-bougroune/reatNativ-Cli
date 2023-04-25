/* eslint-disable react/prop-types */ // eslint-disable-next-line no-unused-vars
import React, { FC } from "react";
import "react-native-gesture-handler";
import {
  Text,
  View,
  FlatList,
  ListRenderItem,
  Image,
  Pressable,
} from "react-native";
import { styles } from "./styles";
import { Item } from "../types/product";

type ProductList = {
  name: string;
  product: Item[];
};

const PupopSearch: FC<ProductList> = ({ product }) => {
  const _ItemView: ListRenderItem<ProductList> = ({ item: product }) => {
    return (
      <Pressable style={styles.PupopSearchCard}>
        {/* {loading && <Text>Loading...</Text>} */}
        <Image
          style={styles.PupopSearchImg}
          source={require("../assets/images/default.png")}
          resizeMode="contain"
        />
        <Text style={styles.PupopSearchText}>{product.name}</Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.PSContainer}>
      {product ? (
        <FlatList
          data={product}
          keyExtractor={(_item: any, index: any) => {
            return index;
          }}
          renderItem={_ItemView}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <IconPupopSearch name={""} product={[]} />
      )}
    </View>
  );
};

export { PupopSearch };

export const IconPupopSearch: FC<ProductList> = () => {
  return (
    <View style={styles.scrollContainer}>
      <View style={styles.container}>
        <View>
          <Image
            style={styles.icons}
            source={require("../assets/icons/icon_recherche.png")}
          />
          <Text style={styles.text}>Recherchez votre munchy favoris</Text>
        </View>
      </View>
    </View>
  );
};
