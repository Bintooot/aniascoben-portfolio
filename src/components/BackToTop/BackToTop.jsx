import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import "./BackToTop.css";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisible, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      className={`floating-back-to-top ${visible ? "visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll to top of page"
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default BackToTop;
