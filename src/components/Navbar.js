import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { IoCloseOutline } from "react-icons/io5";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobile]);

  return (
    <div className={isMobile ? "navbarfull" : "navbar"}>
      <button
        className="mobile-menu-icon"
        onClick={() => {
          setIsMobile(!isMobile);
        }}
      >
        {isMobile ? (
          <IoCloseOutline size={32} onClick={() => setIsMobile(!isMobile)} />
        ) : (
          <HiOutlineMenuAlt4 size={32} onClick={() => setIsMobile(!isMobile)} />
        )}
      </button>
      <div className="brand">
        <a href="/">
          <h1>Eventiq</h1>
        </a>
      </div>
      <div className={isMobile ? "navbar-mobile-menu" : "navbar-menu"}>
        <ul>
          <Link to="/" id="Hover-Nav" onClick={() => setIsMobile(false)}>
            Home Page
          </Link>
          <Link to="/classic" id="Hover-Nav" onClick={() => setIsMobile(false)}>
            Classic
          </Link>
          <Link
            to="/professional"
            id="Hover-Nav"
            onClick={() => setIsMobile(false)}
          >
            Professional
          </Link>
          <Link to="/about" id="Hover-Nav" onClick={() => setIsMobile(false)}>
            About Us
          </Link>
        </ul>
      </div>
      <button className="navbar-button">
        Sign In
      </button>
    </div>
  );
};

export default Navbar;
