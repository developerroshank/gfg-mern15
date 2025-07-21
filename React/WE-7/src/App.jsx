import { Button } from "./Button"
import Content from "./Content"
import Footer from "./Footer"
import Header from "./Header"
import Sidebar from "./Sidebar"

const App = () => {

  // Internal CSS
  const styles = {
    color: 'green',
    backgroundColor: 'blue'
    
  }

  return (
    // <div>
    //   <Header/>
    //   <Sidebar/>
    //   <Content/>
    //   <Footer/>
    // </div>
    
    
    // <React.Fragment>
    //   <Header/>
    //   <Sidebar/>
    //   <Content/>
    //   <Footer/>
    // </React.Fragment>

    // <>
    //   <Header/>
    //   <Sidebar/>
    //   <Content/>
    //   <Footer/>
    // </>

    <>

    {/* Inline CSS */}
    <h1 style={{color: 'red'}}>Hello</h1>

    {/* Internal CSS */}
    <h1 style={styles}>Hello</h1>
</>
  )
}



export {App}