import { Colors } from "../../constants/colors";

export const styles = {
  header: {
    backgroundColor: Colors.accent,
    width: "100%",
    height: 100,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    zIndex: 1,
  },
  btnTabActive: {
    backgroundColor: Colors.white,
    color: Colors.appColor,
  },
  btnText: {
    borderRadius: 8,
    color: Colors.white,
    fontFamily: "TTNorms-Bold",
  },
  TabRadio: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    top: 15,
    width: 150,
    height: 35,
    margin: 3,
    borderColor: Colors.white,
    borderRadius: 30,
    borderWidth: 3,
  },
};
