import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { IoCloseOutline } from "react-icons/io5";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { NavLink, useLocation } from "react-router-dom";
import SignupFormModal from "./SignupFormModal";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { pathname } = useLocation();
  const [showSignup, setShowSignup] = useState(false);

  useEffect(() => {
    if (isMobile) {
      document.body.style.overflow = "hidden";
      document.querySelector(".mobile-menu-icon").style.width = "100%";
      document.querySelector(".mobile-menu-icon").style.borderRadius = "0";
    } else {
      document.body.style.overflow = "";
      document.querySelector(".mobile-menu-icon").style.width = "auto";
      document.querySelector(".mobile-menu-icon").style.borderRadius = "15px";
      document.querySelector(".mobile-menu-icon").style.overflow = "hidden";
    }
  }, [isMobile]);

  useEffect(() => {
    scrollFunction();
  });
  var Screen = window.matchMedia("(min-width: 769px)");
  window.onscroll = function () {
    scrollFunction();
    scrollColorChange();
  };
  function scrollFunction() {
    if (pathname === "/" && Screen.matches === true) {
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
  function scrollColorChange() {
    if (pathname === "/") {
      var brand = document.getElementById("brand");
      var mobileIcon = document.getElementById("mobile-icon");
      if (
        document.body.scrollTop > 500 ||
        document.documentElement.scrollTop > 500
      ) {
        brand.style.color = "black";
        mobileIcon.style.color = 'black'
      } else {
        brand.style.color = "white";
        mobileIcon.style.color = "white";
      }
    }
  }
  // function navbarColorChange() {
  //   const textColor = pathname === "/" ? "black" : "white";
  //   document.getElementById("brand").style.color = textColor;
  //   document.getElementById("home").style.color = textColor;
  //   document.getElementById("creators").style.color = textColor;
  //   document.getElementById("fans").style.color = textColor;
  // }

  return (
    <div className={isMobile ? "navbarfull" : "navbar"}>
      <button
        className="mobile-menu-icon"
        id="mobile-icon"
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
          <h1 id="brand">Evntiq</h1>
        </a>
      </div>
      <div
        className={isMobile ? "navbar-mobile-menu" : "navbar-menu"}
        id="navbar-menu"
      >
        <ul id="navbarlist">
          <NavLink
            to="/"
            id="home"
            className="Nav-links"
            onClick={() => setIsMobile(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/professional"
            id="creators"
            className="Nav-links"
            onClick={() => setIsMobile(false)}
          >
            Creators
          </NavLink>
          <NavLink
            to="/classic"
            id="fans"
            className="Nav-links"
            onClick={() => setIsMobile(false)}
          >
            Fans
          </NavLink>
          {isMobile && (
            <NavLink
              className="Nav-links"
              onClick={() => {
                setIsMobile(false);
                document
                  .querySelector(".Footer-container")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact Us
            </NavLink>
          )}
        </ul>{" "}
        {isMobile && <p className="Brand-mobile">Evntiq</p>}
      </div>

      <button
        className="navbar-button"
        id="navbar-button"
        onClick={() => setShowSignup(!showSignup)}
      >
        Sign Up
      </button>

      {showSignup && <SignupFormModal onClose={() => setShowSignup(false)} />}
    </div>
  );
};

export default Navbar;
