export interface ThemeState {
  darkMode: boolean;
}

const initialState: ThemeState = {
  darkMode: false, 
};

type Action = { type: "TOGGLE_THEME" };

export default function themeReducer(
  state = initialState,
  action: Action
): ThemeState {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, darkMode: !state.darkMode };
    default:
      return state;
  }
}