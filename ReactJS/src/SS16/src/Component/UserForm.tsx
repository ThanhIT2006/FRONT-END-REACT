import React, { Component } from "react";

interface State {
  name: string;
  email: string;
  age: number | string;
  errorEmail: string;
  errorAge: string;
  submittedData: { name: string; email: string; age: number | string } | null;
}

export default class UserForm extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      name: "",
      email: "",
      age: "",
      errorEmail: "",
      errorAge: "",
      submittedData: null,
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({ [name]: value } as unknown as Pick<State, keyof State>);
  };

  validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, age } = this.state;
    let errorEmail = "";
    let errorAge = "";

    if (!this.validateEmail(email)) {
      errorEmail = "Email không hợp lệ";
    }

    if (Number(age) <= 0) {
      errorAge = "Tuổi không được âm";
    }

    this.setState({ errorEmail, errorAge });

    if (!errorEmail && !errorAge) {
      this.setState({
        submittedData: { name, email, age },
      });
    }
  };

  handleReset = () => {
    this.setState({
      name: "",
      email: "",
      age: "",
      errorEmail: "",
      errorAge: "",
      submittedData: null,
    });
  };

  render() {
    const { name, email, age, errorEmail, errorAge, submittedData } =
      this.state;

    return (
      <div
        style={{
          maxWidth: "400px",
          margin: "20px auto",
          padding: "20px",
          border: "1px solid #ccc",
        }}
      >
        <form onSubmit={this.handleSubmit}>
          <h3>Nhập thông tin người dùng</h3>
          <input
            style={{
              backgroundColor: "cyan",
              padding: "10px",
              width: "300px",
              borderRadius: "5px",
              border: "none",
              marginBottom: "10px",
            }}
            type="text"
            name="name"
            placeholder="Họ tên"
            value={name}
            onChange={this.handleChange}
          />
          <br />
          <input
            style={{
              backgroundColor: "cyan",
              padding: "10px",
              width: "300px",
              borderRadius: "5px",
              border: "none",
              marginBottom: "10px",
            }}
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={this.handleChange}
          />
          {errorEmail && <p style={{ color: "red" }}>⚠ {errorEmail}</p>}
          <br />
          <input
            style={{
              backgroundColor: "cyan",
              padding: "10px",
              width: "300px",
              borderRadius: "5px",
              border: "none",
              marginBottom: "10px",
            }}
            type="number"
            name="age"
            placeholder="Tuổi"
            value={age}
            onChange={this.handleChange}
          />
          {errorAge && <p style={{ color: "red" }}>⚠ {errorAge}</p>}
          <br />
          <button style={{ backgroundColor: "blue" }} type="submit">
            Gửi
          </button>
          <button
            style={{ backgroundColor: "blue", marginLeft: "140px" }}
            type="button"
            onClick={this.handleReset}
          >
            Xóa tất cả
          </button>
        </form>

        {submittedData && (
          <div
            style={{
              marginTop: "20px",
              padding: "10px",
              backgroundColor: "#cacaf6ff",
              textAlign: "center",
            }}
          >
            <h4>Thông tin đã nhập:</h4>
            <p>Họ tên: {submittedData.name}</p>
            <p>Email: {submittedData.email}</p>
            <p>Tuổi: {submittedData.age}</p>
          </div>
        )}
      </div>
    );
  }
}
