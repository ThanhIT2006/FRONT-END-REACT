export interface RandomState {
  numbers: number[];
}

const initialState: RandomState = {
  numbers: [],
};

type Action = {
  type: "ADD_RANDOM_NUMBER";
  payload: number;
};

export default function randomReducer(
  state = initialState,
  action: Action
): RandomState {
  switch (action.type) {
    case "ADD_RANDOM_NUMBER":
      return { numbers: [...state.numbers, action.payload] };
    default:
      return state;
  }
}