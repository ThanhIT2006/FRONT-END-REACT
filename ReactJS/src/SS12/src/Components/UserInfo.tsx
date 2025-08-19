function UserInfo() {
    const user = {
        Name: "Nguyễn Văn A",
        sex: "Nam",
        date: "06/03/2024",
        email: "a@gmail.com",
        address: "Thanh Xuân, Hà Nội"  
    }
  return (
    <div>
        <h3>Thông tin cá nhân</h3>
        <ul>
            <li>Họ và tên: {user.Name}</li>
            <li>Giới tính: {user.sex}</li>
            <li>Ngày sinh: {user.date}</li>
            <li>Email: {user.email}</li>
            <li>Địa chỉ: {user.address}</li>
        </ul>
    </div>  
  );
}

export default UserInfo;