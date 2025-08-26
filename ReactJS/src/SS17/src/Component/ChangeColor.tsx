import React, { useState } from "react";

interface ColorState {
  color: string;
}

export default function ChangeColor() {
  const [state, setState] = useState<ColorState>({ color: "black" });

  const handleChangeColor = () => {
    setState({ color: "red" });
  };

  return (
    <div>
      <h2 style={{ color: state.color }}>Tiêu đề văn bản</h2>
      <button onClick={handleChangeColor}>Thay đổi màu</button>
    </div>
  );
}
