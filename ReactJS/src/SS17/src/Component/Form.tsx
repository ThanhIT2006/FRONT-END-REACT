import React, { useState } from "react";

interface FormState {
  title: string;
}

export default function Form() {
  const [state, setState] = useState<FormState>({ title: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ title: e.target.value });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nhập nội dung"
        value={state.title}
        onChange={handleChange}
      />
      {state.title && <h2>{state.title}</h2>}
    </div>
  );
}
