import type { Product } from "../type";
import {
  ADD_TO_CART,
  UPDATE_CART,
  DELETE_FROM_CART,
} from "../actions/actionTypes";

const initialState: Product[] = [];

export default function cartReduce(state = initialState, action: any) {
  switch (action.type) {
    case ADD_TO_CART: {
      const newItem = action.payload;
      const existing = state.find((item) => item.id === newItem.id);

      if (existing) {
        return state.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: Math.max(item.quantity + 1, 1) }
            : item
        );
      }

      return [
        ...state,
        { ...newItem, quantity: Math.max(newItem.quantity, 1) },
      ];
    }

    case UPDATE_CART: {
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: Math.max(action.payload.quantity, 1) }
          : item
      );
    }

    case DELETE_FROM_CART: {
      return state.filter((item) => item.id !== action.payload.id);
    }

    default:
      return state;
  }
}
