import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function Student() {
  const [input, setInput] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSearch = () => {
    setSearchParams({ studentName: input });
  };

  const studentName = searchParams.get("studentName");

  return (
    <div>
      <input
        type="text"
        style={{
          width: "400px",
          height: "40px",
          borderRadius: "5px",
          color: "black",
          backgroundColor: "white",
          padding: "5px",
        }}
        value={input}
        onChange={handleInputChange}
      />
      <Button variant="primary" onClick={handleSearch}>
        Tìm kiếm
      </Button>

      {studentName && (
        <h3 style={{ color: "black", marginTop: "20px" }}>Kết quả: {studentName}</h3>
      )}
    </div>
  );
}
