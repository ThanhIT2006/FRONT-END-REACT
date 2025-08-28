import React, { useRef, useState } from "react";

function RenderCounter() {
  const [value, setValue] = useState("");
  const countRender = useRef<number>(0);

  countRender.current += 1;

  return (
    <div>
      <h3>🔢Component Render Counter</h3>
      <div>
        <label htmlFor="input">Input: </label>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <p>Component đã render: {countRender.current} lần</p>
    </div>
  );
}

export default RenderCounter;
