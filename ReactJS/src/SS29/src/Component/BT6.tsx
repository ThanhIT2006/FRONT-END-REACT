import React, { useEffect } from "react";

export default function B6() {
  const createStudent = async () => {
    try {
      const newStudent = {
        student_name: "Nguyễn Văn F",
        email: "vanf@example.com",
        address: "Huế",
        phone: "0911222333",
        status: true,
        created_at: new Date().toISOString(),
      };

      const res = await fetch("http://localhost:3001/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newStudent),
      });

      if (!res.ok) {
        throw new Error("Lỗi khi thêm mới sinh viên");
      }

      const data = await res.json();
      console.log("Thêm mới thành công:", data);
    } catch (error) {
      console.error("Lỗi khi thêm mới sinh viên:", error);
    }
  };

  useEffect(() => {
    createStudent();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Thêm mới sinh viên</h2>
      <p>Kiểm tra console để xem kết quả</p>
    </div>
  );
}
