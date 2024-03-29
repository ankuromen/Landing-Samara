import React from "react";
import "../components/Footer.css";
const Footer = () => {
  return (
    <div className="Footer-Section">
      <div className="Footer-Heading">
        <h1>Available now in&nbsp;California.</h1>
        <h1>
          Starting at $269k or $1,611/mo
          <br />
          including installation.
        </h1>
        <button id="Reserve-btn">Reserve now for free</button>
        <h3>Not in California?</h3>
        <button>Tell us where to build next {">"}</button>
      </div>
      <div className="Footer-Mid">
        <table>
          <tr>
            <th>Samara</th>
            <th>Backyard</th>
            <th>Social</th>
          </tr>
          <tr>
            <td>News</td>
            <td>Design yours</td>
            <td>Instagram</td>
          </tr>
          <tr>
            <td>Jobs</td>
            <td>How it works?</td>
            <td>YouTube</td>
          </tr>
          <tr>
            <td>Showrooms</td>
            <td>Tech specs</td>
            <td>LinkedIn</td>
          </tr>
          <tr>
            <td>For Devlopers</td>
            <td>FAQ</td>
          </tr>
        </table>
        <div className="Footer-bottom">
          <div>
            <h4>Have questions?</h4>
            <button>Contact Us</button>
          </div>
          <div>
            <h4>Get updates</h4>
            <p>Drop us your email to learn what’s next.</p>
            <input type="text" name="email" placeholder="email address"></input>
          </div>
        </div>
      </div>

      <div className="Footer-note">
        <p>© 2024 Samara Living Inc.</p>{" "}
        <div className="Footer-note-terms">
          <p>“Net zero” may change for build sites with significant shading.</p>
        <button>Privacy policy</button>
        <button>Terms of service</button>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
