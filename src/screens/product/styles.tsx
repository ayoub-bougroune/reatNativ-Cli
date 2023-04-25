import { Colors } from "../../constants/colors";
export const styles = {
  header: {
    zIndex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: Colors.boissons,
    width: "100%",
    height: 160,
  },
  searchInputContainer: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    margin: 5,
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    height: 40,
    position: "relative",
    top: 42,
    right: 15,
  },
  itemText: {
    width: 80,
    height: 25,
    zIndex: 1,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
  },
  Container: {
    flex: 1,
    backgroundColor: Colors.dash,
  },
  image: {
    height: 130,
  },
  imageDefault: {
    height: "65%",
    width: "100%",
    position: "relative",
  },

  TabRadio: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start",
    position: "relative",
    top: 15,
    height: "auto",
    margin: 3,
    borderColor: Colors.white,
    borderRadius: 30,
    borderWidth: 3,
  },
  
  SubName: {
    fontFamily: "TTNorms-Regular",
    marginLeft: 15,
    marginTop: 4,
    marginBottom: 4,
    marginRight: 15,
  },

  SubCategoriesCard: {
     width: "100%",
     height: 70,
     position: "absolute",
     top: 90,
     zIndex: 1,
  },

  productCard: {
    backgroundColor: Colors.white,
    height: 200,
    width: "29.5%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 7,
    marginTop: 15,
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
      
  cardContainer: {
      width: "100%",
      height: "100%",
      backgroundColor: Colors.white,
  },

   cardContent: {
      width: "100%",
      height: "10%",
      position: "relative",
      top: -25,
  },
   
   productName: {
    fontFamily: "TTNorms-Regular",
    fontSize: 12,
    color: Colors.black,
    alignSelf: "flex-start",
  },
   
  sliders: {
      flex: 0.15,
      position: "relative",
      top: 0,
      left: 335,
      tintColor: Colors.white,
   },
   
     productPrice: {
     fontFamily: "TTNorms-Bold",
     fontSize: 12,
     color: Colors.black,
  },
     
    plus: {
     width: "40%",
     height: "195%",
     position: "relative",
     left: 30,top: -5,
  },

  categoryName: {
    fontFamily: "TTNorms-Bold",
    fontSize: 17,
    zIndex: 2,
    color: Colors.black,
    marginLeft: 10
  },  
    
  DetailsHeader: {
    height: 100,
  },

  DetailsContent: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 30,
  },

  DetailsFooter: {
    height: 100,
    flexDirection: "column",
    backgroundColor: "transparent",
    margin: 5,
    position: "relative",
    top: 120,
    left: 20,
  },

  goBack: {
    width: 28,
    height: 28,
    position: "absolute",
    top: 55,
    right: 335,
    tintColor: "#fff",
  },

   imagePDetails: {
     width: "90%",
  },
   
  productDetailsTex: {
    fontFamily: "TTNorms-Bold",
    fontSize: 22,
    color: Colors.black,
    margin:10
  },

  textDetails: {
    height: 200,
    margin: 15,
  },

  cardImage: {
    backgroundColor: Colors.white,
    height: 370,
    width: "95%",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
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
 
  detailsContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
 
  btnPDetails: {
     flexDirection: "row",
     justifyContent: "center",
     alignItems: "center",
     backgroundColor: Colors.success,
     width: "95%",
     height: 50,
     borderRadius: 8,
     position: "relative",left: "1.5%",top: "-20%",
  },

  Counter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "25%",
    position: "relative", left: "135%",
    top: "-28%"
  },

  items: {
    backgroundColor: "transparent",
  },

  PListEmpty: {
    flex: 1,
    backgroundColor: Colors.white,
    height: 200,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  counterText: {
     fontFamily: "TTNorms-Bold",
     fontSize: 20,
     color: Colors.black,
  }
};
