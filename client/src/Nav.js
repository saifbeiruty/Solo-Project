import React from "react";
import { Link } from 'react-router-dom';
import './App.scss'

const Nav = () => {
    return (
        <nav>
            <h1>Welcome</h1>
            <ul className="nav-items">
                <Link to="/stocks">
                <li>Login</li>
                </Link>
                <Link to="/signup">
                    <li>Signup</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;