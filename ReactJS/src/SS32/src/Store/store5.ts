import { createStore, combineReducers } from "redux";
import companyReducer from "./companyReducer";

const rootReducer = combineReducers({
  company: companyReducer,
});

export const store5 = createStore(rootReducer);

export type RootState = ReturnType<typeof store5.getState>;
export type AppDispatch = typeof store5.dispatch;