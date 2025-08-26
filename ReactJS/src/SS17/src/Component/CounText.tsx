import React, { useState } from "react";

interface CountTextState {
  text: string;
}

export default function CounText() {
  const [state, setState] = useState<CountTextState>({ text: "" });

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setState({ text: e.target.value });
  };

  return (
    <div>
      <textarea
        placeholder="Nhập nội dung"
        value={state.text}
        onChange={handleChange}
      ></textarea>
      <div>Số ký tự: {state.text.length}</div>
    </div>
  );
}
