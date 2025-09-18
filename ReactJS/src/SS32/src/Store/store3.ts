import { createStore, combineReducers } from "redux";
import counterReducer from "./counterReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
});

export const store3 = createStore(rootReducer);

export type RootState = ReturnType<typeof store3.getState>;
export type AppDispatch = typeof store3.dispatch;