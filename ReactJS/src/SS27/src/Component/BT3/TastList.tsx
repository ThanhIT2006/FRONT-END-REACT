import { Link } from "react-router-dom";

const TaskList = () => {
  return (
    <div style={{position:"absolute",top:0,}}>
        <h2>Danh Sách Công Việc</h2>
        <div style={{border: "1px solid black",width:"500px" , margin: "10px", padding: "15px", borderRadius: "10px"}}>
            <h5>Học React Router</h5>
            <p>Làm quen với Dynamic Router và useNavigate</p>
            <Link style={{textDecoration: "none"}} to="/1">Xem chi tiết</Link>
        </div>
        <div style={{border: "1px solid black",width:"500px" , margin: "10px", padding: "15px", borderRadius: "10px"}}>
            <h5>Ôn lại Tailwind</h5>
            <p>Thực hành tạo UI cơ bản bằng Tailwind CSS</p>
            <Link style={{textDecoration: "none"}} to="/2">Xem chi tiết</Link>
        </div>
        <div style={{border: "1px solid black",width:"500px" , margin: "10px", padding: "15px", borderRadius: "10px"}}>
            <h5>Hoàn thành BTVN</h5>
            <p>Đẩy code lên GitHub và nộp link</p>
            <Link style={{textDecoration: "none"}} to="/3">Xem chi tiết</Link>
        </div>
    </div>
    );
};
export default TaskList;