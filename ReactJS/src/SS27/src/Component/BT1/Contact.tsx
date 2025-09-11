
import { Link } from "react-router-dom"
function Home() {

    return (
        <div style={{position:"absolute",top:"0", width:"100%", textAlign:"center"}}>
            <div style={{ display: "flex", justifyContent:"space-evenly", paddingTop:"20px",paddingBottom:"20px",backgroundColor:"#007BFF", marginBottom:"100px" }}>
                <Link style={{color:"white"}} to="/">Home</Link>
                <Link style={{color:"white"}} to="/About">About</Link>
                <Link style={{color:"white"}} to="/Contact">Contact</Link>
            </div>
            <h2>Thông tin liên hệ</h2>
            <p>Email: <b style={{color:"#007BFF"}}>nguynngocthanh@gmail.com</b></p>
            <p>Số điện thoại: 0123 456 789</p>
            <p>LinkedIn: <b style={{color:"#007BFF"}}>linkedin.com/in/nguyenngocthanh</b> </p>
        </div>
    )
}

export default Home
