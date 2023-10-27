import React from "react";
import './styles/Navbar.css'
import logo from '../img/MOVIE1.png'


export const Navbar = () => {
  
  return(
    <nav className="container">
      <div className="logo">
        <img className="image-logo" src={logo} alt="logo"/>
      </div>
    </nav>
  );
}