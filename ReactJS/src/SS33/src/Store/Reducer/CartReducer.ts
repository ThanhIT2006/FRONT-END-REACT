export interface CartType{
    id:number,
    name:string,
    quantity:number,
}
const initCarts:CartType[]=[]
type Action={type:string,payload?:any}
function CartReducer(state=initCarts,action:Action) {
    return state
}
export default CartReducer;