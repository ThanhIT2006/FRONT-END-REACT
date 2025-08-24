import React, { Component } from "react";

interface BT1_Submit {
  Email: string;
}

type Submit = {
  submit: BT1_Submit[];
};

export default class BT1 extends Component<object, Submit> {
  constructor(props: object) {
    super(props);
    this.state = {
      submit: [
        {
          Email: "",
        },
      ],
    };
  }
  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(this.state.submit);
  };
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState({ submit: [{ ...this.state.submit[0], [name]: value }] });
  };
  render() {
    return (
      <div>
        <h2>Form</h2>
        <form onSubmit={this.handleSubmit}>
          <p>Email</p>
          <input
            type="text"
            name="Email"
            id="Email"
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
