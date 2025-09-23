import { createSlice } from "@reduxjs/toolkit"

interface LanguageState {
    value: string
}
const initState: LanguageState = {
    value: "English"
}

const languageSlice = createSlice({
    name: "Language",
    initialState: initState,
    reducers: {
        setLanguage: (state, action) => {
            state.value = action.payload
        },
    },
});

export const { setLanguage } = languageSlice.actions
export default languageSlice.reducer