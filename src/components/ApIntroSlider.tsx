// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
import React, { FC } from "react";
import { Text, View, Image, StatusBar, Dimensions } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { Colors } from "../constants/colors";
import { Button } from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import { data } from "../utils/appintro_data";
import { ScaledSheet } from "react-native-size-matters";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../navigation/app.navigator";

const { width, height } = Dimensions.get("window");

type AccueilStackType = StackNavigationProp<RootStackParams, "Welcome">;
interface item {
  image: string;
  title: string;
  text: string;
}

export type Items = {
  item: item;
};
const ApIntroSlider: FC<Items> = () => {
  const navigation = useNavigation<AccueilStackType>();
  const Se_connecter = () => navigation.navigate("SignIn");
  const Creer_compte = () =>
    navigation.navigate("MapDetailsStack", {
      screen: "SignUp",
    });
  const Consulter = () =>
    navigation.navigate("Consulter");
  const _renderItem = ({ item }: { item: any }) => {
    return (
      <View style={[styles.slide]}>
        <Image source={item.image} resizeMode="contain" style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };
  const _keyExtractor = (item: {
    title: string;
    text: string;
    image: any;
    bg: string;
  }) => item.title;
  const _renderDoneButton = () => {
    <View>
      <Text></Text>
    </View>;
  };
  const _renderNextButton = () => {
    <View>
      <Text></Text>
    </View>;
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.headerTitle}>
        <Text style={styles.textHeader}>MinBasket</Text>
      </View>

      <AppIntroSlider
        keyExtractor={_keyExtractor}
        renderItem={_renderItem}
        renderDoneButton={_renderDoneButton}
        renderNextButton={_renderNextButton}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        data={data} />
      
      <View style={styles.buttonContainer}>
        <Button
          onPress={Se_connecter}
          type={"Se_connecter"}
          borderT={"Se_connecter"}
          size={"medium"}
          label={"Se connecter"}
          borderSize={{}}
          rounded={{}} />
        
        <Button
          onPress={Creer_compte}
          type={"Creer_compte"}
          borderT={"Creer_compte"}
          size={"medium"}
          label={"Créer un compte"}
          borderSize={{}}
          rounded={{}} />
        
        <Button
          onPress={Consulter}
          type={"Consulter"}
          borderT={"Consulter"}
          size={"medium"}
          label={"Consulter"}
          borderSize={{}}
          rounded={{}} />
        
      </View>
    </View>
  );
};

export default ApIntroSlider;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  slide: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: Colors.white,
  },
  headerTitle: {
    width: "100%",
    height: "16%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: width,
    height: height / 3,
  },
  text: {
    color: Colors.textColor,
    textAlign: "center",
    fontSize: "12@vs",
    width: width / 1.2,
    position: "relative",
    top: "38@s",
    fontFamily: "TTNorms-Regular",
  },
  title: {
    fontSize: "18@s",
    position: "relative",
    top: "28@s",
    color: Colors.appColor,
    textAlign: "center",
    width: width,
    fontFamily: "AdigianaUI",
  },
  textHeader: {
    fontSize: "41@vs",
    color: Colors.appColor,
    textAlign: "center",
    fontFamily: "AdigianaUI",
  },
  dotStyle: {
    backgroundColor: Colors.dotStyle,
  },
  activeDotStyle: {
    backgroundColor: Colors.activeDotStyle,
  },
  buttonContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: width,
    height: height / 4,
    paddingBottom: "20@vs",
    position: "relative",
    top: "-15@vs",
    backgroundColor: Colors.white,
  },
});
