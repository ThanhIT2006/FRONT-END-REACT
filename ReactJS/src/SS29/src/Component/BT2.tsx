import React, { useEffect, useState } from "react";

interface IProduct {
  id: number;
  product_name: string;
  image: string;
  price: number;
  quantity: number;
  created_at: string;
}
export default function B2() {
const [products, setProducts] = useState<IProduct[]>([]);
      const getAllProduct = () => {
    return fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        return data; 
      })
      .catch((err) => {
        console.error("Lỗi fetch:", err);
        return []; 
      });
  };

  useEffect(() => {
    getAllProduct().then((data) => {
      setProducts(data); 
    });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Danh sách sản phẩm</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id} style={{ marginBottom: "20px" }}>
            <h3>{p.product_name}</h3>
            <img
              src={p.image}
              alt={p.product_name}
              style={{ width: "150px", height: "auto" }}
            />
            <p>Giá: {p.price.toLocaleString()} VND</p>
            <p>Số lượng: {p.quantity}</p>
            <p>Ngày tạo: {p.created_at}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}