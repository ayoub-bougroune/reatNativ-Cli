// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
import React, { FC, useRef } from "react";
import {
  StyleSheet,
  Modal,
  Animated,
  StatusBar,
  Pressable,
} from "react-native";

type IModel = {
  children: JSX.Element;
  ClickOut: () => void;
};

export const ModalPopup: FC<IModel> = ({ children, ClickOut }) => {
  const translation = useRef(new Animated.Value(0)).current;

  return (
    <Modal transparent visible={true}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0.5)" />
      <Pressable onPress={ClickOut} style={styles.modalBackGround}>
        <Animated.View
          style={[
            styles.modalContainer,
            { transform: [{ translateX: translation }] },
          ]}
        >
          {children}
        </Animated.View>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackGround: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "70%",
    height: 130,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    position: "absolute",
    right: 80,
    flexDirection: "column",
    justifyContent: "center",
    elevation: 20,
    alignItems: "center",
  },
});
