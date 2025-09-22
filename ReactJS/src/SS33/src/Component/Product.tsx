import { Button } from "react-bootstrap";
import type { ProductType } from "../Store/Reducer/ProductReducer";
function Product({products}:{products:ProductType}) {
  return (
    <div style={{ display: "flex", width: "500px",padding:"10px"}}>
      <img
        style={{ width: "100px", height: "80px", marginRight: "10px" }}
        src={products.image}
        alt=""
      />
      <div>
        <h5>{products.name}</h5>
        <p>
            Description: {products.description}
        </p>
      </div>
      <div style={{display: "flex",gap: "10px",justifyContent:"space-between",alignItems:"center", flexDirection:"column"}}>
        <div style={{border:"1px solid black", width:"60px",textAlign:"center"}}>{products.amount}</div>
        <Button style={{backgroundColor:"#FF6633",border:"none", width:"60px", borderRadius:0}}>{products.price}$</Button>
      </div>
    </div>
  );
}

export default Product;
