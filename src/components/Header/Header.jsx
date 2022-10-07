import React from 'react';
import {Link} from "react-router-dom";
import './Header.css'

export default function Header() {
  return (
    <>
        <header className="header">
        <nav className="navbar">
            <div className="navbar-logo">Logo</div>
            <div className="navbar-btn">
                <Link to={"/Signup"}>signup</Link>
                <Link to={"/Signin"}>signin</Link>
            </div>
        </nav>
    </header>
    </>
  )
}
