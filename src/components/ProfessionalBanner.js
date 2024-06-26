import React, { useState } from "react";
import "./ProfessionalBanner.css";
import ProfessionalBannerImg from '../Assets/CreatorsImg.jpg'
import SignupFormModal from "./SignupFormModal";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const ProfessionalBanner = () => {
  
  const [showSignup, setShowSignup] = useState(false);
  return (
    <div className="Professional-banner">
      <div className="Professional-banner-left">
        <h1> Cultivating Connections.</h1>
        <h1> Celebrating Communities.</h1>
        <p>
          Effortlessly organize events and foster engaged communities with our
          comprehensive tools. Streamline logistics and enhance interaction to
          create memorable experiences. Utilize detailed analytics to grow your
          audience and elevate every gathering.
        </p>
        <button
          className="Register-btn"
          onClick={() => setShowSignup(!showSignup)}
        >
          Register
        </button>
      </div>
      <div className="Professional-banner-right">
        <div className="Professional-banner-right-img">
          <img src={ProfessionalBannerImg} alt="" />
        </div>
      </div>
      {showSignup && <SignupFormModal onClose={() => setShowSignup(false)} />}
    </div>
  );
};

export default ProfessionalBanner;
