import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../Store/store";


export default function Profile() {
  const user = useSelector((state: RootState) => state);

  return (
    <div>
      <h2>Thông tin cá nhân</h2>
      <p><strong>Id:</strong> {user.id}</p>
      <p><strong>Họ và tên:</strong> {user.userName}</p>
      <p><strong>Giới tính:</strong> {user.gender}</p>
      <p><strong>Ngày sinh:</strong> {user.dateBirth}</p>
      <p><strong>Địa chỉ:</strong> {user.address}</p>
    </div>
  );
}