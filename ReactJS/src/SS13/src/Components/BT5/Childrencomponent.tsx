import React, { Component } from 'react';

interface Props {
    id: number;
    Productname: string;
    price: number;
    quantity: number;
}

export default class ChildrenComponent extends Component<Props> {
    render() {
        return (
            <div>
                <h2>Dữ liệu trong component con</h2>
                <p>ID: {this.props.id}</p>
                <p>Tên sản phẩm: {this.props.Productname}</p>
                <p>Giá: {this.props.price}</p>
                <p>Số lượng: {this.props.quantity}</p>
            </div>
        );
    }
}