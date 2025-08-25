import React, { Component } from "react";

interface State {
  isDarkMode: boolean;
}

export default class ThemeSwitcher extends Component<object, State> {
  constructor(props: object) {
    super(props);

    this.state = {
      isDarkMode: false,
    };
  }

  toggleTheme = () => {
    this.setState((prevState) => ({
      isDarkMode: !prevState.isDarkMode,
    }));
  };

  render() {
    const { isDarkMode } = this.state;

    const containerStyle = {
      backgroundColor: isDarkMode ? "#222" : "#fff",
      color: isDarkMode ? "#fff" : "#000",
      padding: "30px",
    };

    const buttonStyle = {
      backgroundColor: "#007bff",
      padding: "10px 20px",
      borderRadius: "8px",
      fontSize: "16px",
    };

    return (
      <div style={containerStyle}>
        <h3>{isDarkMode ? "Chế độ Tối đang bật" : "Chế độ Sáng đang bật"}</h3>
        <button style={buttonStyle} onClick={this.toggleTheme}>
          Chuyển theme
        </button>
      </div>
    );
  }
}
