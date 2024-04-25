import React from "react";
import "../components/Manifesto.css";
import testImg from "../Assets/test123.jpg";
const Manifesto = () => {
  return (
    // <div className="Manifesto-Conatiner">
    //   <h1 className="Manifesto-Head">OUR MANIFESTO</h1>
    //   <div className="Manifesto-Content">
    //     <section className="Mani-Sec1">
    //       <p id="Manifesto-Text">
    //         Evntiq. It is a dynamic video content-based platform we are
    //         developing that unlocks a new chapter in event and community
    //         discovery. We provide a space for event creators and community
    //         creators to attract fans to events and members to communities.
    //         Leveraging a robust suite of AI-powered tools, we empower creators
    //         to craft unforgettable experiences and power vibrant
    //         communities.We're dedicated to enhancing every interaction, helping
    //         them find meaning in their experiences whether within communities or
    //         at events. Our ultimate goal is to bridge the gap between the
    //         physical and virtual worlds, cultivating unforgettable encounters
    //         and transforming the way users experience events and communities.
    //       </p>
    //     </section>
    //     <section className="Mani-Sec2">
    //       <img className="Mani-sec-img" src={testImg} alt="test" />
    //     </section>
    //   </div>
    <div className="Memories-Container">
      <h1>OUR MANIFESTO</h1>
      <div className="Memories-Second" id="Manifesto-Container">
        <section className="Impromtu-Text" id="Manifesto-Content">
          <div className="Memories-Image">
            <img src={testImg} alt="Event" className="Memories-Image-img" />
          </div>
          <div className="Memories-Text">
            <p>
              Evntiq. It is a dynamic video content-based platform we are
              developing that unlocks a new chapter in event and community
              discovery. We provide a space for event creators and community
              creators to attract fans to events and members to communities.
              Leveraging a robust suite of AI-powered tools, we empower creators
              to craft unforgettable experiences and power vibrant
              communities.We're dedicated to enhancing every interaction, helping
              them find meaning in their experiences whether within communities or
              at events. Our ultimate goal is to bridge the gap between the
              physical and virtual worlds, cultivating unforgettable encounters
              and transforming the way users experience events and communities.
            </p>
          </div>
        </section>

      </div>{" "}

    </div>
  );
};

export default Manifesto;
