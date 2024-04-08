import React from 'react';
import GlowButton from './GlowButton'; // Adjust the path to where your GlowButton component is located
import './ClassicsBusiness.css';
import Test from '../Assets/test123.jpg'; // Adjust the path to your image if necessary

const ClassicsBusiness = () => {
    return (
        <div className="Classic-Business-Container">
            <div className="Classics-Content">
                <section className="Bus-Img-Section">
                    <img src={Test} id="Bus-Img" alt='Business' />
                </section>
                <section className="Bus-Text-Section">
                    <h1>For business</h1>
                    <h2> sentence, AI changing generated text.</h2>
                    <GlowButton buttonText="Our Solutions" /> {/* Use the GlowButton component here */}
                </section>
            </div>
        </div>
    );
};

export default ClassicsBusiness;
