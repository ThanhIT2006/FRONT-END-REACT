import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <div
        className="position-relative bg-info bg-opacity-50 p-5 rounded"
        style={{ width: "250px", height: "150px" }}
      >
        <p>Relative parent</p>
        <div className="position-absolute bottom-0 start-0 bg-info text-white fw-bold p-2 rounded">
          Absolute child
        </div>
      </div>
    </div>
  );
}

export default App;
