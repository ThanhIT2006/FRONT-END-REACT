import React from "react";
import { useSelector, useDispatch } from "react-redux";
import type { AppDispatch, RootState } from "../Store/store2";

import type { User } from "../Store/useReducer";

export default function ListUser() {
const users = useSelector((state: RootState) => state); 

  const dispatch: AppDispatch = useDispatch();

  const handleDelete = (id: number) => {
    dispatch({ type: "DELETE_USER", payload: id });
  };

  return (
    <table border={1} cellPadding={5} style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        <tr>
          <th>Id</th>
          <th>Tên</th>
          <th>Giới tính</th>
          <th>Ngày sinh</th>
          <th>Địa chỉ</th>
          <th>Chức năng</th>
        </tr>
      </thead>
      <tbody>
        {users.map((u: User) => (
          <tr key={u.id}>
            <td>{u.id}</td>
            <td>{u.userName}</td>
            <td>{u.gender}</td>
            <td>{u.dateBirth}</td>
            <td>{u.address}</td>
            <td>
              <button>Sửa</button>
              <button onClick={() => handleDelete(u.id)}>Xóa</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}