import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { NavLink } from "react-router-dom"
import "./appbar.scss"

const AppBar = () => {
    return (
        <div className='header'>
            <div className="navbar">
                <div className="left-section">
                    <div className="logo-wrapper"><img src="https://yts.mx/assets/images/website/logo-YTS.svg" alt="YTS.MX" /></div>
                    <div className="slogan">HD movies at the smallest file size.</div>
                </div>
                <div className="right-section">
                    <div className="search-bar">
                        <FiSearch />
                        <input type="text" placeholder='Quick search' />
                    </div>
                    <div className="nav-list">
                        <NavLink to="#" className="link">Home</NavLink>
                        <NavLink to="#" className="link">4K</NavLink>
                        <NavLink to="#" className="link">Trending</NavLink>
                        <NavLink to="#" className="link">Browse Movies</NavLink>
                    </div>
                    <div className="login-register">
                        <NavLink to="#" className="link">Login</NavLink>
                        <div className="vertical-bar">|</div>
                        <NavLink to="#" className="link">Register</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppBar