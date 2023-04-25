import React, { FC, useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  Switch,
} from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../../constants/colors";
import { StackNavigationProp } from "@react-navigation/stack";
import { CompteStackParams } from "../../navigation/main.tab.navigator";

type AddressStackType = StackNavigationProp<CompteStackParams, "AddAdresses">;

const Adresses: FC = ({}) => {
  const navigation = useNavigation<AddressStackType>();
  const Back = () => navigation.goBack();
  const AddAdresses = () => navigation.navigate("AddAdresses");
  const EditAdresses = () => navigation.navigate("EditAdresses");
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={{ backgroundColor: Colors.appColor, height: "100%" }}>
      <View style={styles.header}>
        <TouchableWithoutFeedback onPress={Back}>
          <Image
            style={styles.goBack}
            source={require("../../assets/imgtest/back.webp")}
          />
        </TouchableWithoutFeedback>
        <Text
          style={{
            color: Colors.white,
            fontSize: 21,
            fontFamily: "TTNorms-Bold",
            position: "relative",
            left: 55,
            top: 10,
          }}
        >
          Mes adresses
        </Text>
        <Image
          source={require("../../assets/icons/map-pin.png")}
          style={{
            tintColor: Colors.white,
            position: "relative",
            left: 65,
            top: 10,
            width: 20,
          }}
        />
        <TouchableWithoutFeedback onPress={AddAdresses} style={{}}>
          <Image
            resizeMode="contain"
            style={{
              width: 40,
              height: 40,
              tintColor: Colors.white,
              position: "relative",
              left: 200,
              top: 15,
            }}
            source={require("../../assets/icons/Plus_icon-icons.com_71848.png")}
          />
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.card}>
        <View style={styles.CardHeader}>
          <Text style={styles.CardTextHeader}>Mon adresse de livraison</Text>
        </View>
        <View style={styles.CardContent}>
          <Text style={styles.CardContentTitle}>ayoub bougroune</Text>
          <Text style={styles.CardTextContent}>0627323405</Text>
          <Text style={styles.CardTextContent}>
            ayoubbougroune18@gmail.com ,lot iris rue Oued ZIZ NR 14
          </Text>
          <Text style={styles.CardTextContent}>ayoubbougroune18@gmail.com</Text>
        </View>
        <View style={styles.CardFooter}>
          <TouchableWithoutFeedback onPress={EditAdresses}>
            <View style={styles.FooterButton}>
              <Text style={styles.FooterText}> Mettre à jour</Text>
              <Image
                style={styles.FooterImage}
                source={require("../../assets/icons/mettre_ajour.png")}
              />
            </View>
          </TouchableWithoutFeedback>
          <View style={styles.toggleView}>
            <Text style={styles.FooterToggleText}>Principale</Text>
            <Switch
              trackColor={{ false: "#767577", true: Colors.boissons }}
              thumbColor={isEnabled ? Colors.darkBlue : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export { Adresses };
