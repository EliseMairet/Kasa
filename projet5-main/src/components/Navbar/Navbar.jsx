import React from "react";
import "./Navbar.scss"
import logo from "../../assets/logo.png"
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
    <nav className="navbar">
        <div className="navbar_logo">
            <img src={logo} alt="logo Kasa"/>
        </div>
        <NavLink to="/">
        <div>Accueil</div>
        </NavLink>
        <NavLink to="/about">
            <div>A Propos</div>
        </NavLink> 
    </nav>
    )
}

export default Navbar;