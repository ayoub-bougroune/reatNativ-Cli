// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
import React from "react";
import { Pressable, Text } from "react-native";
import { Colors } from "../constants/colors";
import { ScaledSheet } from "react-native-size-matters";

const SIZES = ["small", "medium", "large", "xLarge"];
const TYPES = [
  "Se_connecter",
  "Creer_compte",
  "Consulter",
  "login",
  "register",
  "Button_Panier",
  "achats",
  "Edit_adresses",
  "Add_adresses",
];
const TYPESBORDERS = [
  "Se_connecter",
  "Creer_compte",
  "Consulter",
  "login",
  "register",
  "Button_Panier",
  "achats",
  "Edit_adresses",
  "Add_adresses",
];
const BORDERS = ["small", "medium", "large"];
const ROUNDED = ["small", "medium", "large"];

export const Button = ({
  onPress,
  type,
  borderT,
  borderSize,
  size,
  label,
  rounded,
}: {
  onPress: any;
  type: any;
  borderT: any;
  borderSize: any;
  size: any;
  label: any;
  rounded: any;
}) => {
  const btnSize = SIZES.includes(size) ? size : "small";
  const btnType = TYPES.includes(type) ? type : "Se_connecter";
  const borderType = TYPESBORDERS.includes(borderT) ? borderT : "Consulter";
  const btnRound = ROUNDED.includes(rounded) ? rounded : "small";
  const brdSize = BORDERS.includes(borderSize) ? borderSize : "small";

  const styles = ScaledSheet.create({
    btnStyle: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height:
        btnSize === "large"
          ? "85%"
          : btnSize === "medium"
          ? "30%"
          : btnSize === "xLarge"
          ? "95%"
          : "",
      width:
        btnSize === "large"
          ? "70%"
          : btnSize === "medium"
          ? "60%"
          : btnSize === "xLarge"
          ? "65%"
          : "",
      borderRadius:
        btnRound === "small"
          ? "8@s"
          : btnRound === "medium"
          ? "5@s"
          : btnRound === "large"
          ? "25@s"
          : "",
      margin: "5@mvs",
      borderWidth:
        brdSize === "small" ? "2@s" : brdSize === "medium" ? "15@s" : "10@s",
      borderColor:
        borderType === "Se_connecter"
          ? Colors.appColor
          : borderType === "Creer_compte"
          ? Colors.appColor
          : borderType === "Consulter"
          ? Colors.success
          : borderType === "login"
          ? Colors.white
          : borderType === "register"
          ? Colors.white
          : borderType === "Button_Panier"
          ? Colors.white
          : borderType === "achats"
          ? Colors.white
          : borderType === "Edit_adresses"
          ? Colors.white
          : borderType === "Add_adresses"
          ? Colors.white
          : "",

      backgroundColor:
        btnType === "Se_connecter"
          ? Colors.white
          : btnType === "Creer_compte"
          ? Colors.appColor
          : btnType === "Consulter"
          ? Colors.white
          : btnType === "login"
          ? Colors.appColor
          : btnType === "register"
          ? Colors.appColor
          : btnType === "Button_Panier"
          ? Colors.appColor
          : btnType === "achats"
          ? Colors.white
          : btnType === "Edit_adresses"
          ? Colors.appColor
          : btnType === "Add_adresses"
          ? Colors.white
          : "",
    },
    textStyle: {
      color:
        btnType === "Se_connecter"
          ? Colors.appColor
          : btnType === "Creer_compte"
          ? Colors.white
          : btnType === "Consulter"
          ? Colors.success
          : btnType === "login"
          ? Colors.white
          : btnType === "register"
          ? Colors.white
          : btnType === "Button_Panier"
          ? Colors.white
          : btnType === "achats"
          ? Colors.success
          : btnType === "Edit_adresses"
          ? Colors.white
          : btnType === "Add_adresses"
          ? Colors.white
          : "",
      fontFamily: "TTNorms-Bold",
      fontSize:
        btnType === "Se_connecter"
          ? "25@mvs"
          : btnType === "Creer_compte"
          ? "25@mvs"
          : btnType === "Consulter"
          ? "25@mvs"
          : btnType === "login"
          ? "20@vs"
          : btnType === "register"
          ? "22@vs"
          : btnType === "Button_Panier"
          ? "12@s"
          : btnType === "achats"
          ? "17@vs"
          : btnType === "Edit_adresses"
          ? "17@vs"
          : btnType === "Add_adresses"
          ? "17@vs"
          : "",
    },
  });

  return (
    <Pressable style={styles.btnStyle} onPress={onPress}>
      <Text style={styles.textStyle}>{label}</Text>
    </Pressable>
  );
};
