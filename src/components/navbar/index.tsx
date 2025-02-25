import React, { Fragment, useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import Button from "../button";
import { FaSearch } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { Drawer, } from "@mui/material";
import { IoMdClose } from "react-icons/io";
import { Dialog, Transition, TransitionChild } from "@headlessui/react";
import SearchComponent from "../search";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false)

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
              <FaSearch size={40}/>
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
      <Transition appear show={openSearch} as={Fragment}>
              <Dialog
                as="div"
                className="relative z-50"
                onClose={() => {
                  setOpenSearch(false);
                }}
              >
                <TransitionChild
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-gray-200 bg-opacity-50 dark:bg-gray-600 dark:bg-opacity-20" />
                </TransitionChild>
  
                <div className="fixed inset-0 overflow-y-auto h-full">
                  <div className="flex min-h-full items-end justify-end text-center">
                    <TransitionChild
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 -right-[400px]"
                      enterTo="opacity-100 right-0"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 right-0"
                      leaveTo="opacity-0 -right-[400px]"
                    >
                      <SearchComponent onClose={() => setOpenSearch(false)} />
                    </TransitionChild>
                  </div>
                </div>
              </Dialog>
            </Transition>
    </div>
  );
};

export default Navbar;
