import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState, useEffect } from "react";
import type { Bill } from "../Component/type";

interface AddProps {
  onAddBill: (bill: Bill) => void;
  onUpdateBill: (bill: Bill) => void;
  editingBill: Bill | null;
  cancelEdit: () => void;
}

function Add({ onAddBill, onUpdateBill, editingBill, cancelEdit }: AddProps) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("Chưa Hoàn Thành");
  const [error, setError] = useState("");
  const [error2, setError2] = useState("");

  useEffect(() => {
    if (editingBill) {
      setName(editingBill.name);
      setAmount(editingBill.amount.toString());
      setStatus(editingBill.status);
    }
  }, [editingBill]);

  const handleSubmit = () => {
    if (name.trim() === "") {
      setError("Vui lòng nhập tên chủ hộ!");
      return;
    }
    if (amount.trim() === "") {
      setError2("Vui lòng nhập số tiền!");
      return;
    }

    setError("");
    setError2("");

    if (editingBill) {
      onUpdateBill({
        ...editingBill,
        name,
        amount: Number(amount),
        status,
      });
    } else {
      const newBill: Bill = {
        id: Date.now(),
        name,
        amount: Number(amount),
        status,
      };
      onAddBill(newBill);
    }

    setName("");
    setAmount("");
    setStatus("Chưa Hoàn Thành");
  };

  return (
    <div
      style={{ marginTop: "30px", backgroundColor: "white", padding: "20px" }}
    >
      <p>{editingBill ? "✏️ Sửa hóa đơn" : "+ Thêm hóa đơn mới"}</p>
      <div className="add" style={{ display: "flex", gap: "20px" }}>
        <Form.Control
          style={{ width: "250px" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Tên chủ hộ"
        />

        <Form.Control
          style={{ width: "250px" }}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          placeholder="Số tiền"
        />

        <Form.Select
          style={{ width: "200px" }}
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="Chưa Hoàn Thành">Chưa Hoàn Thành</option>
          <option value="Đã Hoàn Thành">Đã Hoàn Thành</option>
        </Form.Select>

        <Button variant="primary" onClick={handleSubmit}>
          {editingBill ? "Cập nhật" : "Thêm"}
        </Button>

        {editingBill && (
          <Button variant="secondary" onClick={cancelEdit}>
            Hủy
          </Button>
        )}
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
