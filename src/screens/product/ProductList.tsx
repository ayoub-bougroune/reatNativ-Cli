/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "react-native-gesture-handler";
import { Colors } from "../../constants/colors";
import {
  View,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import { styles } from "./styles";
import { useNavigation, RouteProp, useRoute } from "@react-navigation/native";
import { productsById } from "../../redux/slice/products";
import { loadSubCategoriesStart } from "../../redux/slice/subCategories";
import { DrawerStackParams } from "../../navigation/app.navigator";
import { StackNavigationProp } from "@react-navigation/stack";
import { CategoryStackParams } from "../../navigation/main.tab.navigator";
import { Item } from "../../types/product";
import { AppDispatch, RootState } from "../../redux/store";
import { SearchCom } from "../../components/SearchCom";
import { ProductCard } from "../../components/Product_card";
import { SubComponent } from "../../components/Sub_category";

export const numColumns = 3;

type ProductDetailsStackType = StackNavigationProp<
  CategoryStackParams,
  "ProductDetail"
  >;

type ProductsParamsType = RouteProp<DrawerStackParams, "ProductList">;

const ProductList: FC = () => {

  const route = useRoute<ProductsParamsType>();
  const [search, setSearch] = useState("");
  const { id, name, appColors: appColors } = route.params;
  const [isPress, setIsPress] = useState(0);

  const subCategories = useSelector(
    (state: RootState | Item[] | any) => state.subCategories.SubCategories.items
  );

  const Products = useSelector(
    (state: RootState | Item[] | any) => state.product.Product.items
  );
 
  

  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation<ProductDetailsStackType>();
  const Dash = (status: React.SetStateAction<string>) => {
    navigation.goBack();
    setSearch("");
  };

   

  const ProductsByCategoryId = async (id: number) => {
    dispatch(productsById(id));
    setIsPress(id);
  };
  
  const ProductsBySubCategoryId = async (id: number) => {
    dispatch(productsById(id));
    setIsPress(id);
  };

  const filterProduct = (text: string) => {
    setSearch(text);
    const result = Products.filter((product: { name: string }) => {
      return product.name.toLowerCase().includes(text.toLowerCase());
    });
    return result;
  };

  useEffect(() => {
    ProductsByCategoryId(id);
    dispatch(loadSubCategoriesStart(id));
  }, [dispatch, id, name, search, appColors]);
  
  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <View style={[styles.header, { backgroundColor: appColors }]}>
        <View
          style={{ paddingTop: 20, position: "relative", top: 35, right: 10 }}
        >
          <TouchableWithoutFeedback onPress={() => navigation.openDrawer()}>
            <Image style={styles.sliders}
              source={require("../../assets/icons/sliders.png")} />
          </TouchableWithoutFeedback>
        </View>
        <SearchCom
          search={search}
          searchProduct={filterProduct}
          style={styles.searchInputContainer}
          onPress={function (): void {throw new Error("")}}/>
        <View>
          <TouchableWithoutFeedback onPress={Dash}>
            <Image
              style={styles.goBack}
              source={require("../../assets/imgtest/back.webp")}
            />
          </TouchableWithoutFeedback>
        </View>
      </View>
      <ScrollView horizontal={true} style={styles.SubCategoriesCard}
        showsHorizontalScrollIndicator={false}>
        <SubComponent
          appColors={appColors}
          name={"Tout"} isPress={isPress}
          id={id} onPress={() => ProductsByCategoryId(id)} />
       {subCategories.map((e: { id: number; name: string }) => (
         <SubComponent
           key={e.id}
           appColors={appColors}
           name={e.name.toLowerCase()}
           isPress={isPress} id={e.id} onPress={() => ProductsBySubCategoryId(e.id)} />
        ))}
      </ScrollView>
        <ProductCard
          appColors={appColors}
          product={Products} isPress={isPress} name={name} />
    </View>
  );
};

export { ProductList };
