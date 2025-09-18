import { createStore, combineReducers } from "redux";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
  theme: themeReducer,
});

export const store6 = createStore(rootReducer);

export type RootState = ReturnType<typeof store6.getState>;
export type AppDispatch = typeof store6.dispatch;