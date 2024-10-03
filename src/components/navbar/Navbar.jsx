import { useState } from 'react'
import './navbar.scss';

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <nav className="navbar">
            <h1>hairs'</h1>
            <div className={`burger ${isNavOpen ? "open" : ""}`} onClick={toggleNav}>
                <div className="line line1"></div>
                <div className="line line2"></div>
                <div className="line line3"></div>
            </div>
            {
                isNavOpen &&
                <div className="nav-links">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Testimonials</a>
                    <a href="#">Contact</a>
                </div>
            }
        </nav>
    )
}

export default Navbar
