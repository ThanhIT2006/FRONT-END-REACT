import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

interface IProducts {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products: IProducts[] = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: 29990000,
    description: "Điện thoại cao cấp với chip A17 Pro và camera tiên tiến.",
  },
  {
    id: 2,
    name: "Samsung Galaxy S23 Ultra",
    price: 26990000,
    description: "Smartphone flagship của Samsung với camera 200MP.",
  },
  {
    id: 3,
    name: "MacBook Air M2",
    price: 28990000,
    description: "Laptop mỏng nhẹ với chip Apple M2 hiệu năng mạnh mẽ.",
  },
  {
    id: 4,
    name: "Dell XPS 13",
    price: 25990000,
    description: "Laptop siêu mỏng với màn hình InfinityEdge sắc nét.",
  },
  {
    id: 5,
    name: "iPad Pro 12.9",
    price: 31990000,
    description: "Máy tính bảng cao cấp với màn hình Liquid Retina XDR.",
  },
];
function B4_ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const searchValue = searchParams.get("search") || "";
    setKeyword(searchValue);
  }, [searchParams]);

  const handleSearch = () => {
    if (keyword.trim() !== "") {
      setSearchParams({ search: keyword });
    } else {
      setSearchParams({});
    }
  };

  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(keyword.toLowerCase()) ||
      p.description.toLowerCase().includes(keyword.toLowerCase())
  );
  return (
    <div style={{ padding: "20px" }}>
      <h2>Danh sách sản phẩm</h2>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Nhập từ khóa..."
          style={{ padding: "5px", marginRight: "5px" }}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <ul>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <li key={item.id} style={{ marginBottom: "10px" }}>
              <strong>{item.name}</strong> - {item.price.toLocaleString()} VND
              <br />
              <em>{item.description}</em>
            </li>
          ))
        ) : (
          <p>Không tìm thấy sản phẩm nào.</p>
        )}
      </ul>
    </div>
  );
}

export default B4_ProductList;
