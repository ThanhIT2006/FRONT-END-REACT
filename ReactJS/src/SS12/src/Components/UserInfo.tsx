function UserInfo() {
    const user = {
        name: "Nguyễn Văn A",
        gender: "Nam",
        date: "06/03/2024",
        email: "a@gmail.com",
        address: "Thanh Xuân, Hà Nội"  
    }
  return (
    <div>
        <h3>Thông tin cá nhân</h3>
        <ul>
            <li>Họ và tên: {user.name}</li>
            <li>Giới tính: {user.gender}</li>
            <li>Ngày sinh: {user.date}</li>
            <li>Email: {user.email}</li>
            <li>Địa chỉ: {user.address}</li>
        </ul>
    </div>  
  );
}

export default UserInfo;