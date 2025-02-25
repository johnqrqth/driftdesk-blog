import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import Button from "../button";
import { FaSearch } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { Drawer } from "@mui/material";
import { IoMdClose } from "react-icons/io";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="mobile">
        <div className="navbar-logo">
          <Link to="/" className="app-image__div">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div>
          <RxHamburgerMenu size={36} onClick={() => setOpen(true)} />
        </div>
      </div>
      <div className="desktop">
        <div className="navbar-logo__main">
          <div className="navbar-logo">
            <Link to="/" className="app-image__div">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="navbar-logo__pagelinks">
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/users"}>Users</Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <ul className="navbar-logo__pagelinks">
            <li>
              <Button>Some text</Button>
            </li>
            <li>
              <FaSearch size={40} />
            </li>
          </ul>
        </div>
      </div>
      <Drawer open={open} onClose={() => setOpen(false)} className="">
        <div className="navbar-drawer g-[#3d3d3d] w-[50vw] h-[100%] p-5 sm:w-[35vw]">
          <IoMdClose
            size={30}
            className="text-white"
            onClick={() => {
              setOpen(false);
            }}
          />
          <ul className="home-drawer__ul">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/users"}>Users</Link>
            </li>
          </ul>
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
