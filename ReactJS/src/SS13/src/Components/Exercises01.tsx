import React, { Component } from 'react';
interface state{
    fullname: string;
}
export default class Exercises01 extends Component<object, state> {
    constructor(props: object) {
        super(props);
        this.state = {
            fullname: "Nguyễn Ngọc Thanh"
        };
    }
    render() {
        return(
            <div>
                <p style={{fontSize: '30px'}}>Họ và tên: <b>{this.state.fullname}</b></p>
            </div>
        )
    }
}