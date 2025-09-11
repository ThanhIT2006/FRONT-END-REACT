
import { Link } from "react-router-dom"
function Home() {

    return (
        <div style={{position:"absolute",top:"0", width:"100%", textAlign:"center"}}>
            <div style={{ display: "flex", justifyContent:"space-evenly", paddingTop:"20px",paddingBottom:"20px",backgroundColor:"#007BFF", marginBottom:"100px" }}>
                <Link style={{color:"white"}} to="/">Home</Link>
                <Link style={{color:"white"}} to="/About">About</Link>
                <Link style={{color:"white"}} to="/Contact">Contact</Link>
            </div>
            <h2>Giới thiệu bản thân</h2>
            <p>Xin chào! Tôi là <b style={{color:"#007BFF"}}>Nguyễn Ngọc Thanh</b>, một lập trình viên Frontend đầy đam mê. Tôi yêu thích việc xây dựng các ứng dụng web hiện đại và tối ưu trãi nghiệm người dùng.</p>
            <p><b>Sở thích:</b> Đọc sách, viết code và đi du lịch</p>
            <p><b>Mục tiêu:</b> Trở thành một lập trình viên xuất sắc và tạo ra những sản phẩm công nghệ có giá trị!</p>
        </div>
    )
}

export default Home
