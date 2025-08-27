import React, { useState, useCallback } from "react";

interface FormData {
  email: string;
  password: string;
}

export default function LoginForm() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(formData);
    },
    [formData]
  );

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email</label>
        <br />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Password</label>
        <br />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
