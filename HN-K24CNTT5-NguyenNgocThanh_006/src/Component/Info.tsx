import Table from "react-bootstrap/Table";
import type { Bill } from "../Component/type";

function Info({
  bills,
  onDeleteBill,
  onEditBill,
}: {
  bills: Bill[];
  onDeleteBill: (id: number) => void;
  onEditBill: (bill: Bill) => void;
}) {
  return (
    <div
      style={{
        marginTop: "20px",
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <p>Danh sách hóa đơn</p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th style={{ backgroundColor: "lightgray", color: "black" }}>
              Tên chủ hộ
            </th>
            <th style={{ backgroundColor: "lightgray", color: "black" }}>
              Số tiền (VNĐ)
            </th>
            <th style={{ backgroundColor: "lightgray", color: "black" }}>
              Trạng thái
            </th>
            <th style={{ backgroundColor: "lightgray", color: "black" }}>
              Hành động
            </th>
          </tr>
        </thead>
        <tbody>
          {bills.length === 0 ? (
            <tr>
              <td colSpan={4} style={{ textAlign: "center" }}>
                Chưa có hóa đơn nào
              </td>
            </tr>
          ) : (
            bills.map((bill) => (
              <tr key={bill.id}>
                <td>{bill.name}</td>
                <td>{bill.amount.toLocaleString()}</td>
                <td>{bill.status}</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => onEditBill(bill)}
                  >
                    Sửa
                  </button>{" "}
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => onDeleteBill(bill.id)}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default Info;
