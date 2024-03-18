// Home.js

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Your Application</h1>
      <p>This is the home page of your application.</p>
      <div className="buttons">
        <Link to="/sign-in" className="btn btn-primary">Sign In</Link>
        <Link to="/sign-up" className="btn btn-secondary">Sign Up</Link>
      </div>
    </div>
  );
};

export default Home;
