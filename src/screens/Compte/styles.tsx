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
  avatar: {
    width: 70,
    height: 70,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
    shadowColor: "transparent",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    //  elevation: 5,
  },
};
