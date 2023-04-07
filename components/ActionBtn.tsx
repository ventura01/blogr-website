import React from 'react'

type ButtonProps = {
    text:string,
    className:string
}

const ActionBtn = ({text, className}: ButtonProps) => {
  return (
    <button className={`${className}`}>{text}</button>
  )
}

export default ActionBtn