import React, { Component } from "react";

type InitialState = {
  gender: string;
  submitted: boolean;
};

export default class BT6 extends Component<object, InitialState> {
  constructor(props: object) {
    super(props);
    this.state = {
      gender: "",
      submitted: false,
    };
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.setState({ submitted: true });
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ gender: e.target.value, submitted: false });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>Giới tính: {this.state.submitted && <span>{this.state.gender}</span>}</p>
          <input
            type="radio"
            onChange={this.handleChange}
            value="Nam"
            name="gender"
            checked={this.state.gender === "Nam"}
          />
          <label>Nam</label>
          <br />
          <input
            type="radio"
            onChange={this.handleChange}
            value="Nữ"
            name="gender"
            checked={this.state.gender === "Nữ"}
          />
          <label>Nữ</label>
          <br />
          <input
            type="radio"
            onChange={this.handleChange}
            value="Khác"
            name="gender"
            checked={this.state.gender === "Khác"}
          />
          <label>Khác</label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
