import { createSlice } from "@reduxjs/toolkit";

interface ListState {
    mode: "List" | "Grid"
}

const initialState: ListState = {
    mode: "List"
}

const listSlice = createSlice({
    name: "list",
    initialState,
    reducers: {
        setListMode: (state, action) => {
            state.mode = action.payload;
        }
    }
});

export const { setListMode } = listSlice.actions;
export default listSlice.reducer;