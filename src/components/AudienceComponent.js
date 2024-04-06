import React from 'react';
import { Link } from 'react-router-dom';
import './AudienceComponent.css';
import attendeeBackground from '../Assets/attendee-image.webp'; 
import businessBackground from '../Assets/Business.jpeg'; 

const AudienceComponent = () => {
    return (
        <div className="audience-container">
            <Link to="/classic" className="audience-section" style={{ backgroundImage: `url(${attendeeBackground})` }}>
                <div className="section-content">For Attendees</div>
            </Link>
            <Link to="/professional" className="audience-section" style={{ backgroundImage: `url(${businessBackground})` }}>
                <div className="section-content">For Businesses</div>
            </Link>
        </div>
    );
};

export default AudienceComponent;
