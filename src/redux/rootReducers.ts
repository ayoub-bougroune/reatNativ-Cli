import { combineReducers } from "redux";
import signInReducer from "./slice/signIn";
import signUpReducer from "./slice/signUp";
import categoriesReducer from "./slice/categories";
import searchReducer from "./slice/search";
import productsReducer from "./slice/products";
import productSubReducer from "./slice/productSub";
import subcategoryReducer from "./slice/subCategories";
import cartIdReducer from "./slice/cartId";
import cartReducer from "./slice/addTo_cart";
import carItemsReducer from "./slice/getCart_items";
import counterReducer from "./slice/counter";
import singleProductReducer from "./slice/single_product";

export default combineReducers({
    signIn: signInReducer,
    signup: signUpReducer,
    categories: categoriesReducer,
    search: searchReducer,
    subCategories: subcategoryReducer,
    product: productsReducer,
    productSub: productSubReducer,
    cartId: cartIdReducer,
    cart: cartReducer,
    cartItems: carItemsReducer,
    counter: counterReducer,
    singleProduct: singleProductReducer,
})