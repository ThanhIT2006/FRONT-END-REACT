import React, { Component } from 'react';
interface state {
    people: Array<{
        id: number;
        fullname: string;
        age: number;
    }>
}

export default class Exercises3 extends Component<object, state> {
    constructor(props: object) {
        super(props);
        this.state = {
            people: [
                { id: 1, fullname: "john", age: 30 },
                { id: 2, fullname: "Mary", age: 25 },
                { id: 3, fullname: "jane", age: 20 }
            ]
        };
    }
    render() {
        return(
            <div>
                <table style={{textAlign: 'center'}} border={1}>
                    <thead>
                        <tr>
                            <th style={{padding: '7px'}}>ID</th>
                            <th style={{padding: '7px'}}>Name</th>
                            <th style={{padding: '7px'}}>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.people.map(person => (
                            <tr key={person.id}>
                                <td>{person.id}</td>
                                <td>{person.fullname}</td>
                                <td>{person.age}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                
            </div>
        )
    }
}