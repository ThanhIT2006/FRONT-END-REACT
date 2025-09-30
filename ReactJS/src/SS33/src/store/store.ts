import { createStore } from "redux";
import { Root } from "./Root";

export const store = createStore(Root);

// thêm type RootState
export type RootState = ReturnType<typeof store.getState>;