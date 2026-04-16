import React from 'react'

export default function HeaderTop({setToggle, toggle}) {
  return (
   <div className="header-top">
                <div className="header-top-menu" onClick={()=> setToggle(prev => !prev)}>

                    {toggle ? <i className="bi bi-x-lg"></i>: <i className="bi bi-list"></i>}

                </div>

                <div className="header-top-phone">
                    <i className="bi bi-telephone-fill"></i>
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
  )
}
