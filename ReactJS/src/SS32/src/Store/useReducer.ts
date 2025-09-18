export interface User {
  id: number;
  userName: string;
  gender: string;
  dateBirth: string;
  address: string;
}
const initialState: User[] = [
  { id: 1, userName: "Nam", gender: "Nam", dateBirth: "2000-01-01", address: "HN" },
  { id: 2, userName: "Lan", gender: "Nữ", dateBirth: "2001-02-02", address: "HCM" },
];

type Action =
  | { type: "ADD_USER"; payload: User }
  | { type: "DELETE_USER"; payload: number };

export default function userReducer(state = initialState, action: Action): User[] {
  switch (action.type) {
    case "ADD_USER":
      return [...state, action.payload];
    case "DELETE_USER":
      return state.filter(u => u.id !== action.payload);
    default:
      return state;
  }
}