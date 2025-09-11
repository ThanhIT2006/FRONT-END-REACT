import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div style={{position:"absolute",top:"0", width:"100%", textAlign:"center"}}>
      <div style={{ display: "flex", justifyContent:"space-evenly", paddingTop:"20px",paddingBottom:"20px",backgroundColor:"#007BFF", marginBottom:"100px" }}>
        <Link style={{color:"white"}} to="/">Home</Link>
        <Link style={{color:"white"}} to="/About">About</Link>
        <Link style={{color:"white"}} to="/Contact">Contact</Link>
      </div>
      <h4 >Chào mừng bạn đến với ứng dụng giới thiệu bản thân!</h4>
      <p>
        Đây là ứng dụng đơn giản giúp bạn tìm hiểu thêm về tôi. Hãy khám phá các
        trang khác để biết thêm chi tiết!
      </p>
    </div>
  );
};

export default Home;
