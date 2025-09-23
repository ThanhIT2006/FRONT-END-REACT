import React from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store/store'
import { useDispatch } from 'react-redux'
import { setLanguage } from './LanguageSlide'

export default function Language() {
    const LanguageChange = useSelector((state: RootState) => state.Language.value)
    const dispatch = useDispatch();
  return (
    <div>
      <select name="language" value={LanguageChange} onChange={(e) => dispatch(setLanguage(e.target.value))}>
        <option value="English">English</option>
        <option value="Vietnamese">Vietnamese</option>
      </select>
      <p>{LanguageChange === 'English' ? 'Rikkei Academy' : 'Học viện Rikkei'}</p>
    </div>
  )
}