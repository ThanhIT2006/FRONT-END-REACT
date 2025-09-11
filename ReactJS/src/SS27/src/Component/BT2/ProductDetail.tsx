import { useParams, Link } from "react-router-dom";
interface IProductData {
    id: number;
    title: string;
    price: number;
    description: string;
}
const dataTask: IProductData[] = [
    {
        id: 1,
        title: 'Laptop Dell XPS 13',
        price: 35000000,
        description:"Laptop xịn"
    },
    {
        id: 2,
        title: 'iPhone 14 Pro',
        price:30000000,
        description:"Điện thoại thông minh"
    },
    {
        id: 3,
        title: 'Samsung Galaxy S22',
        price: 25000000,
        description:"Điện thoại gập"
    },
     {
        id: 4,
        title: 'Tai nghe Sony WH-1000XM4',
        price: 7000000,
        description:"Tai nghe chống ồn"
    },
    {
        id: 5,
        title: 'Apple Watch Series 8',
        price: 12000000,
        description:"Đồng hồ thông minh"
    }
];
const ProductDetail = () => {
    const { id } = useParams<{ id: string }>();
    const task = dataTask.find(item => item.id === Number(id));
    return <div style={{position:"absolute",top:'0', width:'100%'}}>
        <div style={{backgroundColor: '#007BFF', paddingTop: '20px', paddingBottom: '5px', color: 'white',textAlign:'center'}}> 
            <h1>Trang Chi Tiết Sản Phẩm</h1>
            <p>Danh sách sản phẩm</p>
        </div>
        <h1>Chi Tiết Sản Phẩm</h1>
        <h2>{task?.title}</h2>
        <p>Giá: {task?.price.toLocaleString()} VND</p>
        <p>Mô tả: {task?.description}</p>
        <Link style={{ textDecoration: "none"}} to="/ProductList">Quay lại danh sách sản phẩm</Link>
    </div>
};

export default ProductDetail;
