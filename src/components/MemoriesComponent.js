import React from "react";
import "./MemoriesComponent.css";
import eventImage from "../Assets/about-image.jpg"; // Replace with the actual path to your image

const MemoriesComponent = () => {
  return (
    <div className="Memories-Container">
      <div className="Memories-Content">
        <h1>Beyond Boundaries</h1>
        <p className="Memories-Title">Make Memories.</p>
      </div>
      <div className="Memories-Second">
        <img src={eventImage} alt="Event" className="Memories-Image" />
        <div className="Memories-Text">
          <p>
            Each space to discover and nurture these connections, where events
            are more than occasions—they're the seeds of vibrant communities.
            Join us in reimagining how we come together, share moments, and
            build lasting bonds.
          </p>
          <button className="Memories-btn">
            <span>Click!</span>
            <span>Learn More</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MemoriesComponent;
