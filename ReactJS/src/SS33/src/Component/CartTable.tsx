import { useSelector } from "react-redux"
import type { CartType } from "../Store/Reducer/CartReducer"

function CartTable() {
    const cart=useSelector((state:CartType)=>{})
    return (
        <div style={{padding:"10px", width:"100%"}}>
            <table style={{width:"100%"}}>
                <thead>
                    <tr style={{borderBottom:"1px solid black"}}>
                        <th>STT</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{borderBottom:"1px solid black"}}>
                        <td>1</td>
                        <td>Cake</td>
                        <td>10 USD</td>
                        <td><div style={{border:"1px solid black", width:"50px"}}>15</div></td>
                        <td>
                            <button>Update</button>
                            <button>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div style={{display:"flex", justifyContent:"space-between", marginTop:"10px"}}>
                <p>There are 2 Item in your shopping cart</p>
                <p>630 USD</p>
            </div>
        </div>
    )
}

export default CartTable
