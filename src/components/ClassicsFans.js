import React from 'react';
import GlowButton from './GlowButton'; // Adjust the path to where your GlowButton component is located
import './ClassicsBusiness'; // Make sure you have your CSS correctly linked
import Test from '../Assets/test123.jpg'; // Adjust the path to your image if necessary

const ClassicsFans = () => {
    return (
        <div className="Classic-Business-Container"> {/* Check if you want to rename this class */}
            <div className="Classics-Content">
                <section className="Bus-Text-Section">
                    <h1>For Fans</h1>
                    <h2> sentence, AI changing generated text.</h2>
                    <GlowButton buttonText="Our Solutions" /> {/* Replacing the old button */}
                </section>
                <section className="Bus-Img-Section">
                    <img src={Test} id="Bus-Img" alt='Business' />
                </section>
            </div>
        </div>
    );
};

export default ClassicsFans;
