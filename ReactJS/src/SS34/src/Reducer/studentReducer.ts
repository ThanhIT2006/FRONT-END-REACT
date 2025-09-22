import type { Student } from "../utils/types";

interface StudentState {
  students: Student[];
}

const initialState: StudentState = {
  students: [
    { id: "SV001", name: "Nguyễn Văn A", age: 20, gender: "Nam" },
    { id: "SV002", name: "Nguyễn Văn B", age: 21, gender: "Nữ" },
  ],
};

type Action =
  | { type: "ADD_STUDENT"; payload: Student }
  | { type: "UPDATE_STUDENT"; payload: Student }
  | { type: "DELETE_STUDENT"; payload: string };

export default function studentReducer(
  state = initialState,
  action: Action
): StudentState {
  switch (action.type) {
    case "ADD_STUDENT":
      return { ...state, students: [...state.students, action.payload] };
    case "UPDATE_STUDENT":
      return {
        ...state,
        students: state.students.map((s) =>
          s.id === action.payload.id ? action.payload : s
        ),
      };
    case "DELETE_STUDENT":
      return {
        ...state,
        students: state.students.filter((s) => s.id !== action.payload),
      };
    default:
      return state;
  }
}