import Button from 'react-bootstrap/Button';

function BT1() {
  return (
    <>
      <Button style={{marginLeft:"7px"}} variant="primary">Lưu</Button>
      <Button style={{marginLeft:"7px"}} variant="secondary">Hủy</Button>
      <Button style={{marginLeft:"7px"}} variant="success">Thành công</Button>
      <Button style={{marginLeft:"7px"}} variant="warning">Cảnh báo</Button>
      <Button style={{marginLeft:"7px"}} variant="danger">Báo lỗi</Button>
      <Button style={{marginLeft:"7px"}} variant="info">Thông tin</Button>
      <Button variant="link">Đường dẫn</Button>
    </>
  );
}

export default BT1;