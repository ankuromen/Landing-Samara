import React from 'react';
import './ScrollingBanner.css';

const ScrollingBanner = () => {
    const text = "Join our beta · ";
    const repeatedText = text.repeat(100); // Repeat it a number of times to ensure continuous scrolling

    return (
        <div className="scrolling-banner-container">
            <div className="scrolling-banner-text">
                {repeatedText}
            </div>
        </div>
    );
};

export default ScrollingBanner;
