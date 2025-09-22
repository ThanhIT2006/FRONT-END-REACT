import { combineReducers } from "redux";
import ProductReducer from "./ProductReducer";
import CartReducer from "./CartReducer";

export const rootReducer = combineReducers({
    products:ProductReducer,
    carts:CartReducer
})