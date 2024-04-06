import React from 'react';
import './CTA.css';
import backgroundImage from '../Assets/cta-image.jpg';

const CTA = () => {
    return (
        <div className="CTA-Container" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="CTA-Overlay">
                <div className="CTA-Content">
                    <section><h1>Create Events.</h1></section>
                    <section className='Text2'><h2>Build a powerful <br/>  community.</h2></section>
                    <section className='Text3'><button id="CTA-Register-btn">Register</button></section>

                </div>
            </div>
        </div>
    );
};

export default CTA;
