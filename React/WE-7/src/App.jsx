import React from 'react'
import { useState } from 'react'
import Button from './Button'


const App = () => {

  // Increament & Decreament

  // const [count, setCount] = useState(0)

  // const incHan = () => {
  //   if (count < 10) {
  //     setCount(count => count + 1)
  //   }
  // }
  // const decHan = () => {
  //   if (count > 0) {

  //     setCount(count => count - 1)
  //   }
  // }

  // Toggle 
  // const[name,setName] = useState(false)

  // const valueToggle = () => {
  //   setName(!name)
  // }

  const buttons = [
    {
      title: 'Login',
      backgroundColor: 'red',
    },
    {
      title: 'Sign Up',
      backgroundColor: 'yellow',
    },
    {
      title: 'Submit',
      backgroundColor: 'blue',
    },
    {
      title: 'Login',
      backgroundColor: 'green',
    },
  ]

  return (
    <>
      {/* Increament & Decreament */}
      {/* <h1>{count}</h1>
      <button onClick={incHan}>Increase</button>
      <button onClick={decHan}>Decrease</button> */}

      {/* Value Toggle */}
      {/* <h1>{name ? "abc" : "xyz"}</h1>
      // <button onClick={valueToggle}>Toggle</button> */}


      {/* <Button title='Submit' backgroundColor='green'/> */}

      {buttons.map(({ title, backgroundColor }) => {
        <Button key={title} title={title} backgroundColor={backgroundColor} />
      })}

      <p>hello</p>

    </>
  )
}

export default App