import React, { useRef, useState } from 'react'

const UseRef = () => {
  // const[changeColor,setColor] = useState('red')

  const fileRef = useRef()

  console.log(fileRef)


  // const chnageColorHandler = () => {
  //     setColor('yellow')
  // }
  // console.log('reRendring')
  return (
    <>
      {/* <h1 style={{backgroundColor:changeColor}}>Change my Color</h1> */}
      {/* <h1 ref={changeColor}>Change my Color</h1>
        <button onClick={chnageColorHandler}>Change Color</button> */}

      <div style={{ backgroundColor: 'beige', height: '5rem', width: '5rem' }} onClick={() => fileRef.current.click()}></div>

      <input type="file" onChange={(e) => console.log(e.target.file[0])} ref={fileRef} hidden />
    </>
  )
}

export default UseRef