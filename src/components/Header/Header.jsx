import React, { useRef, useState } from "react"
import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import "./Header.css"
import logo from "../../assets/logo-removebg-preview.png"

function Header() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return(
        <div className="header">
            <div className="img">
                <a href="/">
                <img src={logo} alt="site_logo" />
                </a>
            </div>
            <div className={`navbar ${navbarOpen ? "active" : ""}`}>
            <ul>                
                <li>
                    <Link to = "/"> Home </Link>
                </li>
                <li>
                    <HashLink smooth to = "/#about"> About </HashLink>
                </li>
                <li>
                    <HashLink smooth to = "/#achievements">  Achievements </HashLink>
                </li>
            </ul>
            </div>
            <div id="mobile" onClick={() => setNavbarOpen((prev) => !prev)}>
        <i id="bar" className={navbarOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
        </div>
    )
}
export default Header;