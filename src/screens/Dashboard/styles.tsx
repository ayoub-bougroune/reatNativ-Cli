import { Colors } from "../../constants/colors";
export const styles = {
  header: {
    zIndex: 1,
   // marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: Colors.appColor,
    width: "100%",
    height: 150,
  },
  searchInputContainer: {
    backgroundColor: Colors.accent,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    margin: 5,
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    height: 40,
    position: "relative",
    top: 95,
    right: 140,
  },
  itemText: {
    width: 125,
    height: 25,
    zIndex: 1,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  Container: {
    flex: 1,
    backgroundColor: Colors.dash,
  },
  image: {
    position: "relative",
    right: 125,
    top: 0.5,
    height: 150.5,
    width: 186,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    marginBottom: 8,
  },
  ContainerSh: {
    width: "100%",
    height: 50,
    justifyContent: "flex-start",
    flexDirection: "row",
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
};
