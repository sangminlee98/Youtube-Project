import React from 'react';
import './navbar.css';

const Navbar = (props) => {
    return (
        <nav className="navbar">
            <span className="navbar-title">
                <i className=" navbar-title-icon fab fa-youtube"></i>
                <span className="navbar-title-name">Youtube</span>
            </span>
            <form className="navbar-search">
                <input className="navbar-search-input" type="text" placeholder="Search..." />
                <button className="navbar-search-button">
                    <i className="fas fa-search navbar-search-icon"></i>
                </button>
            </form>
            <span className="navbar-user">
                <i className="fas fa-user navbar-user-icon"></i>
            </span>
        </nav>
    )
};

export default Navbar;