import { useReducer } from "react";
interface State {
  count: number;
}
type action = { type: `increase` };
function reduce(state: State, action: action) {
  switch (action.type) {
    case "increase":
      return { count: state.count + 1 };
    default:
      return state;
  }
}
export default function Increase() {
  const [state, dispatch] = useReducer(reduce, { count: 0 });

  return (
    <div>
      <h2>{state.count}</h2>
      <button onClick={() => dispatch({ type: "increase" })}>Increase</button>
    </div>
  );
}
