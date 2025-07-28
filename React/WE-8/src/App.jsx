import { useState } from 'react'
import UseMemo from './UseMemo'
import UseRef from './UseRef'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <h1>{count}</h1> */}
        {/* <UseMemo/> */}
        <UseRef/>
    </>
  )
}

export default App
