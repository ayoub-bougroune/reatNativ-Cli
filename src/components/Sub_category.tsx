/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "react-native-gesture-handler";
import { Colors } from "../constants/colors";
import {Text, ScrollView, Pressable} from "react-native";
import { styles } from "../screens/product/styles";
import { Item } from "../types/product";

type SubCategory = {
  appColors: string;
  name: string;
  isPress: number;
  id: number;
  onPress: (id: number) => void;
};
const SubComponent: FC<SubCategory> =
    ({
        appColors,
        name,
        isPress,
        id,
        onPress,
    }) => {

    return (
        <Pressable
          onPress={() => onPress(id)}
          style={[
            styles.TabRadio,
            {
              backgroundColor: isPress === id ? Colors.white : appColors,
            },
          ]}
        >
          <Text
            style={[
              styles.SubName,
              {
                color: isPress === id ? appColors : Colors.white,
              },
            ]}
          >
            {name}
          </Text>
        </Pressable>
  );
};

export { SubComponent };
