import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { IoCloseOutline } from "react-icons/io5";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { NavLink, useLocation } from "react-router-dom";
import SignupFormModal from "./SignupFormModal";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { pathname } = useLocation();
  const [showSignup,setShowSignup] = useState(false)

  useEffect(() => {
    if (isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobile]);
  useEffect(() => {
    scrollFunction();
  });
  window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    if (pathname === "/") {
      var navbarMenu = document.getElementById("navbar-menu");
      var navbarButton = document.getElementById("navbar-button");
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        navbarMenu.style.display = "flex";
        navbarButton.style.display = "flex";
      } else {
        navbarMenu.style.display = "none";
        navbarButton.style.display = "none";
      }
    }
  }
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
      <div
        className={isMobile ? "navbar-mobile-menu" : "navbar-menu"}
        id="navbar-menu"
      >
        <ul>
          <NavLink
            to="/"
            className="Nav-links"
            onClick={() => setIsMobile(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/professional"
            className="Nav-links"
            onClick={() => setIsMobile(false)}
          >
            Creators
          </NavLink>
          <NavLink
            to="/classic"
            className="Nav-links"
            onClick={() => setIsMobile(false)}
          >
            Fans
          </NavLink>
        </ul>
      </div>
      
        <button className="navbar-button" id="navbar-button"  onClick={() => setShowSignup(!showSignup)}>
          Sign Up
        </button>
  
      {showSignup && <SignupFormModal onClose={()=>setShowSignup(false)}/>}
    </div>
  );
};

export default Navbar;
