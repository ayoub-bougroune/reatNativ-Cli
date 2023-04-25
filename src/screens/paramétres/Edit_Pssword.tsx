// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
import React, { FC, useState } from "react";
import { Text, View, Image, ScrollView } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../../constants/colors";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IEditSettings {}
// eslint-disable-next-line @typescript-eslint/no-empty-interface

export const EditSettings: FC<IEditSettings> = () => {
  const navigation = useNavigation();
  const Back = () => navigation.goBack();
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
            fontFamily: "TTNorms-Bold",
            position: "relative",
            left: 55,
            top: 10,
          }}
        >
          Changer le mot de passe...
        </Text>
      </View>
      <ScrollView style={{ flexDirection: "column" }}>
        <Input
          label="Mot de passe- actuel"
          error={errors.prenom}
          imgName={""}
          props={""}
          onFocus={async () => handleError("", "Prénom")}
        />
        <Input
          label="Nouveau mot de passe"
          error={errors.telephone}
          imgName={""}
          props={""}
          onFocus={async () => handleError("", "Telephone")}
        />
        <Input
          label="Confirmer le mot de passe"
          error={errors.Adresse}
          imgName={""}
          props={""}
          onFocus={async () => handleError("", "Adresse")}
        />
         
        <Button
          type={"Edit_adresses"}
          borderT={"Edit_adresses"}
          size={"medium"}
          label={"Changer le mot de passe"}
          onPress={""}
          borderSize={""}
          rounded={""}
        />
      </ScrollView>
    </View>
  );
};
