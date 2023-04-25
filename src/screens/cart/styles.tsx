import { StyleProp, ViewStyle } from "react-native";
import { Colors } from "../../constants/colors";

type styTypes = {
  container: StyleProp<ViewStyle>;
  header: StyleProp<ViewStyle>;
  footer: StyleProp<ViewStyle>;
  btnPDetails: StyleProp<ViewStyle>;
  btnPDetails2: StyleProp<ViewStyle>;
  delete: StyleProp<ViewStyle>;
  Counter: StyleProp<ViewStyle>;
  ViewImg: StyleProp<ViewStyle>;
  headerTittle: StyleProp<ViewStyle>;
  position: string;
  justifyContent: string;
  alignItems: string;
  borderRadius: number;
  width: number;
  height: number;
  zIndex: number;
  backgroundColor: string;
  flex: number;
  marginTop: number;
  margin: number;
  borderTopLeftRadius: number;
  borderTopRightRadius: number;
  borderBottomRightRadius: number;
  borderBottomLeftRadius: number;
  shadowColor: string;
  shadowOffset: {
    width: number;
    height: number;
  };
  shadowOpacity: number;
  shadowRadius: number;

  elevation: number;
  color:string;
};

export const styles = {
  container: {
    flex: 1,
    marginTop: 15,
    backgroundColor: Colors.white,
    height: 130,
    width: 350,
    margin: 10,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 5,
  },
  header: {
    backgroundColor: Colors.munchyColor,
    width: "100%",
    height: 100,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    zIndex: 1,
  },
  footer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    margin: 10,
    backgroundColor: Colors.white,
    width: "100%",
    height: 220,
    position: "absolute",
    right: 0,
    top: 500,
    zIndex: 1,
  },
  btnPDetails: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.success,
    width: 362,
    height: 38,
    position: "relative",
    top: -5,
    left: 22,
    borderRadius: 10,
  },
  btnPDetails2: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.white,
    width: 362,
    height: 38,
    position: "relative",
    top: 0,
    left: 22,
    borderRadius: 10,
  },
  delete: {
    position: "relative",
    top: -15,
    left: 327,
  },
  Counter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 95,
    height: 90,
    position: "relative",
    top: -150,
    left: 220,
  },
  ViewImg: {
    flexDirection: "row",
    justifyContent: "flex-start",
    position: "relative",
    top: -10,
    right: 0,
  },
  CartIcon: {
    tintColor: Colors.white,
    position: "relative",
    left: 25, top: 12, width: 20
  },
  emptyCartContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: "center" 
  },
  headerTittle: {
   color: "white",
   fontSize:21,
   fontFamily:"TTNorms-Bold", 
   position:"relative",left:10,top:10
  },
  emptyCartContent: {
    height:"100%",
    backgroundColor:Colors.white,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', top:-100,
  },
  emptyCartImg: {
    width: 140,
    height: 140,
    marginBottom: 20
  },
  SousTotalText: {
    color: Colors.black,
    fontSize: 18,
    fontFamily: "TTNorms-Regular",
  },
  SousTotalView: {
    position: "relative",
    left: 280, top: -20 
  },
  SousTotalNumber: {
     fontSize: 18,
     fontFamily: "TTNorms-Bold",
     color: Colors.black,
  },
  FraisService: {
    marginTop: -10,
    paddingLeft: 20 
  },
  FraisServiceText: {
    color: Colors.black,
    fontSize: 18,
    fontFamily: "TTNorms-Regular",
  },
  frSeNumberView: {
    position: "relative",
    left: 312, top: -20
  },
  FraisNumberText: {
    fontSize: 18,
    fontFamily: "TTNorms-Bold",
    color: Colors.black,
  },
  prixTotal: {
    marginTop: -10,
    paddingLeft: 20 
  },
  prixTotalText: {
    color: Colors.black,
    fontSize: 18,
    fontFamily: "TTNorms-Regular",
  },
  prixTotalNbView: {
    position: "relative",
    left: 280, top: -20 
  },
  prixTNbText: {
      fontSize: 18,
      fontFamily: "TTNorms-Bold",
      color: Colors.black,
  },
  btnValider: {
     fontFamily: "TTNorms-Bold",
     fontSize: 20,
     color: Colors.white,
  },
  continueAchart: {
    fontFamily: "TTNorms-Regular",
    fontSize: 20,
    color: Colors.success
  }
}
  
