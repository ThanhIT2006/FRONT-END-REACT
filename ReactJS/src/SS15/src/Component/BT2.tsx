import { Component } from "react";

interface Color {
  color: string;
  submittedColor: string;
}

export default class BT2 extends Component<object, Color> {
  constructor(props: object) {
    super(props);
    this.state = {
      color: "",
      submittedColor: "",
    };
  }

  getHandleButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    this.setState({ submittedColor: this.state.color });
  };

  getHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ color: event.target.value });
  };

  render() {
    return (
      <div>
        <h2>Color: {this.state.color}</h2>
        <form>
          <h3>Form</h3>
          <p>Màu sắc</p>
          <input
            type="color"
            name="color"
            id="color"
            onChange={this.getHandleChange}
          />
          <br />
          <button onClick={this.getHandleButton}>Submit</button>
        </form>
      </div>
    );
  }
}
