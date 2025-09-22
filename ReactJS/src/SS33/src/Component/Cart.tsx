import CartTable from "./CartTable"


function Cart() {

    return (
        <div>
            <div style={{ width: '500px', padding:"5px" ,backgroundColor:"#F2DEDE", color:"#AD5C7B", border:"1px solid #AD5C7B", marginTop:"47px"}}>Your Cart</div>
            <div>
                <CartTable />
            </div>
            <div style={{backgroundColor:"#DFF0D8", padding:"10px"}}>Add to cart successfully</div>
        </div>
    )
}

export default Cart
