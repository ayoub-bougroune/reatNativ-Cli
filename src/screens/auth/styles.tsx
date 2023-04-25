import { Dimensions } from "react-native";
import { Colors } from "../../constants/colors";
const { width, height } = Dimensions.get("window");
import { ScaledSheet } from "react-native-size-matters";

export const styles = ScaledSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colors.munchyColor,
    paddingTop: "17%",
    alignItems: "center",
    justifyContent: "center",
  },
  Title: {
    fontSize: width / 12,
    fontFamily: "TTNorms-Bold",
    marginRight: "20%",
    color: Colors.white,
  },
  sousTitles: {
    width: width,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "8%",
  },
  viewMContainer: {
    paddingTop: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  inputView: {
    backgroundColor: Colors.white,
    borderRadius: "6@s",
    borderWidth: "1@s",
    width: "66%",
    height: height / 17,
    marginBottom: 15,
    borderColor: Colors.black,
  },
  TextInput: {
    marginLeft: "6%",
    fontFamily: "TTNorms-Regular",
    color: Colors.black,
  },
  msg: {
    height: height / 35,
    fontSize: "12.5@vs",
    fontFamily: "TTNorms-Bold",
    position: "relative",
    left: "20.5%",
    top: "-25%",
    color: Colors.white,
    margin: "2%",
  },
  text: {
    width: "45%",
    fontFamily: "TTNorms-Regular",
    position: "relative",
    right: "10%",
    textAlign: "left",
    fontSize: "13@s",
    color: Colors.white,
    marginBottom: "4%",
  },
  mapLocations: {
    borderRadius: 10,
    flexDirection: "column",
    position: "absolute",
    top: "47%",
    left: "78%",
  },
  mapIcon: {
    width: width / 23,
    height: height / 25,
  },
  message: {
    width: width / 5,
    height: height / 17,
  },
  TexMessage: {
    fontSize: width / 55,
    fontFamily: "TTNorms-bold",
    color: Colors.black,
    width: width / 6,
    position: "relative",
    top: "28%",
    left: "10%",
    zIndex: 1,
  },
  goBack: {
    width: width / 13,
    height: height / 20,
    position: "absolute",
    top: "3%",
    left: "5%",
    tintColor: "#fff",
  },
  buttonContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: width,
    height: height / 14,
    marginBottom: 10,
  },
});
