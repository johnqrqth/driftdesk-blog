import React from "react";
import "./footer.css";
import Button from "../button";
import Logo from "../../assets/logo.svg";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="wave">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="footer-innerdiv">
        <div className="footer-innerdiv__title">
          <p className="footer-innerdiv__p">What are you looking for</p>
          <Button className="footer-innerdiv__button">Get Started</Button>
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
