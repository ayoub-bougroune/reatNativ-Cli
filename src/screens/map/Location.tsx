// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
import React, { FC, useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  TextInput,
} from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { SearchCom } from "../../components/SearchCom";
import { Colors } from "../../constants/colors";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps"; // remove PROVIDER_GOOGLE import if not using Google Maps

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ILocation {}

// eslint-disable-next-line no-empty-pattern
const Location: FC<ILocation> = ({}) => {
  const [Search, setSearch] = useState("");
  const navigation = useNavigation();
  const Back = () => navigation.goBack();

  const searchFilter = (text: React.SetStateAction<string>) => {
    if (text) {
      // dispatch(search.SearchCategoriesStart(text))
      setSearch(text);
    } else {
      setSearch("");
    }
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
        <Text style={styles.title}>Localisation</Text>
        <SearchCom search={Search} searchProduct={searchFilter} style={styles.searchInputContainer} onPress={function (): void {
          throw new Error("")}} />     
      </View>
      <View style={styles.card}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 33.589886,
            longitude: -7.603869,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        ></MapView>
      </View>
    </View>
  );
};

export { Location };
