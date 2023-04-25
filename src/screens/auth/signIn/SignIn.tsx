// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
import React, { FC, useEffect, useState } from "react";
import {
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
} from "react-native";
import { styles } from "../styles";
import { Button } from "../../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { signInStart } from "../../../redux/slice/signIn";
import { Colors } from "../../../constants/colors";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../../../navigation/app.navigator";

const { width } = Dimensions.get("window");

type signUpStackType = StackNavigationProp<RootStackParams, "MapDetailsStack">;

const SignIn: FC = () => {
  const [username, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation<signUpStackType>();
  const Welcome = () => navigation.navigate("Welcome");

  const dispatch = useDispatch();
  const submit = () => {
    dispatch(signInStart({ username, password }));
  };
useEffect(() => {console.log()},[dispatch])
  return (
    <View style={styles.Container}>
      <StatusBar translucent backgroundColor="transparent" />
      <TouchableWithoutFeedback onPress={Welcome}>
        <Image
          style={styles.goBack}
          resizeMode="contain"
          source={require("../../../assets/imgtest/back.webp")}
        />
      </TouchableWithoutFeedback>
      <Text style={[styles.Title, { position: "relative", top: "-6%" }]}>
        Se connecter
      </Text>
      <View style={styles.sousTitles}>
        <Text
          style={{
            color: Colors.white,
            fontFamily: "TTNorms-Regular",
            fontSize: width / 25,
            marginRight: "1%",
          }}
        >
          Vous étes nouveau ?
        </Text>
        <Text
          style={{
            color: Colors.white,
            fontFamily: "TTNorms-Bold",
            fontSize: width / 25,
          }}
          onPress={() =>
            navigation.navigate("MapDetailsStack", { screen: "SignUp" })
          }
        >
          Créer un Compte
        </Text>
      </View>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <Text style={styles.text}>Nom d'utilisateur/Email</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder=""
          value={username}
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <Text style={styles.text}>Mot de Passe</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder=""
          underlineColorAndroid="transparent"
          value={password}
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.msg}>Mot de passe oublié?</Text>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <Button
          onPress={submit}
          type={"login"}
          borderT={"login"}
          size={"xLarge"}
          label={"Se connecter"}
          borderSize={{}}
          rounded={{}}
        />
      </View>
    </View>
  );
};

export { SignIn };
