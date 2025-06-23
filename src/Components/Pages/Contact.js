import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="contact-card">
        <h1 className="contact-title">🌼 Contact Us</h1>

        <form className="contact-form">
          <input
            type="text"
            placeholder="Your Name"
            className="contact-input glow"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="contact-input glow"
          />
          <textarea
            placeholder="Your Message"
            className="contact-textarea glow"
            rows="5"
          />
          <button type="submit" className="contact-button pulse">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
