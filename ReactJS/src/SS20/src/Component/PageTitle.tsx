import React, { useEffect, useState } from "react";

export default function PageTitle() {
  const [value, setValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    document.title = value;
  }, [value]);

  return (
    <div>
      <h3>Chào mừng đến với trang của chúng tôi!</h3>
      <input
        type="text"
        placeholder="Nhập tên của bạn"
        onChange={handleChange}
      />
      <p>Tiêu đề này sẽ thay đổi khi bạn nhập tên vào trường tên</p>
    </div>
  );
}
