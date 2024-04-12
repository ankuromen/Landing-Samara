import React from "react";
import "./SignupForm.css";
import { Link } from "react-router-dom";
const SignupForm = () => {
  return (
    <div className="Signup-form-container">
      <div className="Signup-form">
        <label>Full Name</label>
        <input type="text" placeholder="Full Name" />
        <label>Email</label>
        <input type="email" placeholder="Email" />
        <label>Date of Birth</label>
        <input type="date" />
        <label>Gender</label>
        <select name="Gender" placeholder="Gender">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Transgender">Transgender</option>
          <option value="Notspecified">Not Specifeid</option>
        </select>
        <label>Nationality</label>
        <input type="text" placeholder="Country" />
        <label>Password</label>
        <input type="password" placeholder="Password" />
        <label>Confirm your Password</label>
        <input type="password" placeholder="Password" />
        <button className="Signup-form-btn">Sign Up</button>
        <div className="Signup-form-signin">
          <p>Already a user?</p>
          <Link className="">sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
