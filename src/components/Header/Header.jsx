import React, { useState } from "react";
import { AlignRight, X } from "lucide-react";
import logo from "../../assets/icons/logo.png";
import "./Header.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const handleToogle = (id) => {
    setActive(id);
  };

  const handleSidebar = () => {
    setOpen((prev) => !prev);
  };

  const links = [
    { id: "home", label: "Home", href: "#home" },
    { id: "about-me", label: "About Me", href: "#about-me" },
    { id: "services", label: "Services", href: "#services" },
    { id: "skills", label: "Skills", href: "#skills" },
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "contact-me", label: "Contact Me", href: "#contact-me" },
  ];

  return (
    <section className="header-section">
      <div className="header-content">
        <img src={logo} alt="logo.png" />
        <AlignRight
          style={{ color: "#fff" }}
          size={30}
          id="toogle"
          onClick={handleSidebar}
        />
      </div>
      <div className={`sidebar-wrapper ${open ? "open" : "closed"}`}>
        <div className="sidebar-content">
          <div className="sidebar-header">
            <img src={logo} alt="logo.png" width={100} height={100} />
            <X size={40} id="close" onClick={() => setOpen((prev) => !prev)} />
          </div>
          <ul className="link-wrapper">
            {links.map((items) => (
              <li className="link-item" key={items.id}>
                <a
                  href={items.href}
                  onClick={() => (handleToogle(items.id), handleSidebar())}
                  className={`${active === items.id ? "active" : ""}`}
                >
                  {items.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Header;
