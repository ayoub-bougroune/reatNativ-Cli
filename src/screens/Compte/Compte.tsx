import React, { FC } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { logout } from "../../redux/slice/signIn";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../../constants/colors";
import ImagePicker from "react-native-image-crop-picker";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ICompte {}
// eslint-disable-next-line @typescript-eslint/no-empty-interface

const Compte: FC<ICompte> = () => {
  const navigation = useNavigation();
  const Commandes = () => navigation.navigate("Commandes");
  const Adresses = () => navigation.navigate("Adresses");
  const Settings = () => navigation.navigate("Settings");
  const dispatch = useDispatch();

  const OpenGalleryCamera = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      console.log(image);
    });
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      console.log(image);
    });
  };

  const submit = () => {
    dispatch(logout());
  };
  return (
    <View>
      <View style={styles.header}>
        <Text
          style={{
            color: Colors.white,
            fontSize: 22,
            fontFamily: "TTNorms-Bold",
            position: "relative",
            left: 15,
            top: 10,
          }}
        >
          Mon compte
        </Text>
        <Image
          source={require("../../assets/icons/user.png")}
          style={{
            tintColor: Colors.white,
            position: "relative",
            left: 35,
            top: 12,
            width: 20,
          }}
        />
        <TouchableOpacity onPress={submit}>
          <Image
            resizeMode="contain"
            source={require("../../assets/imgtest/logaut.png")}
            style={{
              tintColor: Colors.white,
              width: 20,
              height: 20,
              position: "relative",
              left: 210,
              top: 12,
            }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: "100%",
          flexDirection: "column",
          backgroundColor: Colors.appColor,
        }}
      >
        <View>
          <View
            style={{
              paddingTop: 20,
              marginLeft: 40,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              style={{ width: 120, height: 120 }}
              onPress={OpenGalleryCamera}
            >
              <Image
                resizeMode="contain"
                style={styles.avatar}
                source={require("../../assets/images/default-avatar.jpg")}
              />
            </TouchableOpacity>
            <View style={{ flexDirection: "column" }}>
              <Text
                style={{
                  color: Colors.white,
                  fontSize: 18,
                  fontFamily: "TTNorms-Bold",
                  position: "relative",
                  right: 30,
                }}
              >
                Ayoub Bougroune
              </Text>
              <View style={{ flexDirection: "row", margin: 2 }}>
                <Image
                  resizeMode="contain"
                  style={{
                    width: 15,
                    height: 20,
                    tintColor: Colors.white,
                    position: "relative",
                    right: 35,
                  }}
                  source={require("../../assets/icons/smartphone.png")}
                />
                <Text
                  style={{
                    color: Colors.white,
                    fontSize: 17,
                    marginRight: 15,
                    fontFamily: "TTNorms-Regular",
                    position: "relative",
                    right: 30,
                  }}
                >
                  0627323405
                </Text>
              </View>
              <View style={{ flexDirection: "row", marginLeft: 5, width: 241 }}>
                <Image
                  resizeMode="contain"
                  style={{
                    tintColor: Colors.white,
                    width: 12,
                    height: 12,
                    position: "relative",
                    right: 36,
                  }}
                  source={require("../../assets/icons/map-pin.png")}
                />
                <Text
                  style={{
                    color: Colors.white,
                    fontSize: 14,
                    fontFamily: "TTNorms-Regular",
                    position: "relative",
                    right: 30,
                  }}
                >
                  exemple@gmail.com,Lot iris rue Oued ZIZ
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "flex-start",
            marginLeft: 40,
            position: "relative",
            top: -35,
          }}
        >
          <TouchableWithoutFeedback
            onPress={Commandes}
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
              height: 55,
              borderBottomWidth: 1,
              borderBottomColor: Colors.black,
            }}
          >
            <Image
              resizeMode="contain"
              style={{
                tintColor: Colors.white,
                position: "relative",
                left: 10,
              }}
              source={require("../../assets/icons/clipboard.png")}
            />
            <Text
              style={{
                fontSize: 17,
                fontFamily: "TTNorms-Bold",
                position: "relative",
                left: 10,
                color: Colors.white,
                marginLeft: 10,
              }}
            >
              Mes commandes
            </Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={Adresses}
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
              height: 55,
              borderBottomWidth: 0.6,
              borderBottomColor: Colors.black,
            }}
          >
            <Image
              resizeMode="contain"
              style={{
                tintColor: Colors.white,
                position: "relative",
                left: 10,
              }}
              source={require("../../assets/icons/map-pin.png")}
            />
            <Text
              style={{
                fontSize: 17,
                fontFamily: "TTNorms-Bold",
                position: "relative",
                left: 10,
                color: Colors.white,
                marginLeft: 10,
              }}
            >
              Mes adresses
            </Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={Settings}
            style={{
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              height: 55,
              borderBottomWidth: 0.6,
              borderBottomColor: Colors.black,
            }}
          >
            <Image
              resizeMode="contain"
              style={{
                tintColor: Colors.white,
                position: "relative",
                left: 10,
              }}
              source={require("../../assets/icons/settings.png")}
            />
            <Text
              style={{
                fontSize: 17,
                fontFamily: "TTNorms-Bold",
                position: "relative",
                left: 10,
                color: Colors.white,
                marginLeft: 10,
              }}
            >
              Mes paramétres
            </Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            style={{
              flexDirection: "row",
              width: "100%",
              height: 55,
              alignItems: "center",
              borderBottomWidth: 0.6,
              borderBottomColor: Colors.black,
            }}
          >
            <Image
              resizeMode="contain"
              style={{
                tintColor: Colors.white,
                position: "relative",
                left: 10,
              }}
              source={require("../../assets/icons/file-text.png")}
            />
            <Text
              style={{
                fontSize: 17,
                fontFamily: "TTNorms-Bold",
                position: "relative",
                left: 10,
                color: Colors.white,
                marginLeft: 10,
              }}
            >
              CGU
            </Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            style={{
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              height: 55,
              borderBottomWidth: 0.6,
              borderBottomColor: Colors.black,
            }}
          >
            <Image
              resizeMode="contain"
              style={{
                tintColor: Colors.white,
                position: "relative",
                left: 10,
              }}
              source={require("../../assets/icons/help-circle.png")}
            />
            <Text
              style={{
                fontSize: 17,
                fontFamily: "TTNorms-Bold",
                position: "relative",
                left: 10,
                color: Colors.white,
                marginLeft: 10,
              }}
            >
              Aides
            </Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            style={{
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              height: 55,
              borderBottomWidth: 0.6,
              borderBottomColor: Colors.black,
            }}
          >
            <Image
              resizeMode="contain"
              style={{
                tintColor: Colors.white,
                position: "relative",
                left: 10,
              }}
              source={require("../../assets/icons/clipboard.png")}
            />
            <Text
              style={{
                fontSize: 17,
                fontFamily: "TTNorms-Bold",
                position: "relative",
                left: 10,
                color: Colors.white,
                marginLeft: 10,
              }}
            >
              Version
            </Text>
            <View
              style={{ flexDirection: "row", position: "relative", left: 165 }}
            >
              <Text
                style={{
                  fontSize: 17,
                  color: Colors.white,
                  fontFamily: "TTNorms-Bold",
                }}
              >
                1.1.7
                <Text style={{ color: Colors.warning }}>#62</Text>
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
};

export default Compte;
