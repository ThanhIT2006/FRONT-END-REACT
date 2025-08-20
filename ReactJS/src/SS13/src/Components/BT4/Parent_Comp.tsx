import React, { Component } from 'react';
import ChildrenComp from './Children_Comp';
interface state{
    fullname: string;
}
export default class Parent_Comp extends Component<object, state> {
    constructor(props: object) {
        super(props);
        this.state = {
            fullname: "Nguyễn Ngọc Thanh"
        };
    }
    render() {
        return(
            <div>
                <p style={{fontSize: '30px'}}>Họ và tên bên components cha: <b>{this.state.fullname}</b></p>
                <ChildrenComp fullname={this.state.fullname} />
            </div>
        )
    }
}