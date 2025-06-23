import React from "react";
import "./Home.css";


const Home = () => {
  return (
    <div className="home-container">
      <div className="home-section animate-slide-in">
        <h1 className="home-title">🌈 Welcome to the Home Page!</h1>
        <p className="home-subtitle">
          Experience smooth animations and a clean interface built with React.
        </p>
        <button className="home-button animate-fade-in">Get Started</button>
      </div>
    </div>
  );
};

export default Home;
