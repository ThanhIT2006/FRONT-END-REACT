import React, { useState } from "react";

interface BT1 {
  name: string;
}

export default function BT1() {
  const [name] = useState<string>("Nguyễn Văn A");

  return (
    <div>
      <h2>Họ và tên: {name}</h2>
    </div>
  );
}
