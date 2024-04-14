import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");
  return (
    <div>
      <div className="Contact-form">
        <div className="Contact-form-right">
          <h2>Message Us</h2>
          <p>
            If you have any questions, concerns, or feedback, please don't
            hesitate to reach out to us. We value your input and are here to
            help.
          </p>
        </div>
        <div className="Contact-form-left">
          <div className="Contact-form-container"><form>
            <label>Name</label>
            <br />
            <input
              type="text"
              name="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <label>Email</label>
            <br />
            <input
              type="email"
              name="Email"

              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label>Comments</label>
            <br />
            <textarea
              className="comments"
              type="textarea"
              name="Comments"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
            />
            <br />
            <button type="submit">Send</button>
          </form></div>

        </div>
      </div>
    </div>
  );
};

export default ContactForm;
