// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../constants/colors";

export const Radio = ({
  value,
  changeValue,
  leftImage,
  text,
}: {
  value: any;
  changeValue: any;
  text: any;
}) => {
  return (
    <View style={styles.btn}>
      <TouchableOpacity onPress={changeValue}>
        <Image source={leftImage} style={styles.leftImg} resizeMode="contain" />

        <Text style={styles.txt}>{text}</Text>

        {value ? (
          <Image
            source={require("../assets/icons/success.png")}
            style={styles.tick}
            resizeMode="contain"
          />
        ) : null}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    flexDirection: "row",
    marginBottom: 20,
    backgroundColor: Colors.accent,
    width: "74%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 75,
    margin: 10,
  },
  leftImg: {
    position: "absolute",
    right: 212,
    height: 28,
    top: -3,
    width: 28,
    borderRadius: 15,
    marginRight: 30,
    tintColor: Colors.white,
    borderColor: Colors.black,
    borderWidth: 0.5,
    backgroundColor: Colors.white,
  },
  txt: {
    fontSize: 18,
    fontFamily: "TTNorms-Regular",
    color: Colors.white,
    position: "relative",
    left: 12,
    top: 0,
  },
  tick: {
    position: "absolute",
    right: 212,
    height: 28,
    top: -3,
    width: 28,
    borderRadius: 15,
    marginRight: 30,
    tintColor: Colors.white,
    borderColor: Colors.white,
    borderWidth: 1,
    backgroundColor: Colors.appColor,
    zIndex: 1,
  },
  tickText: {
    fontSize: 17,
    fontFamily: "TTNorms-Regular",
    color: Colors.black,
    position: "relative",
    left: 5,
    top: -11,
    zIndex: 1,
  },
});
