import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Header extends Component {
    render() {
        return (
            <div className="header__wrapper" >
                <header className="header">
                    <Link to="/" className="logo">Tech Exposed</Link>
                    <input className="menu-btn" type="checkbox" id="menu-btn" />
                    <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
                    <ul className="menu">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/our-work">Our Work</Link></li>
                        <li><Link to="/our-team">Our Team</Link></li>
                        <li><Link to="/pricing">Pricing</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </header>
            </div>
        )
    }
}
export default Header;