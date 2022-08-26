import React from 'react';
import './header.css'
import {Link, useLocation} from "react-router-dom";

function Header(props) {
    const location = useLocation();
    const navItems = [
        {link: '/', text: 'Burger Builder'},
        {link: '/all-orders', text: 'Orders'},
    ]
    return (
        <div className="header">
            <div className="header-logo">Yummy Burgers</div>
            <div className="header-nav">
                <ul>
                    {
                        navItems.map((item) => <li
                                className={location.pathname === item.link ? 'nav-link nav-active' : 'nav-link'}
                            >
                                <Link to={item.link}>{item.text}</Link>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    );
}

export default Header;