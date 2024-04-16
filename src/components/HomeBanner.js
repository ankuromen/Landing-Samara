import './HomeBanner.css'
import React from 'react';
import scrollanimation from '../Assets/scroll-animation.gif'

const HomeBanner = () => {
    return (
      <div className="Homebanner-container">
        <div className="Homebanner-text">
          <h1>Unifying passions.</h1>
          <h1>Amplifying experiences. </h1>
          <img className='homebanner-scroll' src={scrollanimation}/>
        </div>
      </div>
    );
}

export default HomeBanner;
