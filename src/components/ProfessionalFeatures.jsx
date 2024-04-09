import React from "react";
import "./ProfessionalFeatures.css";
import featurefirsticon from "../Assets/features-first.png";
import image1 from "../Assets/Professionalfeature1.jpg";
import image2 from "../Assets/Professionalfeature2.jpg";
import image3 from "../Assets/Professionalfeature3.jpg";
import image4 from "../Assets/Professionalfeature4.jpg";
import image5 from "../Assets/Professionalfeature5.jpg";
import image6 from "../Assets/Professionalfeature6.jpg";
import image7 from "../Assets/Professionalfeature7.jpg";
import image8 from "../Assets/Professionalfeature8.jpg";

const ProfessionalFeatures = () => {
  const ProfessionalFeatures = [
    {
      title: "Make a Profile",
      para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
      image: image1,
    },
    {
      title:
        "Create events, save templates, hold subscribed events etc. (event creation and type of events).",
      para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
      image: image2,
    },
    {
      title: "Ticket Sales",
      para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
      image: image3,
    },
    {
      title: "Create community.",
      para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
      image: image4,
    },
    {
      title: "Marketing and Promotions (engagement in content etc.).",
      para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
      image: image5,
    },
    {
      title:
        "Event Management (security, sponsor, affiliate, attendee entrances, QR scanner, etc).",
      para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
      image: image6,
    },
    {
      title: "Finances",
      para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
      image: image7,
    },
    {
      title: "Data insights",
      para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
      image: image8,
    },
  ];
  return (
    <div className="Professional-features-container">
      <div className="Professional-features-header">
        <h1>Features</h1>
        <p> SIMPLE ONE LINE SENTENCE</p>
        <div className="Professional-features-line"></div>
      </div>
      {ProfessionalFeatures.map((feature, index) => (
        <div key={index} className="Professional-features">
          <div className="Professional-features-text">
            <h1>{feature.title}</h1>
            <p>{feature.para}</p>
          </div>
          <div className="Professional-features-arrow">
            <div className="Professional-features-line"></div>
            <img src={featurefirsticon} alt="" />
          </div>
          <div className="Professional-features-img">
            <img
              src={feature.image}
              alt=""
            />
          </div>
          {ProfessionalFeatures.length !== index + 1 && (
            <div className="Professional-features-last-line"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProfessionalFeatures;
