import Dropdown from 'react-bootstrap/Dropdown';

function BasicExample() {
  return (
    <Dropdown>
      <Dropdown.Toggle style={{backgroundColor:"white", color:"black", border:"1px solid black"}} id="dropdown-basic">
        Nguyễn Ngọc Thanh
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Cài đặt</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Đổi mật khẩu</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Đăng xuất</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BasicExample;