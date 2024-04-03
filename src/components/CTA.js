import React from 'react';
import './CTA.css';
import backgroundImage from '../Assets/cta-image.jpg'; // Replace with the actual path to your image

const CTA = () => {
    return (
        <div className="CTA-Container" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="CTA-Overlay">
                <div className="CTA-Content">
                    <h1>Create Events.</h1>
                    <h2>Build a powerful community.</h2>
                    <button id="CTA-Register-btn">Register</button>
                </div>
            </div>
        </div>
    );
};

export default CTA;
