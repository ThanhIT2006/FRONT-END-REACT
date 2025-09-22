import { combineReducers } from "redux";
import studentReducer from "../Reducer/studentReducer";

export const Root = combineReducers({
  student: studentReducer,
});