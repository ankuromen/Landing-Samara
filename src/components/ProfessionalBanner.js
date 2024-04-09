import React from "react";
import "./ProfessionalBanner.css";
import ProfessionalBannerImg from '../Assets/ProfessionalBannnerImg.jpg'

const ProfessionalBanner = () => {
  return (
    <div className="Professional-banner">
      <div className="Professional-banner-left">
        <h1>Helping businesses build something bigger</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et
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
