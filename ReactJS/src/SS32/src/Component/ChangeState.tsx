import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../Store/store5";


export default function ChangeState() {
  const company = useSelector((state: RootState) => state.company.name);
  const dispatch: AppDispatch = useDispatch();

  const handleChange = () => {
    dispatch({ type: "CHANGE_COMPANY", payload: "RikkeiSoft" });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>{company}</h2>
      <button onClick={handleChange}>Change state</button>
    </div>
  );
}