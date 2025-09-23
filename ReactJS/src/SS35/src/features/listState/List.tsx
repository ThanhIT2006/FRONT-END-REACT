import React from 'react'
import type { RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { setListMode } from './ListSlide';

export default function List() {
    const mode = useSelector((state: RootState) => state.ListState.mode as 'list' | 'grid');
    const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(setListMode('list'))}>List mode</button>
      <button onClick={() => dispatch(setListMode('grid'))}>Grid mode</button>
      <div> {mode === 'list' ? '' : ''}</div>
      <div style={{display: mode === 'list' ? 'block' : 'grid', gridTemplateColumns: '4fr 4fr', gap: '10px'}}>
      <p style={{border: '1px solid tomato', textAlign: 'center', backgroundColor: 'tomato', color: 'black'}}>1</p>
      <p style={{border: '1px solid tomato', textAlign: 'center', backgroundColor: 'tomato', color: 'black'}}>2</p>
      <p style={{border: '1px solid tomato', textAlign: 'center', backgroundColor: 'tomato', color: 'black'}}>3</p>
      <p style={{border: '1px solid tomato', textAlign: 'center', backgroundColor: 'tomato', color: 'black'}}>4</p>
      </div>
    </div>
  )
}