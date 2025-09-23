import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../store/store';
import { toggleTheme } from './themeSlide';

export default function Theme() {
    const mode = useSelector((state: RootState) => state.ChangeTheme.mode);
    const dispatch = useDispatch();
  return (
    <div>
        <div style={{ background: mode === 'dark' ? '#333' : '#FFF', color: mode === 'dark' ? '#FFF' : '#000' }}>
      <button onClick={() => dispatch(toggleTheme())}>Light</button>
      <button onClick={() => dispatch(toggleTheme())}>Dark</button>
      </div>
    </div>
  )
}