import { React, useState } from 'react';
import './DemoCTA.css';
import SignupFormModal from "./SignupFormModal";


const DemoCTA = () => {
  const [showSignup, setShowSignup] = useState(false);
  return (
    <div className="demo-cta-container">
      <p className="cta-message">
        Want to learn what we are building?
        <br />
        Book a call.
      </p>
      <button className='Demo-btn' onClick={() => setShowSignup(!showSignup)}>Demo</button>
      {/* <button className="merged-button" >Demo</button> */}
      {showSignup && <SignupFormModal onClose={() => setShowSignup(false)} />}
    </div>

  );
};

export default DemoCTA;
