import { Link } from "react-router-dom";
const ProductList = () => {
    return <div style={{position:"absolute",top:'0', width:'100%'}}>
        <div style={{backgroundColor: '#007BFF', paddingTop: '20px', paddingBottom: '5px', color: 'white',textAlign:'center'}}> 
            <h1>Trang Chi Tiết Sản Phẩm</h1>
            <p>Danh sách sản phẩm</p>
        </div>
        <div style={{backgroundColor:"#F9F9F9",height:"600px", paddingTop:"50px"}}>
            <h2>Danh sách sản phẩm</h2>
            <div style={{display:"flex",}}>
                <div style={{backgroundColor:"#FFFFFF", border:"1px solid #CCCCCC", borderRadius:"5px", padding:"10px", width:"200px", height:"120px", margin:"10px"}}>
                    <h5>LapTop Dell XPS 13</h5>
                    <p>Giá: 35,000,000 VND</p>
                    <Link to="/product/1" style={{color:"#007BFF"}}>Xem chi tiết</Link>
                </div>
                <div  style={{backgroundColor:"#FFFFFF", border:"1px solid #CCCCCC", borderRadius:"5px", padding:"10px", width:"200px", height:"120px", margin:"10px"}}>
                    <h5>Iphone 14 Pro</h5>
                    <p>Giá: 30,000,000 VND</p>
                    <Link to="/product/2" style={{color:"#007BFF"}}>Xem chi tiết</Link>
                </div>
                <div  style={{backgroundColor:"#FFFFFF", border:"1px solid #CCCCCC", borderRadius:"5px", padding:"10px", width:"250px", height:"120px", margin:"10px"}}>
                    <h5>Samsung Galaxy S22</h5>
                    <p>Giá: 25,000,000 VND</p>
                    <Link to="/product/3" style={{color:"#007BFF"}}>Xem chi tiết</Link>
                </div>
                <div  style={{backgroundColor:"#FFFFFF", border:"1px solid #CCCCCC", borderRadius:"5px", padding:"10px", width:"300px", height:"120px", margin:"10px"}}>
                    <h5>Tai nghe Sony WH-1000XM4</h5>
                    <p>Giá: 7,000,000 VND</p>
                    <Link to="/product/4" style={{color:"#007BFF"}}>Xem chi tiết</Link>
                </div>
                <div  style={{backgroundColor:"#FFFFFF", border:"1px solid #CCCCCC", borderRadius:"5px", padding:"10px", width:"250px", height:"120px", margin:"10px"}}>
                    <h5>Apple Watch Series 8</h5>
                    <p>Giá: 12,000,000 VND</p>
                    <Link to="/product/5" style={{color:"#007BFF"}}>Xem chi tiết</Link>
                </div>
            </div>
        </div>
    </div>
};

export default ProductList;
