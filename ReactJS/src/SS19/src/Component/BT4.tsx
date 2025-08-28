import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
}

export default function RegisterForm() {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "" });
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const validate = () => {
    const newErrors: { name?: string; email?: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Trường này là bắt buộc";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Trường này là bắt buộc";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Email không hợp lệ";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert("Gửi thành công!");
    }
  };

  return (
    <div>
      <h2>📋 Đăng ký thông tin</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label>Họ tên</label><br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nhập họ tên..."
          />
          {errors.name && <p style={{ color: "red" }}>⚠ {errors.name}</p>}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Email</label><br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@gmail.com"
          />
          {errors.email && <p style={{ color: "red" }}>⚠ {errors.email}</p>}
        </div>

        <button type="submit" disabled={Object.keys(errors).length > 0}>
          Gửi
        </button>
      </form>
    </div>
  );
}
