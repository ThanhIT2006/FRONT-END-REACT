import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../Store/store6";


export default function ThemeToggle() {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  const dispatch: AppDispatch = useDispatch();

  const handleToggle = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  const styles = {
    backgroundColor: darkMode ? "#000" : "#fff",
    color: darkMode ? "#fff" : "#000",
    padding: "20px",
    borderRadius: "8px",
    minHeight: "150px",
    textAlign: "center" as const,
  };

  return (
    <div style={styles}>
      <label>
        <input type="checkbox" checked={darkMode} onChange={handleToggle} />
        {darkMode ? "Tối" : "Sáng"}
      </label>
      <h2>Giao diện {darkMode ? "Dark Mode" : "Light Mode"}</h2>
    </div>
  );
}