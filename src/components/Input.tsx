// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../constants/colors";
export const Input = ({
  label,
  error,
  password,
  onFocus,
  ...props
}: {
  label: any;
  imgName: any;
  error: any;
  password: any;
  onFocus: () => {};
  style: any;
  props: any;
}) => {
  const [hidePassword, setHidePassword] = useState(password);
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <View
        style={[
          styles.inputView,
          {
            borderColor: error
              ? Colors.red
              : isFocused
              ? Colors.darkBlue
              : Colors.light,
            alignItems: "center",
          },
        ]}
      >
        <TextInput
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={true}
          style={styles.TextInput}
          {...props}
        />
        {password && (
          <Image
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? "eye-outline" : "eye-off-outline"}
            style={{ color: Colors.darkBlue, fontSize: 22 }}
          />
        )}
      </View>
      {error && (
        <Text style={{ marginTop: 7, color: Colors.red, fontSize: 12 }}>
          {error}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    marginVertical: 5,
    fontSize: 16,
    color: Colors.light,
    position: "relative",
    left: 10,
    fontFamily: "TTNorms-Regular",
  },
  inputContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    position: "relative",
    left: 50,
  },
  inputView: {
    backgroundColor: Colors.white,
    borderRadius: 9,
    borderWidth: 1,
    width: "70%",
    height: 48,
    borderColor: Colors.black,
    margin: 15,
  },
  TextInput: {
    flex: 1,
    padding: 10,
    width: "85%",
    height: "100%",
    color: Colors.black,
    fontFamily: "TTNorms-Regular",
  },
});
