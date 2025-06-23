import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="animated-bg"></div>

      <div className="about-content animate-fade-slide">
        <h1 className="about-title typing-animation">🌳 About Us</h1>

        <p className="about-text animate-delay-1">
          Welcome to our platform! We are passionate about building seamless web
          experiences that combine modern design with high performance. Our team
          is committed to delivering high-quality web solutions using the latest
          technologies like React, JavaScript, Tailwind, and more.
        </p>

        <p className="about-text animate-delay-2">
          Whether you're a student, professional, or a curious learner, we
          strive to build applications that are accessible, responsive, and
          user-friendly. We believe in clean code, meaningful design, and
          constant improvement.
        </p>

        <p className="about-text animate-delay-3">
          This website was developed as part of a learning journey to master
          front-end development. We hope you enjoy exploring it as much as we
          enjoyed building it.
        </p>
      </div>
    </div>
  );
};

export default About;
