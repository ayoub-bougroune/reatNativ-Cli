import { Colors } from "../constants/colors";

export const styles = {
  scrollContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
  },
  icons: {
    flex: 0.7,
    zIndex: 1,
  },
  text: {
    fontFamily: "TTNorms-regular",
    fontSize: 15,
    color: Colors.appColor,
  },
  PupopSearchCard: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 35,
    marginLeft: -15,
  },
  PupopSearchImg: {
    width: "30%",
    height: "180%",
  },
  PupopSearchText: {
    fontSize: 13,
    fontFamily: "TTNorms-Bold",
    color: Colors.black,
  },
  PSContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 35,
  },
   ContainerB: {
    width: "100%",
    height: 50,
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  modalContainer: {
    width: "100%",
    height: "33%",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 30,
    elevation: 20,
  },
  tinySuccessLogo: {
    width: 20,
    height: 23,
    tintColor: "blue",
  },
  tinyPlusLogo: {
    width: 25,
    height: 25,
    tintColor: "red",
  },
  tinyXLogo: {
    width: 15,
    height: 14,
    position: "relative",
    left: 6,
    top: 4,
    tintColor: "grey",
  },
  drawerContainer: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 15,
    marginVertical: 12,
    borderColor: "#808080",
    borderBottomWidth: 0.5,
    position: "relative",
    top: -25,
  },
  drawerIcon: {
      width: 25,
      height: 25,
      marginBottom: 10,
  },
  drawerText: {
    fontFamily: "TTNorms-Bold",
    color: "#000000",
    fontSize: 16 
  },
  drawerHeaderText: {
     fontSize: 22,
     color: "#fff",
     position: "relative",
     top: 30,
     marginLeft: 10,
  }
};
