import React from 'react';
import './header.css'
import {Link} from "react-router-dom";

function Header(props) {
    return (
        <div className="header">
            <div className="header-logo">LOGO</div>
            <div className="header-nav">
                <ul>
                    <li className='nav-link'><Link to={'/'}>Burger Builder</Link></li>
                    <li className='nav-link'><Link to='/all-orders'>Orders</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;