export interface CompanyState {
  name: string;
}

const initialState: CompanyState = {
  name: "Rikkei Academy",
};

type Action = { type: "CHANGE_COMPANY"; payload: string };

export default function companyReducer(
  state = initialState,
  action: Action
): CompanyState {
  switch (action.type) {
    case "CHANGE_COMPANY":
      return { ...state, name: action.payload };
    default:
      return state;
  }
}