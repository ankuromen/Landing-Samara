import "./HomeBanner.css";
import { React, useState } from "react";
import BannerVid from "../Assets/HomeBanner.mp4";
import SignupFormModal from "./SignupFormModal.jsx";
import scrollanimation from '../Assets/scroll-animation.gif'

const HomeBanner = () => {
  const [showSignup, setShowSignup] = useState(false);
  return (
    <div className="Homebanner-container">
      <video className="homebanner-video" autoPlay muted loop>
        <source src={BannerVid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="Homebanner-text">
        <h1 className="Homebanner-text-head">Unifying passions.</h1>
        <h1 className="Homebanner-text-head">Amplifying experiences. </h1>
        <div
          onClick={() => {
            setShowSignup(!showSignup);
          }}
        >
          <button className="Home-btn">Register</button>
        </div>

        <img className='homebanner-scroll' src={scrollanimation} alt='banner'/>
      </div>
      {showSignup && <SignupFormModal onClose={() => setShowSignup(false)} />}
    </div>
  );
};

export default HomeBanner;
