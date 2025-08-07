type Product = {
    readonly id: string;
    name: string;
    price: number;
};

type OrderItem = {
    product: Product;
    quantity: number;
};

type Order = {
    orderId: string;
    customerName: string;
    items: OrderItem[];
    note?: string;
};

function calculateOrderTotal(order: Order): number {
    let total = 0;
    for (let item of order.items) {
        total += item.product.price * item.quantity;
    }
    return total;
}

function printOrder(order: Order): void {
    console.log(`Đơn hàng: #${order.orderId}`);
    console.log(`Khách hàng: ${order.customerName}`);
    console.log("Sản phẩm:");
    for (let item of order.items) {
        const name = item.product.name;
        const qty = item.quantity;
        const total = item.product.price * qty;
        console.log(`- ${name} × ${qty} → ${total} VND`);
    }
    console.log(`Tổng cộng: ${calculateOrderTotal(order)} VND`);
    if (order.note) console.log(`Ghi chú: ${order.note}`);
}

const order: Order = {
    orderId: "ORD001",
    customerName: "Nguyễn Văn A",
    items: [
        { product: { id: "P01", name: "Áo sơ mi", price: 250000 }, quantity: 2 },
        { product: { id: "P02", name: "Quần tây", price: 400000 }, quantity: 1 }
    ],
    note: "Giao sau 18h"
};

printOrder(order);
