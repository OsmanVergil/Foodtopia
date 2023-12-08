import React from 'react'
import './myButton.css'

export default function MyButton({children, ...props}) {
  return (
    <button id='myBtn' {...props}>
        {children}
    </button>
  )
}
