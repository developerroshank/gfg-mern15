import React from 'react'

export const Button = (title, backgroundColor) => {

  return (
    <>
      <button style={backgroundColor}>{title}</button>
    </>
  )
}