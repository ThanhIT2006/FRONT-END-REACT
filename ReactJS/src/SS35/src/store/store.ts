import { configureStore } from "@reduxjs/toolkit/react";
import counterReducer from "../features/counter/CounterSlide";
import numberReducer from "../features/listNumber/ListNumberSlide";
import themeReducer from "../features/changeTheme/themeSlide";
import listReducer from "../features/listState/ListSlide";
import languageReducer from "../features/Language/LanguageSlide";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        ListNumber: numberReducer,
        ChangeTheme: themeReducer,
        ListState: listReducer,
        Language: languageReducer
    }
})

export type RootState = ReturnType<typeof store.getState>