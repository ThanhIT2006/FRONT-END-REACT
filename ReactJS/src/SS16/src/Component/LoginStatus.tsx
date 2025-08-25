import React, { Component } from "react";

interface State {
  isloggedin: boolean;
}

export default class LoginStatus extends Component<object, State> {
  constructor(props: object) {
    super(props);

    this.state = {
      isloggedin: false,
    };
  }
  toggleLogin = () => {
    this.setState((prevState) => ({
      isloggedin: !prevState.isloggedin,
    }));
  };  
  render() {
    const { isloggedin } = this.state;
    return (
      <div
        style={{
          backgroundColor: "lightcyan",
          padding: "15px",
          paddingBottom: "25px",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        <h3 style={{ color: "#222" }}>
          {isloggedin ? "Xin chào, User!" : "Vui lòng đăng nhập để tiếp tục."}
        </h3>
        <button onClick={this.toggleLogin} style={{ backgroundColor: "blue" }}>
          {isloggedin ? "Đăng xuất" : "Đăng nhập"}
        </button>
      </div>
    );
  }
}
