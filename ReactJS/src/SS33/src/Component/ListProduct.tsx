import { useSelector } from "react-redux"
import  { type ProductType }  from "../Store/Reducer/ProductReducer"
import Product from "./Product"
function ListProduct() {
    const products=useSelector((state:ProductType[])=>{return state})
    return (
        <div>
            <h2>Shopping Cart</h2>
            <div>
                <div style={{ width: '500px', padding:"5px" ,backgroundColor:"#337AB7", color:"white"}}>List Products</div>
            </div>
            <div style={{border:"1px solid #337AB7"}}>
                {products.map((product)=><Product key={product.id} products={product}></Product>)}
            </div>
        </div>
    )
}

export default ListProduct
