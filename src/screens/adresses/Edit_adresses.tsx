import React, { FC, useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../../constants/colors";
import { Input } from "../../components/Input";
import { Radio } from "../../components/Radio";
import { Button } from "../../components/Button";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Iadresse {}

// eslint-disable-next-line no-empty-pattern
const EditAdresses: FC<Iadresse> = ({}) => {
  const navigation = useNavigation();
  const Back = () => navigation.goBack();
  const Location = () => navigation.navigate("Location");
  const [checked, setChecked] = useState(false);
  const [errors, setErrors] = useState({});

  const handleError = (error: string, input: any) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };

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
            fontSize: 23,
            fontFamily: "TTNorms-Regular",
            position: "relative",
            left: 55,
            top: 10,
          }}
        >
          Modifier l'adresse
        </Text>
      </View>
      <ScrollView style={{ flexDirection: "column" }}>
        <Input
          label="Nom *"
          error={errors.nom}
          imgName={""}
          props={""}
          onFocus={async () => handleError("", "nom")}
        />
        <Input
          label="Prénom *"
          error={errors.prenom}
          imgName={""}
          props={""}
          onFocus={async () => handleError("", "Prénom")}
        />
        <Input
          label="Telephone *"
          error={errors.telephone}
          imgName={""}
          props={""}
          onFocus={async () => handleError("", "Telephone")}
        />
        <Text style={[styles.TexMessage, { top: 327 }]}>
          choissisez votre géolocalisation ici
        </Text>
        <Image
          source={require("../../assets/icons/mss.png")}
          style={[styles.message, { top: 320 }]}
        />
        <Input
          label="Adresse *"
          error={errors.Adresse}
          imgName={""}
          props={""}
          onFocus={async () => handleError("", "Adresse")}
        />
        <TouchableWithoutFeedback onPress={Location}>
          <Image
            source={require("../../assets/icons/flesh.png")}
            resizeMode={"contain"}
            style={{
              width: 23,
              height: 25,
              position: "relative",
              left: 305,
              top: -53,
              transform: [{ rotate: "-45deg" }],
            }}
          />
        </TouchableWithoutFeedback>
        <Input
          label="Immeuble/Appartement"
          error={errors.immeubleAppartment}
          imgName={""}
          props={""}
          onFocus={async () => handleError("", "Immeuble/Appartement")}
        />
        <Input
          label="Ville *"
          error={errors.ville}
          imgName={""}
          props={""}
          onFocus={async () => handleError("", "Ville")}
        />
        <Radio
          value={checked}
          changeValue={() => setChecked(!checked)}
          leftImage={require("../../assets/icons/success.png")}
          text="Adresse de livraison principale"
        />
        <Button
          type={"Edit_adresses"}
          borderT={"Edit_adresses"}
          size={"large"}
          label={"Modifier l'adresse"}
          onPress={""}
          borderSize={""}
          rounded={""}
        />
      </ScrollView>
    </View>
  );
};

export { EditAdresses };
