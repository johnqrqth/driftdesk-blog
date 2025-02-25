import React from "react";
import "./footer.css";
import Button from "../button";
import Logo from "../../assets/logo.svg";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer-innerdiv">
        <div className="footer-innerdiv__title">
          <p className="footer-innerdiv__p">What are you looking for</p>
          <Button className="footer-innerdiv__button">
            <p className="footer-button__p">Get Started</p>
          </Button>
        </div>
        <div className="footer-innerdiv__content">
          <div className="footer-innerdiv__img">
            <img src={Logo} alt="the logo" />
          </div>
          <div className="footer-innerdiv-lists">
            <p>Company</p>
            <ul className="footer-innerdiv-list__ul">
              <li className="footer-innerdiv-list__li">enkk dislass</li>
              <li className="footer-innerdiv-list__li">some la te</li>
              <li className="footer-innerdiv-list__li">tera mo</li>
              <li className="footer-innerdiv-list__li"> fe roo</li>
            </ul>
          </div>
          <div className="footer-innerdiv-lists">
            <p>Other Stuff</p>
            <ul className="footer-innerdiv-list__ul">
              <li className="footer-innerdiv-list__li">enkk dislass</li>
              <li className="footer-innerdiv-list__li">some la te</li>
              <li className="footer-innerdiv-list__li">tera mo</li>
              <li className="footer-innerdiv-list__li"> fe roo</li>
            </ul>
          </div>
          <div className="footer-innerdiv-lists">
            <p>Legal</p>
            <ul className="footer-innerdiv-list__ul">
              <li className="footer-innerdiv-list__li">enkk dislass</li>
              <li className="footer-innerdiv-list__li">some la te</li>
              <li className="footer-innerdiv-list__li">tera mo</li>
              <li className="footer-innerdiv-list__li"> fe roo</li>
            </ul>
          </div>
          <div>
            <div>
              <FaFacebookF size={40} className="icon" />
              <FaLinkedin size={40} className="icon" />
              <BsTwitterX size={40} className="icon" />
            </div>
            <div></div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
