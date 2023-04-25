import React, { FC } from "react";
import { Image, TextInput, Pressable } from "react-native";
import { Colors } from "../constants/colors";

type SearchTypes = {
  search: string;
  searchProduct: (text: string) => void;
  onPress: () => void;
  style: any;
};
export const SearchCom: FC<SearchTypes> = ({
  search,
  searchProduct,
  onPress,
  style,
}) => {
  // const dispatch = useDispatch();

  //   const searchFilter = async (text: string) => {
  //            // dispatch(search.SearchCategoriesStart(text))
  //   }
  return (
    <Pressable onPress={onPress} style={style}>
      <Image
        source={require("../assets/imgtest/search.png")}
        style={{
          position: "relative",
          top: 0,
          left: 20,
          paddingVertical: 10,
          width: 25,
          height: 25,
          tintColor: "#fff",
        }}
      />
      <TextInput
        placeholder="Cherche ton MiniBasket... "
        placeholderTextColor={Colors.white}
        underlineColorAndroid="transparent"
        value={search}
        onChangeText={searchProduct}
        style={{
          paddingHorizontal: 20,
          fontSize: 17,
          fontFamily: "TTNorms-Regular",
          marginLeft: 20,
          color: Colors.white,
        }}
      />
    </Pressable>
  );
};
