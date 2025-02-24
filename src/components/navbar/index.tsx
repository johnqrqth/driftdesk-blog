import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import Button from "../button";
import { FaSearch } from "react-icons/fa";

const Navbar: React.FC = () => {
  return (
    <div className="navbar container">
      <div className="navbar-logo__main">
        <div className="navbar-logo">
          <Link to="/" className="app-image__div">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="navbar-logo__pagelinks">
          <ul>
            <li>Home</li>
            <li><Link to={'/users'}>Users</Link></li>
          </ul>
        </div>
      </div>
      <div>
        <ul className="navbar-logo__pagelinks">
          <li>
            <Button>Some text</Button>
          </li>
          <li>
            <FaSearch size={40}/>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
