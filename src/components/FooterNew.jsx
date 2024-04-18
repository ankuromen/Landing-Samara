import React, { useState } from "react";
import "./FooterNew.css";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterNew = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="Footer-container">
      <div className="Footer-topsection">
        <div className="Footer-email">
          <h1>Sign up for email updates</h1>
          <form onSubmit={handleSubmit} className="Footer-email-form">
            <input
            classNa
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address..."
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        <div className="Footer-links">
          <div className="Footer-links-sub">
            <h3>PRODUCTS</h3>
            <Link to="/professional">For Creators</Link>
            <Link to="/classic">For Fans</Link>
          </div>
          <div className="Footer-links-sub">
            <h3>COMPANY</h3>
            <Link to="/team">About Us</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
          <div className="Footer-links-sub">
            <h3>LEARN MORE</h3>
            <Link to="/blogs">Blog</Link>
            <Link to="/blogs">FAQs</Link>
          </div>
        </div>
      </div>

      <div className="Footer-bottomsection">
        <div className="Footer-bottomsection-terms">
          <a href="/privacy-policy">Privacy Policy</a>
          <p>© 2024 Eventiq LLC All rights reserved.</p>
        </div>
        <div className="Footer-bottomsection-social">
          <a href="https://twitter.com">
            <FaXTwitter className="social-icons" />
          </a>
          <a href="https://linkedin.com">
            <FaLinkedin className="social-icons" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterNew;
