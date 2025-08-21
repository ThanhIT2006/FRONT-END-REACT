import React, { Component } from 'react'

interface State {
  message: string;
}

export default class ReactChange extends Component<object, State> {
  constructor(props: object) {
    super(props);

    this.state = {
      message: "Slogan: Học code để đi làm"
    };
  }

  changeMessage = () => {
    this.setState({
      message: "Slogan: Học code sẽ thành công. Cố lên!!!"
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.changeMessage}>Change state</button>
      </div>
    );
  }
}
