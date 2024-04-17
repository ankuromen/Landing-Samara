import React from "react";
import "./ProfessionalBanner.css";
import ProfessionalBannerImg from '../Assets/ProfessionalBannnerImg.jpg'

const ProfessionalBanner = () => {
  return (
    <div className="Professional-banner">
      <div className="Professional-banner-left">
        <h1> Cultivate Connections, Celebrate Community</h1>
        <p>
          Effortlessly organize events and foster engaged communities with
          our comprehensive tools. Streamline logistics and enhance interaction to create
          memorable experiences. Utilize detailed analytics to grow your audience and
          elevate every gathering.
        </p>
      </div>
      <div className="Professional-banner-right">
        <div className="Professional-banner-right-img">
          <img
            src={ProfessionalBannerImg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ProfessionalBanner;
