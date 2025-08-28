import { useMemo } from "react";
interface ShoppingCart{
    id:number;
    name:string;
    price:number;
    quantity:number;
}
function ShoppingCart() {
    const cartItems: ShoppingCart[] = [
        { id: 1, name: "San pham A", price: 100000, quantity: 2 },
        { id: 2, name: "San pham B", price: 200000, quantity: 1 },
    ];
    const totalPrice=useMemo(()=>{
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    }, [cartItems]);
    return (
        <div>
            <h2>Shopping Cart</h2>
            <div>
                {cartItems.map(item => (
                    <div key={item.id}>
                        <h3>{item.name}</h3>
                        <p>Price: {item.price}</p>
                        <p>Quantity: {item.quantity}</p>
                    </div>
                ))}
            </div>
            <h3>Total Price: {totalPrice} VNĐ</h3>
        </div>
    )
}

export default ShoppingCart
