import { createStore } from "redux";

const initialState = {
  id: 1,
  userName: "Nguyễn Văn Nam",
  gender: "Nam",
  dateBirth: "20/03/2023",
  address: "Thanh Xuân, Hà Nội",
};

interface Action {
  type: string;
  payload?: number;
}

function userReducer(state = initialState, action: Action) {
  switch (action.type) {
    default:
      return state;
  }
}

export const store = createStore(userReducer);

export type RootState = ReturnType<typeof store.getState>;