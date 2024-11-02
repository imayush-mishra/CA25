import "./NavbarStyles.css";
import {FaBars, FaTimes} from "react-icons/fa";
import React, { useState } from 'react'
import img1 from "../assests/nobg.png"
import {Link} from "react-router-dom";
import about from "./About";
const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

  return (
    <div className="header">
            <img src={img1} alt="" className="img"/>
        <ul className={click ? "nav-menu active": "nav-menu"}>
            <li>
                <Link to={about}>About us</Link>
            </li>
            <li>
                <Link to="/">Why us?</Link>
            </li>
            <li>
                <Link to="/">Responsibilities</Link>
            </li>
            <li>
                <Link to="/">Terms</Link>
            </li>
            <li>
                <Link to="/">FaQs</Link>
            </li>
            <li>
                <Link to="/">Contact</Link>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{color:"white"}} />):
        (<FaBars size={20} style={{color:"white"}} />)}
        </div>
    </div>
  )
}

export default Navbar