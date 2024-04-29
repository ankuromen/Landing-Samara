import React from "react";
import GlowButton from "./GlowButton"; // Adjust the path to where your GlowButton component is located
import "./ClassicsBusiness"; // Make sure you have your CSS correctly linked
// import Test from "../Assets/test123.jpg";
import { Link } from "react-router-dom";
import video1 from "../Assets/HomeVideo.mp4";
const ClassicsFans = () => {
  return (
    <div className="Classic-Business-Container">
      {/* Check if you want to rename this class */}
      <div className="Classics-Content">
        <section className="fans-Img-Section">
          <video id="Bus-Img" src={video1} autoPlay loop muted></video>
          <h1 className="Bus-Img-Section-header">For Fans</h1>
        </section>
        <section className="Bus-Text-Section">
          <h2 className="Bus-Text-Section-header">Capture the Excitement.</h2>
          <p className="Bus-Text-Section-para">
            Evntiq is where every moment feels like a backstage pass. Connect
            with your passions, dive into experiences, and savor every moment
            with the community you choose. Embrace unforgettable moments from
            physical world and feel the excitement and amazement even if you are
            visiting the virtual world.
          </p>
          <Link to="/classic" style={{ textDecoration: "none" }}>
            <GlowButton buttonText="Explore" />
          </Link>
          {/* Replacing the old button */}
        </section>
        <section className="Bus-Img-Section" id="Bus-Img-Section">
          <video id="Bus-Img" src={video1} autoPlay loop muted></video>
          <h1 className="Bus-Img-Section-header">For Fans</h1>
        </section>
      </div>
    </div>
  );
};

export default ClassicsFans;
