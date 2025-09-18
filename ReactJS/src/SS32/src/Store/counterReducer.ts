
export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

type Action =
  | { type: "INCREMENT" }
  | { type: "DECREMENT" };

export default function counterReducer(
  state = initialState,
  action: Action
): CounterState {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
}