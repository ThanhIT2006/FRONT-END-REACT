import React, {Component } from 'react';

interface State {
    message: string;
}

export default class Notification extends Component<object, State> {
    constructor(props: object) {
        super(props)
        this.state = {
            message: "Component đã mount xong!"
        };
    }
    componentDidMount() {
        console.log("Component đã được mount!");
    }
    render() {
        return (
            <>
            <div>{this.state.message}</div>
            </>
        )
        
    }
}

