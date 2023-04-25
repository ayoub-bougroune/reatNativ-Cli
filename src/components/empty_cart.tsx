import React, { FC } from "react"
import {
  View,
  Text,
  Image,
} from "react-native";
import { Colors } from "react-native-paper"
import { Button } from "./Button";
import { styles } from "../screens/cart/styles";
import { useNavigation } from "@react-navigation/native";
import { Header } from "./Header";

const EmptyCart: FC = () => {

      const navigation = useNavigation();
      const dash = () => navigation.goBack();
  return (
    <View style={styles.emptyCartContainer}>
       <Header/>
        <View style={styles.emptyCartContent}>
        <Image 
          resizeMode="cover" 
          source={require('../assets/icons/empty-cart.png')}
          style={styles.emptyCartImg}
          />
        <Text style={{fontFamily:"TTNorms-Regular", 
                      fontSize:14,color: Colors.black,
            
          marginBottom: 15
        }}>Votre panier est vide pour le moment</Text>
        <View style={{ width: "100%", height: "6.8%" }}>
        <Button 
          onPress={dash}
          type={"Button_Panier"}
          borderT={"Button_Panier"}
          size={"large"}
          label={"ACHETEZ MAINTENANT"} borderSize={{}} rounded={{}}/>
        </View> 
        </View> 
    </View>
  )
}


export { EmptyCart }
