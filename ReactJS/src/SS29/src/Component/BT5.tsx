import { useEffect } from "react";

export default function B5() {
  const getStudentById = (id: number) => {
    fetch(`http://localhost:3001/students/${id}`)
      .then((res) => {
        if (!res.ok) {
          if (res.status === 404) {
            throw new Error("Không tìm thấy bản ghi");
          }
          throw new Error("Lỗi server");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Thông tin sinh viên:", data);
      })
      .catch((err) => {
        console.error("Lỗi khi gọi API:", err.message);
      });
  };

  useEffect(() => {
    getStudentById(2);  
    getStudentById(99); 
  }, []);

  return <h2></h2>;
}
