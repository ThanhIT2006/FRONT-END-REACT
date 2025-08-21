import React, {Component} from 'react'

interface State {
    message: string;
}

export default class Reactjs extends Component<object, State> {
    constructor(props: object) {
        super(props)
        this.state = {
            message: "Company: Rikkei Academy"
        };
    }
    handleToggle = () => {
        this.setState(prevState => ({
            message: prevState.message == "Company: Rikkei Academy"
                ? "Company: Rikkeisoft"
                : "Company: Rikkei Academy"
        }));
    }
    render(){
        return (
            <>
                <div style={{fontSize: '30px'}}>{this.state.message}</div><br />
                <button onClick={this.handleToggle}>Change state</button>
            </>
        )
    }
}

