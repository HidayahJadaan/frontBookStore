import React from 'react'
import './header.css'

export default function Navbar({toggle,setToggle}) {
    return (
        <nav style={{left: toggle && "0"}} className='navbar'>

            <ul className="navbar-links">

                <li className="navbar-link" onClick={()=>{setToggle(false)}}>Home</li>
                <li className="navbar-link"  onClick={()=>{setToggle(false)}}>Authors</li>
                <li className="navbar-link"  onClick={()=>{setToggle(false)}}>About Us</li>
                <li className="navbar-link"  onClick={()=>{setToggle(false)}}>Contact US</li>
                <li className="navbar-link"  onClick={()=>{setToggle(false)}}>Register</li>
            </ul>

        </nav>
    )
}
