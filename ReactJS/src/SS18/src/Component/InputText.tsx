import{ useReducer } from "react";

interface State {
  text: string;
}

type Action = { type: "change"; payload: string };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "change":
      return { text: action.payload };
    default:
      return state;
  }
}

export default function InputText() {
  const [state, dispatch] = useReducer(reducer, { text: "" });

  return (
    <div>
      <h1>{state.text}</h1>
      <input
        type="text"
        placeholder="Nhập dữ liệu"
        value={state.text}
        onChange={(e) => dispatch({ type: "change", payload: e.target.value })}
      />
    </div>
  );
}
