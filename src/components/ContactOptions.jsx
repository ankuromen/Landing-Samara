import React from 'react';
import './ContactOptions.css'
import { CiLocationOn, CiPhone } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";

const ContactOptions = () => {
    return (
      <div className="Contact-options">
        <div>
          {/* <img className="ContactOpt-image" src={mapImg} alt="newsimage" /> */}
          <h2 className="ContactOpt-header">
            <CiLocationOn />
            Address
          </h2>
          <p className="ContactOpt-para">
            50 Laurier Ave E<br />
            Ottawa Canada
            <br /> K1H 1N7
          </p>
        </div>
        <div>
          {/* <img className="ContactOpt-image" src={phoneImg} alt="newsimage" /> */}
          <h2 className="ContactOpt-header">
            <CiPhone />
            Phone
          </h2>
          <p className="ContactOpt-para">+1000000000000</p>
        </div>
        <div>
          {/* <img className="ContactOpt-image" src={emailImg} alt="newsimage" /> */}
          <h2 className="ContactOpt-header">
            <MdOutlineMailOutline />
            Email Address
          </h2>
          <p className="ContactOpt-para">example@gmail.com</p>
        </div>
      </div>
    );
}

export default ContactOptions;
