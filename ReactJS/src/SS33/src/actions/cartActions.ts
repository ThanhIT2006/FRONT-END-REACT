import { ADD_TO_CART, UPDATE_CART, DELETE_FROM_CART } from "./actionTypes";

export const addToCart = (product: any) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const updateCart = (id: number, quantity: number) => ({
  type: UPDATE_CART,
  payload: { id, quantity },
});

export const deleteFromCart = (id: number) => ({
  type: DELETE_FROM_CART,
  payload: { id },
});
