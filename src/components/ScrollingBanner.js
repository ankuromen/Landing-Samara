import React from 'react';
import { Link } from 'react-router-dom';
import './ScrollingBanner.css';

const ScrollingBanner = () => {
    const text = "Join our beta · ";
    const repeatedText = text.repeat(100); // Repeat it a number of times to ensure continuous scrolling

    return (
        <div className="scrolling-banner-container">
            <Link to="/signup"><div className="scrolling-banner-text">
                {repeatedText}
            </div></Link>
        </div>
    );
};

export default ScrollingBanner;
