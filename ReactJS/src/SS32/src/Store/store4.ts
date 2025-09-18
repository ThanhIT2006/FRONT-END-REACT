import { createStore, combineReducers } from "redux";
import randomReducer from "./randomReducer";

const rootReducer = combineReducers({
  random: randomReducer,
});

export const store4 = createStore(rootReducer);

export type RootState = ReturnType<typeof store4.getState>;
export type AppDispatch = typeof store4.dispatch;