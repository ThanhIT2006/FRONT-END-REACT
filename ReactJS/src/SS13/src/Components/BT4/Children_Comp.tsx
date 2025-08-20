import React, { Component } from 'react';
interface state{
    fullname: string;
}
export default class ChildrenComp extends Component<state> {
    render() {
        return(
            <div>
                <p style={{fontSize: '30px'}}>Họ và tên bên components con: <b>{this.props.fullname}</b></p>
            </div>
        )
    }
}