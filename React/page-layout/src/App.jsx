import React from 'react'
import "./App.css"
import Header from './Header'
import Sidebar from './Sidebar'
import Content from './Content'
import Footer from './Footer'

const App = () => {
  return (
    <div className='parent'>
      <Header/>
      <Sidebar/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default App