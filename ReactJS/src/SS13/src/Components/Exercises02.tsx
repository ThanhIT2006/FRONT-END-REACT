import React, { Component } from 'react';
interface state{
    id:number;
    fullname: string;
    date: Date;
    address: string;
}
export default class Exercises02 extends Component<object, state> {
    constructor(props: object) {
        super(props);
        this.state = {
            id:1,
            fullname: "Nguyễn Ngọc Thanh",
            date: new Date("2006-12-15"),
            address: "Hà Nội"
        };
    }
    render() {
        return(
            <div>
                <h1>Thông tin cá nhân</h1>
                <p style={{fontSize: '30px'}}>ID: <b>{this.state.id}</b></p>
                <p style={{fontSize: '30px'}}>Họ và tên: <b>{this.state.fullname}</b></p>
                <p style={{fontSize: '30px'}}>Ngày sinh: <b>{this.state.date.toLocaleDateString()}</b></p>
                <p style={{fontSize: '30px'}}>Địa chỉ: <b>{this.state.address}</b></p>
            </div>
        )
    }
}