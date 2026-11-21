import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import "./Header.css";

const NAV_LINKS = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about-me", label: "About", href: "#about-me" },
  { id: "services", label: "Services", href: "#services" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "contact-me", label: "Contact", href: "#contact-me" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // ScrollSpy & Header Shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = NAV_LINKS.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActive(NAV_LINKS[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const handleLinkClick = (id) => {
    setActive(id);
    setOpen(false);
  };

  return (
    <header className={`header-section ${scrolled ? "scrolled" : ""}`}>
      <div className="header-content">
        <a href="#home" className="header-logo" onClick={() => setActive("home")}>
          <span className="logo-accent">&lt;</span>
          B.R.A
          <span className="logo-accent"> /&gt;</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="desktop-link-list">
            {NAV_LINKS.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={() => handleLinkClick(item.id)}
                  className={`desktop-link ${active === item.id ? "active" : ""}`}
                >
                  {item.label}
                  {active === item.id && <span className="active-indicator" />}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="header-cta-wrapper">
          <a href="#contact-me" className="header-cta-btn">
            <span>Let's Talk</span>
            <ArrowUpRight size={16} />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer / Backdrop */}
      <div
        className={`mobile-overlay ${open ? "open" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      >
        <div
          className="sidebar-content"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sidebar-header">
            <span className="sidebar-logo">Navigation</span>
            <button
              type="button"
              className="sidebar-close-btn"
              onClick={() => setOpen(false)}
              aria-label="Close navigation"
            >
              <X size={26} />
            </button>
          </div>

          <ul className="link-wrapper">
            {NAV_LINKS.map((item) => (
              <li className="link-item" key={item.id}>
                <a
                  href={item.href}
                  onClick={() => handleLinkClick(item.id)}
                  className={active === item.id ? "active" : ""}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="sidebar-footer">
            <a
              href="#contact-me"
              className="sidebar-cta-btn"
              onClick={() => setOpen(false)}
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
