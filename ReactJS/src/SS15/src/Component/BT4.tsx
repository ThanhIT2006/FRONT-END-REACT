import { Component } from "react";

interface Slider {
  progress: number;
}

export default class BT4 extends Component<object, Slider> {
  constructor(props: object) {
    super(props);
    this.state = {
      progress: 0,
    };
  }

  getHandleButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(this.state.progress);
  };

  getHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ progress: Number(event.target.value) });
  };

  render() {
    return (
      <div>
        <form>
          <p>Tiến độ hoàn thành: {this.state.progress}%</p>
          <input
            type="range"
            name="progress"
            id="progress"
            min="0"
            max="100"
            onChange={this.getHandleChange}
          />
          <br />
          <button type="submit" onClick={this.getHandleButton}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
