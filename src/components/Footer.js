import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
        <ul className="footer-list-1 footer-text">
            <li>Find me @</li>
            <a href="https://www.linkedin.com/in/tori-miller-pdx/" target="_blank" className="footer-link">LinkedIn</a>
            <br/>
            <a href="https://github.com/torimiller" className="footer-link">Github</a>
        </ul>
        <ul className="footer-list-2 footer-text">
            <Link to="/about" className="footer-link">About</Link>
            <br/>
            <Link to="/portfolio" className="footer-link">Portfolio</Link>
            <br/>
            <Link to="/contact" className="footer-link">Contact</Link>
        </ul>
        <p className="footer-copyright footer-text">Copyright &copy; 2020 Tori Miller</p>
        </div>
    )
}

export default Footer;