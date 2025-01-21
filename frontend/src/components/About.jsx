import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="container mt-5">
        <h1>🌟 About This Application</h1>
        <p>This application is a modern, full-stack web platform designed to provide secure user management with authentication and role-based access control.</p>
        <ul>
          <li>💡 <b>Home Page:</b> An intuitive and welcoming landing page for all users.</li>
          <li>💡 <b>About Page:</b> Insights about the project, including its features and purpose.</li>
          <li>💡 <b>Sign Up Page:</b> Seamlessly register as an admin or user with guided forms.</li>
          <li>💡 <b>Login Page:</b> Safely access your account and personalized features.</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
