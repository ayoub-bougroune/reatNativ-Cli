// eslint-disable-next-line no-unused-vars
import React, { FC } from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./styles"

export interface IB {
  toggleModal: () => void;
  AddAdresses: () => void;
  onPress: () => void;
}

export const BtnSheet: FC<IB> = ({  toggleModal, AddAdresses,  onPress }) => {    
    return (
        <View style={styles.modalContainer}>
          <View style={styles.ContainerB}>
            <Text style={{ fontSize: 17, position: "relative", top: -10 }}>
              Adresses
            </Text>
          </View>
          <View style={styles.ContainerB}>
            <Image
              style={styles.tinySuccessLogo}
              source={require("../assets/icons/success_win_done_mark_icon_145928.png")}
            />
            <Text
              style={{ fontSize: 17, paddingLeft: 40 }}
              onPress={toggleModal}
            >
              Choisir une adresse
            </Text>
          </View>
          <View style={styles.ContainerB}>
            <Image
              style={styles.tinyPlusLogo}
              source={require("../assets/icons/Plus_icon-icons.com_71848.png")}
            />
            <Text
              style={{ fontSize: 17, paddingLeft: 36 }}
              onPress={AddAdresses}
            >
              Ajouter une adresse
            </Text>
          </View>
          <View style={styles.ContainerB}>
            <Image
              style={styles.tinyXLogo}
              source={require("../assets/icons/letterx_87521.png")}
            />
            <Text
              style={{ fontSize: 17, paddingLeft: 48 }}
              onPress={onPress}
            >
              Annuler
            </Text>
          </View>
        </View>
  )
}






