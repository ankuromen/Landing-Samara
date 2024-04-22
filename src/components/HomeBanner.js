import './HomeBanner.css'
import React from 'react';
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
          <img className='homebanner-scroll' src={scrollanimation} alt='banner'/>
        </div>
      </div>
    );
}

export default HomeBanner;
