import { Link } from "react-router-dom"
import "./Navbar.scss"

function Navbar() {
  return (
    <>
    <header>
    <nav>
      <div className="pagelogo">Start Bootstrap</div>
        <ul className="nav_ul">
          <li>
            <Link className="navbar_pages" to="/">Home</Link>
          </li>
          <li>
            <Link className="navbar_pages" to="/About">About</Link>  
          </li>
          <li>
            <Link className="navbar_pages" to="/SamplePost">Sample Post</Link>
          </li>
          <li>
            <Link className="navbar_pages" to="/Contact">Contact</Link>
          </li>
        </ul>
       
      <div className="dropdown_div"> <button className="dropdown">MENU<i className="fa-solid fa-bars"></i></button></div>
      </nav>
    </header>
    </>
  )
}

export default Navbar
