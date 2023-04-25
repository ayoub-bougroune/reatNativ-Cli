// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
import React from "react";
import {
  GestureResponderEvent,
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Colors } from "../constants/colors";

export const ChooseAddress = ({
  onPress,
}: {
  // eslint-disable-next-line no-unused-vars
  onPress: (_event: GestureResponderEvent) => void;
}) => {
  return (
    <View style={{}}>
      <View
        style={[
          styles.content,
          {
            borderTopWidth: 1,
            borderTopColor: Colors.black,
            borderBottomWidth: 1,
            borderBottomColor: Colors.black,
          },
        ]}
      >
        <Text
          style={{ fontFamily: "TTNorms-Regular", color: Colors.appColor }}
        >
          exemple@gmail.com.............
        </Text>
        <Image
          style={{ width: 20, height: 20, tintColor: Colors.appColor }}
          resizeMode="contain"
          source={require("../assets/icons/success_win_done_mark_icon_145928.png")}
        />
      </View>
      <View style={styles.content}>
        <View style={styles.footer}>
          <TouchableWithoutFeedback onPress={onPress}>
            <Text style={styles.text}>Annuler</Text>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.footer}>
          <TouchableWithoutFeedback onPress={onPress}>
            <Text style={styles.text}>OK</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flexDirection: "row",
    width: "100%",
    height: 45,
    justifyContent: "space-around",
    position: "absolute",
    left: -120,
    top: 20,
    alignItems: "center",
  },
  text: {
    fontSize: 17,
    fontFamily: "TTNorms-Regular",
    color: Colors.appColor,
  },
});
