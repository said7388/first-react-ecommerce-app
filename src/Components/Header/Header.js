import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Link to='/'>
        <img src={logo} alt='' className='logo' />
      </Link>
      <nav className='navbar'>
        <Link to="/shop"> Shop </Link>
        <Link to="/review"> Review </Link>
        <Link to="/login"> Login </Link>
        <Link to="/registration"> Sign Up </Link>
        <Link to="/about"> About </Link>
      </nav>
    </div>
  );
};

export default Header;
