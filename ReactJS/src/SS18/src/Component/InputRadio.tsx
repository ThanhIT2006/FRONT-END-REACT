import React, { useReducer } from "react";

interface State {
  gender: string;
}

type Action = {
  type: "change";
  payload: string;
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "change":
      return { gender: action.payload };
    default:
      return state;
  }
}

export default function InputRadio() {
  const [state, dispatch] = useReducer(reducer, { gender: "Nam" });

  return (
    <div>
      <div>
        <input
          type="radio"
          id="nam"
          name="gender"
          value="Nam"
          checked={state.gender === "Nam"}
          onChange={(e) =>
            dispatch({ type: "change", payload: e.target.value })
          }
        />
        <label htmlFor="nam">Nam</label>
      </div>
      <div>
        <input
          type="radio"
          id="nu"
          name="gender"
          value="Nữ"
          checked={state.gender === "Nữ"}
          onChange={(e) =>
            dispatch({ type: "change", payload: e.target.value })
          }
        />
        <label htmlFor="nu">Nữ</label>
      </div>
      <div>
        <input
          type="radio"
          id="khac"
          name="gender"
          value="Khác"
          checked={state.gender === "Khác"}
          onChange={(e) =>
            dispatch({ type: "change", payload: e.target.value })
          }
        />
        <label htmlFor="khac">Khác</label>
      </div>

      <p>
        <strong>Selected gender:</strong> {state.gender}
      </p>
    </div>
  );
}
