import Table from "react-bootstrap/Table";
import "./Add";
function Info() {
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
          <tr></tr>
          <tr></tr>
          <tr></tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Info;
