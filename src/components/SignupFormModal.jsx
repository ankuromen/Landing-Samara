import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import "./SignupFormModal.css";

const SignupFormModal = ({ onClose }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [nationality, setNationality] = useState("");
  const [registrationStatus, setRegistrationStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          fullName,
          email,
          gender,
          nationality
        })
      });

      const data = await response.json();
      console.log(data);

      // Set registration status to true upon successful registration
      setRegistrationStatus(true);

      // Reset input fields
      setFullName("");
      setEmail("");
      setGender("");
      setNationality("");
    } catch (error) {
      console.error("Error:", error);
      // Set registration status to false in case of error
      setRegistrationStatus(false);
    }
  };

  return (
    <div className="Signup-form-container">
      <div className="Signup-form">
        <div className="Signup-form-close">
          <button onClick={onClose}>
            <IoCloseOutline size={25} />
          </button>
        </div>

        <label>Full Name</label>
        <input type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
        
        <label>Email</label>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        
        <label>Gender</label>
        <select name="Gender" value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Not specified">Not Specified</option>
        </select>
        
        <label>Nationality</label>
        <input type="text" placeholder="Nationality" value={nationality} onChange={(e) => setNationality(e.target.value)} />
        
        <button className="Signup-form-btn" onClick={handleSubmit}>Register</button>
        
        {/* Popup confirmation */}
        {registrationStatus === true && (
          <div className="confirmation-popup">
            <p>Registration Successful!</p>
          </div>
        )}
        {registrationStatus === false && (
          <div className="error-popup">
            <p>Registration Failed. Please try again later.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignupFormModal;
