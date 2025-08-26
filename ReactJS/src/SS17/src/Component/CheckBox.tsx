import React, { useState } from "react";

interface CheckboxState {
  hobbies: string[];
}

export default function Checkbox() {
  const [state, setState] = useState<CheckboxState>({ hobbies: [] });

  const hobbieList = ["Đi chơi", "Code", "Bơi lội", "Nhảy dây"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setState({ hobbies: [...state.hobbies, value] });
    } else {
      setState({ hobbies: state.hobbies.filter((hobby) => hobby !== value) });
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h3>Sở thích: [{state.hobbies.map((h) => `"${h}"`).join(", ")}]</h3>
      <div style={{ display: "inline-block", textAlign: "left" }}>
        {hobbieList.map((hobby, index) => (
          <div key={index}>
            <label>
              <input
                type="checkbox"
                value={hobby}
                onChange={handleChange}
                checked={state.hobbies.includes(hobby)}
              />
              {hobby}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
