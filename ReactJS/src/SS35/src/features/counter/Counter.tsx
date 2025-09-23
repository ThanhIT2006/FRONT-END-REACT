import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../store/store'
import { decrement, increment, reset } from './CounterSlide';

export default function Counter() {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch();
  return (
    <div>
      <p style={{textAlign: 'center'}}>{count}</p>
        <button onClick={() => {dispatch(increment())}}> Increment </button>
        <button onClick={() => {dispatch(decrement())}}> Decrement </button>
        <button onClick={() => {dispatch(reset())}}> Reset </button>
    </div>
  )
}