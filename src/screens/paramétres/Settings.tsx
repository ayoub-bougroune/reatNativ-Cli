// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
import React, { FC, useState } from "react";
import { Text, View, Image, Switch } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../../constants/colors";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ISettings {}
// eslint-disable-next-line @typescript-eslint/no-empty-interface

export const Settings: FC<ISettings> = () => {
  const navigation = useNavigation();
  const Back = () => navigation.goBack();
  const EditSettings = () => navigation.navigate("EditSettings");
  const [isSwitch, setIsSwitch] = useState(false);
  const toggleSwitch = () => setIsSwitch((previousState) => !previousState);

  return (
    <View>
      <View style={styles.header}>
        <View style={styles.BackView}>
          <TouchableWithoutFeedback onPress={Back}>
            <Image
              style={styles.goBack}
              resizeMode="contain"
              source={require("../../assets/imgtest/back.webp")}
            />
          </TouchableWithoutFeedback>
        </View>
        <Text style={styles.headerText}>Mes parametres</Text>
        <Image
          source={require("../../assets/icons/settings.png")}
          style={styles.headerImg}
          resizeMode="contain"
        />
      </View>
      <View style={styles.content}>
        <View style={styles.contentView}>
          <TouchableWithoutFeedback
            onPress={EditSettings}
            style={styles.contentSlides}
          >
            <Image
              resizeMode="contain"
              style={[styles.contentImg, { width: 12 }]}
              source={require("../../assets/icons/ChP.png")}
            />
            <Text style={styles.contentText}>Changer le mot de passe</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback style={styles.contentSlides}>
            <Image
              resizeMode="contain"
              style={styles.contentImg}
              source={require("../../assets/icons/user.png")}
            />
            <Text style={styles.contentText}>Êtes-vous un adulte ?</Text>
          </TouchableWithoutFeedback>
          <View style={styles.switchS}>
            <Switch
              trackColor={{ false: Colors.white, true: Colors.accent }}
              thumbColor={isSwitch ? Colors.white : Colors.accent}
              ios_backgroundColor={Colors.black}
              style={{ transform: [{ scaleX: 0.95 }, { scaleY: 0.6 }] }}
              onValueChange={toggleSwitch}
              value={isSwitch}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
