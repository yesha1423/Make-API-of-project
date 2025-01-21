import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="welcome-section">
        <h1 className="welcome-title">🎨 Welcome to the Gray Space</h1>
        <p className="welcome-message">
          Discover the elegance of simplicity. Step into a world of subtle tones and endless inspiration.
        </p>
      </div>
      <div className="button-container">
        <button className="explore-button">Explore More</button>
      </div>
    </div>
  );
};

export default Home;
