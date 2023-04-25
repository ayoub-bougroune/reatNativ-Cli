// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
import React, { FC, useRef } from "react";
import {
  Text,
  Image,
  View,
} from "react-native";
import { styles } from "../screens/cart/styles";

export const Header: FC = () => {

  return (
    <View style={styles.header}>
      <Text 
          style={styles.headerTittle}>Mon Panier</Text>
      <Image 
         source={require('../assets/images/shopping-bag.png') }
         style={styles.CartIcon}
      />
    </View>
  );
};


