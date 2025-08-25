import React, { Component } from "react";

interface State {
  subjects: string[];
}

export default class SubjectList extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      subjects: ["Toán", "Văn", "Anh", "Hóa", "Sinh"],
    };
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: "#222",
          padding: "20px",
          borderRadius: "10px",
          width: "350px",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "#fff" }}>Danh sách môn học</h1>
        {this.state.subjects.map((subject, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#dff6ff",
              padding: "10px",
              margin: "10px 0",
              borderRadius: "10px",
              fontSize: "18px",
              color: "#003366",
            }}
          >
            {subject}
          </div>
        ))}
      </div>
    );
  }
}
