import React from "react";
import { Provider } from "react-redux";
import ListUser from "./Component/ListUser";
import Profile from "./Component/Frofile";
import { store } from "./Store/store2";
import Counter from "./Component/Counter";
import { store3 } from "./Store/store3";
import RandomNumber from "./Component/RandomNumber";
import { store4 } from "./Store/store4";
import { store5 } from "./Store/store5";
import ChangeState from "./Component/ChangeState";
import ThemeToggle from "./Component/ThemeToggle";
import { store6 } from "./Store/store6";

export default function App() {
  return (
    <>
      <Profile />
      <Provider store={store}>
        <div style={{ padding: "20px" }}>
          <h2>Danh sách User</h2>
          <ListUser />
        </div>
      </Provider>
      <Provider store={store3}>
        <Counter />
      </Provider>
      <Provider store={store4}>
        <RandomNumber />
      </Provider>
      <Provider store={store5}>
        <ChangeState />
      </Provider>
      <Provider store={store6}>
        <ThemeToggle />
      </Provider>
    </>
  );
}
