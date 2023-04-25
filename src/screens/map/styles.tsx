import { Colors } from "../../constants/colors";

export const styles = {
  header: {
    backgroundColor: Colors.accent,
    width: "100%",
    height: 170,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    zIndex: 1,
  },
  title: {
    color: Colors.white,
    fontSize: 25,
    fontFamily: "TTNorms-Regular",
    position: "relative",
    left: 70,
    top: -22,
  },
  searchInputContainer: {
    backgroundColor: Colors.appColor,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    margin: 5,
    flexDirection: "row",
    alignItems: "center",
    width: "98%",
    height: 40,
    position: "relative",
    top: 32,
    right: 135,
  },
  card: {
    width: "100%",
    height: "100%",
  },
  goBack: {
    width: 30,
    height: 25,
    position: "absolute",
    top: 53,
    left: 10,
    tintColor: "#fff",
  },
};
