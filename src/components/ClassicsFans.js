import React from "react";
import "./ClassicsBusiness"; // Make sure you have your CSS correctly linked
// import Test from "../Assets/test123.jpg";
import { Link } from "react-router-dom";
import video1 from "../Assets/HomeVideo.mp4";
const ClassicsFans = () => {
  return (
    <div className="Classic-Business-Container">
      {/* Check if you want to rename this class */}
      <div className="Classics-Content">
        <section
          className="fans-Img-Section"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          <video
            id="Bus-Img"
            src={video1}
            autoPlay
            loop
            muted
            playsInline
          ></video>
          <h1 className="Bus-Img-Section-header">For Fans</h1>
        </section>
        <section
          className="Bus-Text-Section"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h2 className="Bus-Text-Section-header">Capture the Excitement.</h2>
          <p className="Bus-Text-Section-para">
            Evntiq is where every moment feels like a backstage pass. Connect
            with your passions, dive into experiences, and savor every moment
            with the community you choose. Embrace unforgettable moments from
            physical world and feel the excitement and amazement even if you are
            visiting the virtual world.
          </p>
          <Link to="/classic" style={{ textDecoration: "none" }}>
            <button className="Bus-btn">Explore</button>
          </Link>
        </section>
        <section
          className="Bus-Img-Section"
          id="Bus-Img-Section"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          <video
            id="Bus-Img"
            src={video1}
            autoPlay
            loop
            muted
            playsInline
          ></video>
          <h1 className="Bus-Img-Section-header">For Fans</h1>
        </section>
      </div>
    </div>
  );
};

export default ClassicsFans;
