  
import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';



const Navbar = () => {
    return (
        <nav className="nav-wrapper">
            <div className="nav-h1">
                <h1>Tori Miller</h1>
            </div>
            <div className="nav-item nav-item-about">
                <Link to='/about' className="nav-link about-link">About</Link>
            </div>
            <div className="nav-item nav-item-portfolio">
                <Link to='/portfolio' className="nav-link portfolio-link">Portfolio</Link>
            </div>
            <div className="nav-item nav-item-contact">
                <Link to='/contact' className="nav-link contact-link">Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar;