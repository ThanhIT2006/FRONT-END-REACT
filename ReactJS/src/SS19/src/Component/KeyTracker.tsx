import React, { useState, useEffect } from "react";

export default function KeyTracker() {
  const [lastKey, setLastKey] = useState<string>("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setLastKey(e.key.toUpperCase());
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div>
      <h3>⌨Phím bạn vừa nhấn:</h3>
      <div
        style={{
          border: "2px dashed #333",
          height: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {lastKey ? `[ ${lastKey} ]` : "Chưa có phím nào"}
      </div>
    </div>
  );
}
