import React from 'react'
import './header.css'
function Header() {
    return (
        <header className='header'>
            <div className="header-top">
                <div className="header-top-menu">

                    <i className="bi bi-list"></i>

                </div>

                <div className="header-top-phone">
                    079-767-7693
                </div>

                <div className="header-top-text">
                    Welcome to online book store
                </div>

                <div className="header-top-link">
                    <i className="bi bi-person-fill"></i>
                    login
                </div>
            </div>
        </header>
    )
}

export default Header
