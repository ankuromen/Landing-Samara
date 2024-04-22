import './HomeBanner.css'
import React from 'react';
import { Link } from 'react-router-dom';
import BannerVid from "../Assets/heading-vid.mp4";
import scrollanimation from '../Assets/scroll-animation.gif'

const HomeBanner = () => {
    return (
      <div className="Homebanner-container">
        <video className="homebanner-video" autoPlay muted loop>
          <source src={BannerVid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="Homebanner-text">
          <h1>Unifying passions.</h1>
          <h1>Amplifying experiences. </h1>
          <Link to="/team">
              {" "}
              <button className="glow-on-hover" type="button">REGISTER</button>
            </Link>
          <img className='homebanner-scroll' src={scrollanimation} alt='banner'/>
        </div>
      </div>
    );
}

export default HomeBanner;
