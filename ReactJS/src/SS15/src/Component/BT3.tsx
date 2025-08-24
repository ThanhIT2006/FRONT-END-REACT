import { Component } from "react";

interface Date {
  date: string;
}

export default class BT3 extends Component<object, Date> {
  constructor(props: object) {
    super(props);
    this.state = {
      date: "",
    };
  }

  getHandleButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(this.state.date);
  };

  getHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ date: event.target.value });
  };

  render() {
    return (
      <div>
        <form>
          <p>Ngày sinh: {this.state.date}</p>
          <input
            type="date"
            name="ngaySinh"
            id="ngaySinh"
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
