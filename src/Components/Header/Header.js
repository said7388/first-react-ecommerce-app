import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div>
<<<<<<< HEAD
      <Link to='/'>
        <img src={logo} alt='' className='logo' />
      </Link>
      <nav className='navbar'>
        <Link to="/shop"> Shop </Link>
        <Link to="/review"> Review </Link>
        <Link to="/brand"> Brand </Link>
        <Link to="/about"> About </Link>
=======
      <img src={logo} alt="" className="logo"/>
      <nav className="navbar">
        <a href="/shop"> Shop </a>
        <a href="/review"> Overview </a>
        <a href="/brand"> Brand </a>
        <a href="/about"> About </a>
>>>>>>> 7f1a4c0e9a83f37249053ad41e21f3084308b2f9
      </nav>
    </div>
  );
};

export default Header;
