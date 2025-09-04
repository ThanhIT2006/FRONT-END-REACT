import Alert from "react-bootstrap/Alert";

function BasicExample() {
  return (
    < >
      <Alert variant="success"  style={{width:"500px"}} dismissible>Thêm tài khoản thành công</Alert>
      <Alert variant="danger" dismissible>Thêm mới tài khoản thất bại</Alert>
      <Alert variant="warning" dismissible>Tên không được để trống</Alert>
    </>
  );
}

export default BasicExample;
