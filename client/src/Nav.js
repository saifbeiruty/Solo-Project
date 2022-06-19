import React from "react";
import { Link } from 'react-router-dom';
import './App.scss'

const Nav = () => {
    return (
        <nav>
            <h1>Welcome</h1>
            <ul className="nav-items">
                <li>Login</li>
                <Link to="/signup">
                    <li>Signup</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;