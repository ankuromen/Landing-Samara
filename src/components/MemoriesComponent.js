import React from "react";
import "./MemoriesComponent.css";
import eventImage from "../Assets/about-image.jpg"; 
import { useNavigate } from "react-router-dom";


const MemoriesComponent = () => {
  const nav = useNavigate();
  return (
    <div className="Memories-Container">
      <div className="Memories-Content">
        <h1 data-aos="fade-right"> Crafting tales.</h1>
        <p className="Memories-Title">Uniting trails.</p>
      </div>
      <div className="Memories-Second">
        <section className="Impromtu-Text">
          <div
            className="Memories-Text"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="linear"
          >
            <p>
              Envtiq is a video-based events and community discovery platform
              where event creators and community creators find their space to
              thrive by attracting fans and members. We help in crafting
              compelling experiences at events and power communities. Seamlessly
              tap into events or communities based on interest. Our mission is
              to bridge the gap between the physical and virtual while
              cultivating unforgettable encounters.
            </p>
            <button className="Learn-btn" onClick={() => nav("/team")}>
              Learn more
            </button>
          </div>
        </section>
        <div
          className="Memories-Image"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-easing="linear"
        >
          <img src={eventImage} alt="Event" className="Memories-Image-img" />
        </div>
      </div>{" "}
    </div>
  );
};

export default MemoriesComponent;
