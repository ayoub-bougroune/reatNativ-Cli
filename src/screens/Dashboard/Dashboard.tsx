/* eslint-disable react/prop-types */ // eslint-disable-next-line no-unused-vars
import React, { FC, useEffect, useState } from "react";
import "react-native-gesture-handler";
import {
  Text,
  View,
  Image,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
import { Colors } from "../../constants/colors";
import { useNavigation } from "@react-navigation/native";
import { BottomSheet } from "react-native-btr";
import { CategoriesScreen } from "../../screens/categories/CategoriesScreen";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../../navigation/app.navigator";
import { PupopSearch } from "../../components/Pupop_search";
import { Item } from "../../types/product";
import { useDebounce } from "../../hooks/useDebounce";
import { SearchCom } from "../../components/SearchCom";
import { ChooseAddress } from "../../components/Choose_address";
import { ModalPopup } from "../../components/Model";
import { BtnSheet } from "../../components/BottomSheet";
import { AppDispatch, RootState } from "../../redux/store";
import { searchStart } from "../../redux/slice/search";
import { useDispatch, useSelector } from "react-redux";


export const numColumns = 2 / 1;
export const windowWidth = Dimensions.get("window").width;
export const windowHeight = Dimensions.get("window").height;

type DashStackType = StackNavigationProp<RootStackParams, "openDrawer">;
export interface IC {
  custom_attributes: any;
  items: any;
  id: number;
  name: string;
  image: string;
}
const Dashboard: FC = () => {
  const [visible, setVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [error, setErrors] = useState<string | null | any>();
  const navigation = useNavigation<DashStackType>();
  const SignIn = () => navigation.navigate("SignIn");
  const AddAdresses = () => navigation.navigate("AddAdresses");
  const dispatch = useDispatch<AppDispatch>();
   const Products = useSelector(
     (state: RootState | Item[] | any) => state.search.Product.items
   );

  const Username = useSelector((state: { signIn: { username: ""; }; })=> state.signIn.username);
  const tokens = useSelector((state: { signIn: { tokens: null; }; })=> state.signIn.tokens);
  

  const debounceSearch = useDebounce(search, 500);

  const toggleBottomNavigationView = () => {
    setVisible(!visible);
  };

  const toggleModal = () => {
    setVisible(false);
    setShowModal(true);
  };

  const searchProduct = async (text: string) => {
      setSearch(text);
    if (text.length > 2) {
      dispatch(searchStart(text));
    }
  };

  useEffect(() => {
    if (debounceSearch) searchProduct();
    setShowModal(false);
  }, [debounceSearch]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.appColor,
        paddingTop: StatusBar.currentHeight,
      }}
    >
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.header}>
        {error && (
          <Text
            style={{
              width: "100%",
              marginLeft: 20,
              justifyContent: "center",
              alignItems: "center",
              height: 40,
              fontSize: 15,
              position: "absolute",
              fontFamily: "TTNorms-Regular",
              color: Colors.white,
              backgroundColor: Colors.appColor,
            }}
          >
            {error}
          </Text>
        )}
        <View
          style={{ paddingTop: 20, position: "relative", top: 10, right: 10 }}>
          <Text
            style={{
              fontSize: 35,
              fontFamily: "AdigianaUI",
              color: Colors.white,
            }}>
            MinBasket
          </Text>
          {tokens ?
            <>
              <Image
                source={require("../../assets/icons/bicycle.png")}
                resizeMode="contain"
                style={{
                  position: "absolute",
                  width: 30,
                  height: 30,
                  top: 30,
                  left: 225,
                }}
              />
              <Text
                style={{
                  position: "absolute",
                  left: 260,
                  color: Colors.dotStyle,
                  fontFamily: "TTNorms-Regular",
                  top: 25,
                }}
              >
                Maintenant
              </Text>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{
                  position: "absolute",
                  left: 260,
                  width: "100%",
                  color: Colors.white,
                  fontSize: 14,
                  fontFamily: "TTNorms-Bold",
                  top: 42,
                }}
                onPress={() => setVisible(true)}
              >
                {Username}
              </Text>
              <Text
                //numberOfLines={1}
                style={{
                  position: "absolute",
                  left: 260,
                  width: "100%",
                  color: Colors.warning,
                  fontFamily: "TTNorms-Bold",
                  fontSize: 12,
                  top: 60,
                }}>
                Adresse non livrable
              </Text>
            </> : <Text
                        style={{
                            position: "absolute",
                            left: 270,
                            color: Colors.dotStyle,
                            fontSize: 15,
                            fontFamily: "TTNorms-Regular",
                            top: 42,
                         }}
              onPress={SignIn}
                          >Se connecter</Text>}
          <TouchableOpacity
            style={{
              position: "absolute",
              top: 90,
              left: 335,
            }}
            onPress={() => navigation.openDrawer()}
          >
            <Image
              style={{
                width: 25,
                height: 25,
                position: "relative",
                top: 8,
                left: 0,
                tintColor: "#fff",
              }}
              source={require("../../assets/icons/sliders.png")}
            />
          </TouchableOpacity>
        </View>
        <SearchCom
          onPress={() => setShowModal(showModal)}
          search={search}
          searchProduct={searchProduct}
          style={styles.searchInputContainer}
        />
      </View>
      
      {search.length > 2 ? (
        <PupopSearch name={""} product={Products} />
      ) : (
        <CategoriesScreen
          id={0}
          name={""}
          image={""}
          custom_attributes={{}}
          items={{}}
        />
      )}

      <BottomSheet
        visible={visible}
        onBackButtonPress={toggleBottomNavigationView}
        onBackdropPress={toggleBottomNavigationView}>
         <BtnSheet  toggleModal={toggleModal} AddAdresses={AddAdresses} onPress={() => setVisible(false)} /> 
      </BottomSheet>
        {showModal ? (
          <ModalPopup ClickOut={() => setShowModal(false)}>
            <ChooseAddress onPress={() => setShowModal(false)} />
          </ModalPopup>
        ) : null}
      </View>
  );
};

export default Dashboard;
