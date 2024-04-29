import React from "react";
import GlowButton from "./GlowButton"; // Adjust the path to where your GlowButton component is located
import "./ClassicsBusiness.css";
// import Test from "../Assets/test123.jpg";
import { Link } from "react-router-dom";
import video1 from "../Assets/HomeVideo.mp4";
const ClassicsBusiness = () => {
  return (
    <div className="Classic-Business-Container">
      <div className="Classics-Content">
        <section className="Bus-Img-Section">
          <video id="Bus-Img" src={video1} autoPlay loop mute></video>
          <h1 className="Bus-Img-Section-header">For business</h1>
        </section>
        <section className="Bus-Text-Section">
          <h2 className="Bus-Text-Section-header">Shape Moments.</h2>
          <p className="Bus-Text-Section-para">
            Give form to your immagination. Orchestrate events that captivate,
            communities that resonate, and experiences that elevate. From local
            pilate classes to Coachella, we have got you covered! :)
          </p>
          <Link to="/professional" style={{ textDecoration: "none" }}>
            <GlowButton buttonText="Explore" />
          </Link>
          {/* Use the GlowButton component here */}
        </section>
      </div>
    </div>
  );
};

export default ClassicsBusiness;
