import React from 'react'
import { GlobalTypes } from '../globals/index';
import '../styles/global.css'

export const AppWrapper:React.FC<GlobalTypes> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  )
}
