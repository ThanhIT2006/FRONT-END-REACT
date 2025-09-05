import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
interface User {
  id: number;
  name: string;
  price: string;
  completed: boolean;
}
function Add() {
  const [User, setUser] = useState<User[]>([]);
  const [input, setInput] = useState("");
  const [input2, setInput2] = useState("");
  const [error, setError] = useState("");
  const [error2, setError2] = useState("");
  const [completed, setCompleted] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);
  const handleAdd = () => {
    if (input.trim() === "") {
      setError("Vui lòng nhập tên công việc!");
      return;
    }
    if (input2.trim() === "") {
      setError2("Vui lòng nhập số tiền!");
      return;
    }
    if (completed === true) {
      setCompleted(false);
    }
    setError("");
    setError2("");
    if (editId !== null) {
      setUser(
        User.map((user) =>
          user.id === editId
            ? { ...user, name: input, price: input2, completed: completed }
            : user
        )
      );
      setEditId(null);
    } else {
      const newUser: User = {
        id: Date.now(),
        name: input,
        price: input2,
        completed: false,
      };
      setUser([...User, newUser]);
    }
    setInput("");
    setInput2("");
  };

  return (
    <div
      style={{ marginTop: "30px", backgroundColor: "white", padding: "20px" }}
    >
      <p>+ Thêm hóa đơn mới</p>
      <div className="add" style={{ display: "flex", gap: "20px" }}>
        <Form.Control
          style={{ width: "250px" }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Tên chủ hộ"
        />

        <Form.Control
          style={{ width: "250px" }}
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
          type="text"
          placeholder="Số tiền "
        />

        <Form.Select style={{width:"200px"}} aria-label="Default select example">
          <option value="1">Chưa Hoàn Thành</option>
          <option value="2">Đã Hoàn Thành</option>
        </Form.Select>
        <Button variant="primary" onClick={handleAdd}>
          Thêm
        </Button>
        <br />
      </div>
      <div
        className="alertError"
        style={{
          display: "flex",
          paddingLeft: "2px",
          justifyContent: "space-between",
          width: "430px",
        }}
      >
        {error && <p className="text-danger">{error}</p>}
        {error2 && <p className="text-danger">{error2}</p>}
      </div>
    </div>
  );
}

export default Add;
