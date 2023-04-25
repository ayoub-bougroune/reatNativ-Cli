import React, { FC, useState } from "react";
import {
  Text,
  View,
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../../constants/colors";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ICommandes {}

const StatusCmd = [
  {
    id: 1,
    name: "Commandes",
  },
  {
    id: 2,
    name: "En cours",
  },
  {
    id: 3,
    name: "Terminée",
  },
  {
    id: 4,
    name: "Annulée",
  },
];
// eslint-disable-next-line no-empty-pattern
const Commandes: FC<ICommandes> = ({}) => {
  const navigation = useNavigation();
  const [Status, setStatus] = useState("Commandes");
  const setStatusFilter = (status: React.SetStateAction<string>) => {
    setStatus(status);
  };
  return (
    <View style={{ backgroundColor: Colors.appColor, height: "100%" }}>
      <View style={styles.header}>
        <Text
          style={{
            color: Colors.white,
            fontSize: 21,
            fontFamily: "TTNorms-Bold",
            position: "relative",
            left: 10,
            top: 10,
          }}
        >
          Mes commandes
        </Text>
        <Image
          source={require("../../assets/icons/clipboard.png")}
          style={{
            tintColor: Colors.white,
            position: "relative",
            left: 25,
            top: 12,
            width: 20,
          }}
        />
      </View>
      <ScrollView
        horizontal={true}
        style={{
          width: "100%",
          height: 70,
          position: "absolute",
          top: 100,
          zIndex: 1,
        }}
        showsHorizontalScrollIndicator={false}
      >
        {StatusCmd.map((e) => (
          <TouchableOpacity
            key={e.id}
            onPress={() => setStatusFilter(e.name)}
            style={[styles.TabRadio, Status === e.name && styles.btnTabActive]}
          >
            <Text
              style={[styles.btnText, Status === e.name && styles.btnTabActive]}
            >
              {e.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          top: 80,
        }}
      >
        <Text
          style={{
            color: Colors.white,
            fontFamily: "TTNorms-Bold",
            fontSize: 18,
          }}
        >
          Aucune commande sous cette section.
        </Text>
      </View>
    </View>
  );
};

export { Commandes };
