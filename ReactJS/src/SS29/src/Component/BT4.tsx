import React, { useEffect, useState } from "react";

interface IStudent {
  id: number;
  student_name: string;
  email: string;
  address: string;
  phone: string;
  status: boolean;
  created_at: string;
}
export default function B2() {
const [students, setStudents] = useState<IStudent[]>([]);
      const getAllStudent = () => {
    return fetch("http://localhost:3001/students")
      .then((res) => res.json())
      .then((data) => {
        return data; 
      })
      .catch((err) => {
        console.error("Lỗi fetch:", err);
        return []; 
      });
  };

  useEffect(() => {
    getAllStudent().then((data) => {
      setStudents(data);
    });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Danh sách sinh viên</h2>
      <ul>
        {students.map((s) => (
          <li key={s.id} style={{ marginBottom: "20px" }}>
            <h3>{s.student_name}</h3>
            <p>Email: {s.email}</p>
            <p>Địa chỉ: {s.address}</p>
            <p>Điện thoại: {s.phone}</p>
            <p>Trạng thái: {s.status ? "Đang học" : "Đã tốt nghiệp"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
