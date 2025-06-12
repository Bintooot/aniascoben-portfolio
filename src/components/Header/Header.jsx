import React from "react";
import { AlignRight, X } from "lucide-react";
import logo from "../../assets/icons/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <section className="header-section">
      <div className="header-content">
        <img src={logo} alt="logo.png" />
        <AlignRight style={{ color: "#fff" }} size={30} id="toogle" />
      </div>
      <div className="sidebar-wrapper">
        <div className="sidebar-content">
          <div className="sidebar-header">
            <img src={logo} alt="logo.png" width={100} height={100} />
            <X size={40} id="close" />
          </div>
          <ul className="link-wrapper">
            <li className="link-item">
              <a href="">Home</a>{" "}
            </li>
            <li className="link-item">
              <a href=""> About Me</a>
            </li>
            <li className="link-item">
              <a href="">Services</a>
            </li>
            <li className="link-item">
              <a href="">Skills</a>
            </li>
            <li className="link-item">
              <a href="">Projects</a>
            </li>
            <li className="link-item">
              <a href=""> Contact Me</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Header;
