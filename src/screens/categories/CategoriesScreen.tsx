/* eslint-disable react/prop-types */ // eslint-disable-next-line no-unused-vars
import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCategoriesStart } from "../../redux/slice/categories";
import "react-native-gesture-handler";
import {
  Pressable,
  Text,
  View,
  FlatList,
  ListRenderItem,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../../constants/colors";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../../navigation/app.navigator";
import { RootState } from "../../redux/store";
import { IMAGE_HOST } from "../../constants/env";

type ProductStackType = StackNavigationProp<RootStackParams, "DrawerNavigator">;

export interface IC {
  custom_attributes: any;
  items: any;
  id: number;
  name: string;
  image: string;
}
const CategoriesScreen: FC = () => {
  const [load, setLoad] = useState(1);
  const [loading, setisLoading] = useState(false);
  //const [Categories, setCategories] = useState([]);
  const numColumns = 2;
  const navigation = useNavigation<ProductStackType>();
  const dispatch = useDispatch();
  const Categories = useSelector(
    (state: RootState) => state.categories.Categories.items
  );
  const getData = async () => {
    dispatch(loadCategoriesStart());
  };


  const loadMore = () => {
    setLoad(load + 1);
    setisLoading(true);
  };
  useEffect(() => {
    getData();
  }, [dispatch]);

  const _ItemView: ListRenderItem<IC> = ({ item: category }) => {
    const cardSize = category.custom_attributes.find(
      (attributes: { attribute_code: string }) =>
        attributes.attribute_code === "category_number_cols_mobile"
    ).value;
    const appColors = category.custom_attributes.find(
      (attributes: { attribute_code: string }) =>
        attributes.attribute_code === "category_color_banner"
    ).value;
    const cardImage = category.custom_attributes.find(
      (attributes: { attribute_code: string }) =>
        attributes.attribute_code === "category_image_mobile"
    ).value;
    const url = `${IMAGE_HOST}${cardImage}`;
    return (
      <Pressable
        style={{
          flex:  cardSize === "1" ? 1 /numColumns : null,
          width: cardSize === "2" ? "95%" : null,
          height: 125,
          borderTopLeftRadius: 8,
          flexDirection: cardSize === "1" ? "column" : cardSize === "2" ? "column" : null,
          borderTopRightRadius: 8,
          borderBottomRightRadius: 8,
          borderBottomLeftRadius: 8,
          margin: 5,
        }}
        onPress={() =>
          navigation.navigate("DrawerNavigator", {
            screen: "ProductList",
            params: {
              id: category.id,
              name: category.name,
              appColors: appColors,
            },
          })
        }
      >
        <ImageBackground
          style={styles.image}
          resizeMode="contain"
          source={{ uri: url }}
        >
          <View style={styles.itemText}>
            <Text
              style={{
                fontSize: 14,
                padding: 6,
                fontFamily: "TTNorms-Bold",
                color: Colors.black,
              }}
            >
              {category.name.toUpperCase()}
            </Text>
          </View>
        </ImageBackground>
      </Pressable>
    );
  };

  
  const ItemSeparatorView = () => {
    return <View></View>;
  };

  return (
    <View style={styles.Container}>
      {/* <Loader /> */}
      <FlatList
        data={Categories}
        numColumns={numColumns}
        keyExtractor={(_item: any, index: any) => {
          return index;
        }}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={_ItemView}
        onEndReached={loadMore}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export { CategoriesScreen };
