import React from "react";
import "./SignupFormModal.css";
import { IoCloseOutline } from "react-icons/io5";
const SignupFormModal = ({onClose}) => {
  return (
    <div className="Signup-form-container">
      <div className="Signup-form">
        <div className="Signup-form-close">
          <button onClick={onClose}>
            <IoCloseOutline size={25} />
          </button>
        </div>

        <label>Full Name</label>
        <input type="text" placeholder="Full Name" />
        <label>Email</label>
        <input type="email" placeholder="Email" />
        <label>Gender</label>
        <select name="Gender" placeholder="Gender">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Notspecified">Not Specifeid</option>
        </select>
        <label>Nationality</label>
        <input type="text" placeholder="Country" />
        <button className="Signup-form-btn">Register</button>
      </div>
    </div>
  );
};

export default SignupFormModal;
