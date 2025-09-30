import { combineReducers } from "redux";
import shopping from "../reducers/shopping";
import messageReducer from "../reducers/messageReducer";
import cartReduce from "../reducers/cartReduce";

export const Root = combineReducers({
        products: shopping,
        cart: cartReduce,
        message: messageReducer
})      