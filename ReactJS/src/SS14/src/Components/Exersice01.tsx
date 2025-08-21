import React, { Component } from 'react'

interface State {
    userName: string;
}

export default class Exercise01 extends Component<object, State> {
    constructor(props: object) {
        super(props);
        this.state ={
            userName: "Nguyễn Ngọc Thanh",
        };
    }
  render() {
    return (
      <>
      <div>{this.state.userName}</div>
      </>
    )
  }
}