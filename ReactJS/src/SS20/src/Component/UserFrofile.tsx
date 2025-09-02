import React, { useState } from "react";

function UserProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Thông tin người dùng</h2>
        <input type="text" placeholder="Nhập tên" value={name} onChange={(e) => setName(e.target.value)}/><br />
        <input type="text" placeholder="Nhập email" value={email} onChange={(e) => setEmail(e.target.value)}/><br />
        <button type="submit">Gửi</button>
      </form>

      {submitted && (
        <div>
          <p>Tên: {name}</p>
          <p>Email: {email}</p>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
