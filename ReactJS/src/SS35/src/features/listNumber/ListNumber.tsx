import React from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store/store'
import { useDispatch } from 'react-redux'
import { random } from '../listNumber/ListNumberSlide';

export default function Number() {
    const randomValue = useSelector((state: RootState) => state.ListNumber.value)
    const dispatch = useDispatch();
  return (
    <div>
      <p>List number: [{randomValue}]</p>
      <button onClick={() => {dispatch(random())}}>Random number</button>
    </div>
  )
}