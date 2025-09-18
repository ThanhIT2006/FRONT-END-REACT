import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../Store/store4";


export default function RandomNumber() {
  const numbers = useSelector((state: RootState) => state.random.numbers);
  const dispatch: AppDispatch = useDispatch();

  const handleGenerate = () => {
    const random = Math.floor(Math.random() * 100); 
    dispatch({ type: "ADD_RANDOM_NUMBER", payload: random });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h3>{JSON.stringify(numbers)}</h3>
      <button onClick={handleGenerate}>Generate Random Number</button>
    </div>
  );
}