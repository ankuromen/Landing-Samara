import React, { useState } from "react";
import "./FooterNew.css";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

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
            <a href="/professional">For Entrepreneurs</a>
            <a href="/classic">For Partners</a>
          </div>
          <div className="Footer-links-sub">
            <h3>COMPANY</h3>
            <a href="/team">About Us</a>
            <a href="/careers">Careers</a>
            <a href="/newsroom">Newsroom</a>
            <a href="/changelog">Changelog</a>
            <a href="/contact-us">Contact Us</a>
          </div>
          <div className="Footer-links-sub">
            <h3>LEARN MORE</h3>
            <a href="/blogs">Blog</a>
            <a href="/blogs">FAQs</a>
          </div>
        </div>
      </div>

      <div className="Footer-bottomsection">
        <div className="Footer-bottomsection-terms">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/responsible-disclosure">Responsible Disclosure</a>
          <a href="/terms-of-service">Terms of Service</a>
          <p>© 2024 Eventiq LLC All rights reserved.</p>
        </div>
        <div className="Footer-bottomsection-social">
          <FaXTwitter color="gray" size={20}/>
          <FaLinkedin color="gray"size={20}/>
        </div>
      </div>
    </div>
  );
};

export default FooterNew;
