import React, { Component } from 'react';
import ChildrenComponent from './Childrencomponent'; 

interface state {
    id:number;
    Productname: string;
    price: number;
    quantity: number;
}

export default class Parent_Comp extends Component<object, state> {
    constructor(props: object) {
        super(props);
        this.state = {
            id: 1,
            Productname: "Bưởi ba roi",
            price:12000,
            quantity:6
        };
    }
    render() {
        return (
            <div>
                <ChildrenComponent id={this.state.id} Productname={this.state.Productname} price={this.state.price} quantity={this.state.quantity} />
            </div>
        );
    }
}