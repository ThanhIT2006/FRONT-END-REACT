import React, { useState, useCallback } from "react";

export default function ColorPicker() {
  const [color, setColor] = useState<string>("#000000");

  const handleChangeColor = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      setColor(e.target.value);
    },
    []
  );

  return (
    <div>
      <div>
        <label>Màu người dùng chọn:</label>
        <br />
        <input type="color" value={color} onChange={handleChangeColor} />
      </div>

      <div>
        <label>Màu hiển thị:</label>
        <br />
        <div
          style={{
            width: "150px",
            height: "80px",
            backgroundColor: color,
          }}
        ></div>
      </div>
    </div>
  );
}
