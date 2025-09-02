import React, { useReducer } from 'react'

interface State{
    count:number;
    name:string;
}
type action={type:'increase'} | {type:'decrease'}

function reducer(state:State, action:action){
    switch (action.type) {
        case 'increase':
            return {...state, count: state.count + 1};
        case 'decrease':
            return {...state, count: state.count - 1};
        default:
            return state;
    }
}
function Counter() {
    const [state,dispatch]=useReducer(reducer,{count:0,name:''})
    return (
        <div>
            <h2>{state.count}</h2>
            <button onClick={() => dispatch({type:'increase'})}>Tăng</button>
            <button onClick={() => dispatch({type:'decrease'})}>Giảm</button>
        </div>
    )
}

export default Counter
