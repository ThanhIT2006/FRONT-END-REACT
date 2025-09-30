import type { Action } from "../type";

const initialMessage: string = "";
function messageReducer(state: string = initialMessage, action: Action) {
  switch (action.type) {
    case "SET_MASSAGE":
      return action.payload;
    case "CLEAR_MESSAGE":
      return "";
    default:
      return state;
  }
}
export default messageReducer;
