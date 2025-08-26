import React, { useState } from "react";

interface SelectState {
  city: string;
}

export default function Select() {
  const [state, setState] = useState<SelectState>({ city: "" });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setState({ city: e.target.value });
  };

  return (
    <div>
      <label>Thành phố:</label>
      <select value={state.city} onChange={handleChange}>
        <option value="">-- Chọn thành phố --</option>
        <option value="Hà Nội">Hà Nội</option>
        <option value="Hà Nam">Hà Nam</option>
        <option value="Ninh Bình">Ninh Bình</option>
        <option value="Thanh Hóa">Thanh Hóa</option>
        <option value="Nghệ An">Nghệ An</option>
      </select>

      {state.city && <h3>Thành phố: {state.city}</h3>}
    </div>
  );
}
