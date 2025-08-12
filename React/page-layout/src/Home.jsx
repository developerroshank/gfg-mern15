import React from 'react'
import './assets/css/Style.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <div className='parent'>
      <Header/>
      <Sidebar/>
      <Content/>
      <Footer/>
    </div>
    </>
  )
}

export default App