import React from 'react';
import Typewriter from 'typewriter-effect';
import './CommunitiesComponent.css';
import imageClusterLeft from '../Assets/left-image.jpg';
import imageClusterRight from '../Assets/right-image.jpg';

const CommunitiesComponent = () => {
    const eventiqFor = [
        'Resource Planning',
        'Gamefied for Users',
        'Analytics',
        'Event Management',
        'Customizable Events',
        'Engagement Tools',
        // Add more items as needed
    ];

    return (
        <div className="Communities-Container">
            <div className="Communities-Text">
                <span id='Communities-Heading'>Eventiq is for:</span><br />
                <span id='Communities-Writer'>
                <Typewriter
                  options={{
                    strings: eventiqFor,
                    autoStart: true,
                    loop: true,
                  }}
                />
                </span>
            </div>
        </div>
    );
};

export default CommunitiesComponent;
