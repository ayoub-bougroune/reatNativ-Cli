// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
import React, { FC, useState, useEffect } from "react";
import {
  Text,
  View,
  StatusBar,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
} from "react-native";
import { styles } from "../styles";
import { Button } from "../../../components/Button";
import { Colors } from "../../../constants/colors";
import { signUpStart } from "../../../redux/slice/signUp";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../../../navigation/app.navigator";

const { width } = Dimensions.get("window");
type LocationStackType = StackNavigationProp<
  RootStackParams,
  "MapDetailsStack"
>;

const SignUp: FC = () => {
  const [customer, setRootObject] = useState({
    email: "",
    firstname: "",
    lastname: "",
    addresses: [
      {
        defaultShipping: true,
        defaultBilling: true,
        firstname: "bo",
        lastname: "ayoub",
        custom_attributes: [
          { attribute_code: "la", value: 33.5661848 },
          { attribute_code: "latitude", value: 44 },
        ],
        region: { region_code: "", region: "", region_id: 7 },
        postcode: "",
        street: ["", ""],
        city: "",
        telephone: "",
        countryId: "mA",
      },
    ],
  });
  const [password, setPassword] = useState("");

  const navigation = useNavigation<LocationStackType>();
  const Back = () => navigation.goBack();
  // const Welcome = () => navigation.navigate("Welcome");
  const Location = () =>
    navigation.navigate("MapDetailsStack", { screen: "Location" });
  const dispatch = useDispatch();
  const submit = () => {
    dispatch(signUpStart({ customer, password }));
  };

  //const telephone = customer.addresses[10].telephone;
  //const region = customer.addresses[0].region.region;
  //const city = customer.addresses[0].city;
  //const immeubleApartment = customer.addresses[0].street[0];

  useEffect(() => {
    console.log("object", customer.addresses[0].street[0]);
  }, [dispatch]);
  return (
    <ScrollView style={{ flex: 1, backgroundColor: Colors.appColor }}>
      <StatusBar translucent backgroundColor="transparent" />
      <TouchableWithoutFeedback onPress={Back}>
        <Image
          style={styles.goBack}
          resizeMode="contain"
          source={require("../../../assets/imgtest/back.webp")}
        />
      </TouchableWithoutFeedback>
      <View style={styles.viewMContainer}>
        <Text
          style={[
            styles.Title,
            { position: "relative", top: "-2%", left: "8%" },
          ]}
        >
          Créer un Compte
        </Text>
        <Text
          style={[
            styles.text,
            {
              fontSize: width / 23,
              right: "1%",
              width: "70%",
              paddingTop: "5%",
              paddingBottom: "5%",
            },
          ]}
        >
          Ou{" "}
          <Text
            style={{ fontFamily: "TTNorms-Bold" }}
            onPress={() => navigation.navigate("SignIn")}
          >
            connectez vous
          </Text>
          , pour effectuer vos achats
        </Text>
        <Text style={styles.text}>Nom *</Text>
    
        <View style={[styles.inputView, { width: "70%" }]}>
          <TextInput
            style={styles.TextInput}
            placeholderTextColor="#003f5c"
            value={customer.firstname}
            onChangeText={(text: string) =>
              setRootObject({ ...customer, firstname: text })
            }
          />
        </View>
        <Text style={styles.text}>Prenom *</Text>
        <View style={[styles.inputView, { width: "70%" }]}>
          <TextInput
            style={styles.TextInput}
            placeholder=""
            value={customer.lastname}
            placeholderTextColor="#003f5c"
            onChangeText={(text: string) =>
              setRootObject({ ...customer, lastname: text })
            }
          />
        </View>
        <Text style={styles.text}>Telephone *</Text>
        <View style={[styles.inputView, { width: "70%" }]}>
          <TextInput
            style={styles.TextInput}
            placeholder=""
            value={customer.addresses[0].telephone}
            placeholderTextColor="#003f5c"
            onChangeText={(text: string) =>
              setRootObject({
                ...customer,
                addresses: [
                  {
                    ...customer.addresses[0],
                    telephone: text,
                  },
                ],
              })
            }
          />
        </View>
        <Text style={styles.text}>Adresse *</Text>
        <View style={[styles.inputView, { width: "70%" }]}>
          <TextInput
            style={styles.TextInput}
            placeholder=""
            value={customer.addresses[0].region.region}
            placeholderTextColor="#003f5c"
            onChangeText={(text: string) =>
              setRootObject({
                ...customer,
                addresses: [
                  {
                    ...customer.addresses[0],
                    region: {
                      ...customer.addresses[0].region,
                      region: text,
                    },
                  },
                ],
              })
            }
          />
        </View>
        <View style={styles.mapLocations}>
          <Text style={styles.TexMessage}>
            choissisez votre géolocalisation ici
          </Text>
          <Image
            source={require("../../../assets/icons/mss.png")}
            style={styles.message}
          />
          <TouchableWithoutFeedback onPress={Location}>
            <Image
              source={require("../../../assets/icons/flesh.png")}
              resizeMode={"contain"}
              style={[styles.mapIcon, { transform: [{ rotate: "-45deg" }] }]}
            />
          </TouchableWithoutFeedback>
        </View>
        <Text style={styles.text}>Ville *</Text>
        <View style={[styles.inputView, { width: "70%" }]}>
          <TextInput
            style={styles.TextInput}
            placeholder=""
            value={customer.addresses[0].city}
            placeholderTextColor="#003f5c"
            onChangeText={(text: string) =>
              setRootObject({
                ...customer,
                addresses: [
                  {
                    ...customer.addresses[0],
                    city: text,
                  },
                ],
              })
            }
          />
        </View>
        <Text style={styles.text}>Immeuble/Appartement *</Text>
        <View style={[styles.inputView, { width: "70%" }]}>
          <TextInput
            style={styles.TextInput}
            placeholder=""
            //  value={JSON.stringify(customer.addresses[0].street)}
            value={customer.addresses[0].postcode}
            placeholderTextColor="#003f5c"
            onChangeText={(text: string) =>
              setRootObject({
                ...customer,
                addresses: [
                  {
                    ...customer.addresses[0],
                    postcode: text,
                  },
                ],
              })
            }
          />
          {/* onChangeText={(text: string | string[]) =>
            //   setRootObject({
            //     ...customer,
            //     addresses: [{
            //       ...customer.addresses[0],
            //       street: [JSON.stringify(text)]
            //     }]
            //   })} */}
        </View>
        <Text style={styles.text}>Email *</Text>
        <View style={[styles.inputView, { width: "70%" }]}>
          <TextInput
            style={styles.TextInput}
            placeholder=""
            value={customer.email}
            placeholderTextColor="#003f5c"
            onChangeText={(text: string) =>
              setRootObject({
                ...customer,
                email: text,
              })
            }
          />
        </View>
        <Text style={styles.text}>Mot de passe *</Text>
        <View style={[styles.inputView, { width: "70%" }]}>
          <TextInput
            style={styles.TextInput}
            placeholder=""
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <Text style={[styles.text, { width: width / 2.1 }]}>
          Confirmer le mot de passe *
        </Text>
        <View style={[styles.inputView, { width: "70%" }]}>
          <TextInput
            style={styles.TextInput}
            placeholder=""
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View style={styles.buttonContainer}>
           <Button
            onPress={submit}
            type={"register"}
            borderT={"register"}
            size={"large"}
            label={"Créer un Compte"}
            borderSize={{}}
            rounded={{}}
          /> 
        </View>
      </View> 
    </ScrollView>
  );
};

export { SignUp };
