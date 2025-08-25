import React, { Component } from "react";

interface State {
  count: number;
}

export default class ClickCounter extends Component<object, State> {
  constructor(props: object) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <p>Clicked times: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
