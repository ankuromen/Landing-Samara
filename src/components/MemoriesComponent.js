import React from 'react';
import './MemoriesComponent.css';
import eventImage from '../Assets/about-image.jpg'; // Replace with the actual path to your image

const MemoriesComponent = () => {
    return (
        <div className="Memories-Container">
            <img src={eventImage} alt="Event" className="Memories-Image" />
            <div className="Memories-Content">
                <h1>Beyond Boundaries</h1>
                <p className="Memories-Title">Make Memories.</p>
                <p className="Memories-Text">Each space to discover and nurture these connections, where events are more than occasions—they're the seeds of vibrant communities. Join us in reimagining how we come together, share moments, and build lasting bonds.</p>
            </div>
        </div>
    );
};

export default MemoriesComponent;
