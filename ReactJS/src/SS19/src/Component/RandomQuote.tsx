import React, { useState } from "react";

export default function RandomQuote() {
  const quotes: string[] = [
    "Học, học nữa, học mãi.",
    "Thất bại là mẹ thành công.",
    "Không gì là không thể.",
    "Kiến tha lâu đầy tổ.",
    "Muốn đi nhanh hãy đi một mình, muốn đi xa hãy đi cùng nhau."
  ];

  const [quote, setQuote] = useState<string>(quotes[0]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div style={{ maxWidth: "400px", padding: "20px", border: "1px solid white", borderRadius: "8px", textAlign: "center" }}>
      <h3>🧠 Câu nói truyền cảm hứng hôm nay:</h3>
      <p style={{ fontStyle: "italic", fontSize: "18px", margin: "20px 0" }}>
        "{quote}"
      </p>
      <button
        onClick={getRandomQuote}
        style={{ padding: "10px 20px", backgroundColor: "#007bff" }}
      >
        Lấy câu nói mới
      </button>
    </div>
  );
}
