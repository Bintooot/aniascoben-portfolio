import React from "react";
import { AlignRight } from "lucide-react";
import logo from "../../assets/icons/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <section className="header-section">
      <div className="header-content">
        <img src={logo} alt="logo.png" />
        <AlignRight style={{ color: "#fff" }} size={30} id="toogle" />
      </div>
    </section>
  );
};

export default Header;
