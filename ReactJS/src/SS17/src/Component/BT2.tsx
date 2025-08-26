import React, { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export default function BT2() {
  const [product] = useState<Product>({
    id: 1,
    name: "Coca cola",
    price: 1000,
    quantity: 10
  });

  return (
    <div>
      <h2>Thông tin sản phẩm</h2>
      <p>Id: {product.id}</p>
      <p>Name: {product.name}</p>
      <p>Price: {product.price} $</p>
      <p>Quantity: {product.quantity}</p>
    </div>
  );
}
