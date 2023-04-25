import React, { FC, useEffect } from "react";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { View, Text, StatusBar, Image, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { loadCategoriesStart } from "../redux/slice/categories";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../navigation/app.navigator";
import { RootState } from "../redux/store";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../components/styles";

type ProductStackType = StackNavigationProp<RootStackParams, "DrawerNavigator">;
export interface IUser {
  id: string;
  name: string;
}

const DrawerContent: FC = (props) => {
  const dispatch = useDispatch();
  const Categories = useSelector(
    (state: RootState) => state.categories.Categories.items
  );
  const navigation = useNavigation<ProductStackType>();

   const appColors = useSelector(
    (state: { product: { appColors: string; }; }) => state.product.appColors
  );

  const getData = async () => {
    dispatch(loadCategoriesStart());
  };
   useEffect(() => {
    getData();
  }, [dispatch]);
  return (
    <View style={{ flex: 1, justifyContent: "space-around" }}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={{
        height: 80, backgroundColor: "#ff0066",
        zIndex: 1
      }}>
        <Text style={styles.drawerHeaderText}>
          {"Nos Categories"}
        </Text>
      </View>
      <DrawerContentScrollView
        {...props}
        showsVerticalScrollIndicator={false}
      >
        {Categories.map((data: {
          custom_attributes: any; id: number; name: string;
        }) => ( 
              <View key={ data.id}
                style={styles.drawerContainer}>
                <View style={{ flexDirection: "row" }}>
                  <Image
                    source={require("../assets/icons/box.png")}
                    style={styles.drawerIcon} />
                <Pressable style={{ marginLeft: 20 }}
                  onPress={() => navigation.navigate("DrawerNavigator", {
                    screen: "ProductList",
                    params: {
                      id: data.id,
                      name: data.name,
                      appColors:  data.custom_attributes.find(
                      (attributes: { attribute_code: string }) =>
                      attributes.attribute_code === "category_color_banner"
                    ).value,
                    }
                  })}
                  >
                    <Text style={styles.drawerText}>
                      {data.name}
                    </Text>
                  </Pressable>
                </View>
              </View>
            )          
        )}
      </DrawerContentScrollView>
    </View>
  );
};

export { DrawerContent };
