import { createSlice } from "@reduxjs/toolkit";
interface ListNumberState{
    value: number[];
}
const initialState:ListNumberState={
    value:[]
}
const NumberRandom= createSlice({
    name:"random",
    initialState,
    reducers:{
        random:(state)=>{
            state.value = [Math.floor(Math.random() * 100)];
        }
    }
})
export const {random} = NumberRandom.actions
export default NumberRandom.reducer