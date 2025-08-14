import { Link } from "react-router"

const Header = () => {
  return (
    <header>
      <div className="logo">
        <span className="box">R</span>
        {/* oshan */}
      </div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/career">Career</Link>
        <Link to="/login" className="login">Login</Link>
      </nav>
    </header>
  )
}

export default Header