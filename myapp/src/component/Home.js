import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './home.css';

const Home = (props) => {
  const [name, setUsername] = useState('');
  const data = useParams();

  useEffect(() => {
    setUsername(data.names);
  }, [data.names]);

  return (
    <div>
      <header>
        <input type="checkbox" id="toggler" />
        <label htmlFor="toggler" className="fas fa-bars"></label>
        <a href="/" className="logo">
          FLOWER<span>.</span>
        </a>
        <nav className="navbar">
          <Link to="/homen">home</Link>
          <Link to="/about">about</Link>
          <Link to="/products">products</Link>
          <Link to="/review">review</Link>
          <Link to="/contact">contact</Link>
          <button onClick={() => window.history.back()} className="back-button">
            <i className="fas fa-arrow-left"></i> Back
          </button>
        </nav>
      </header>
      <div className="content">
        <h1>Welcome to {name ? `${name}'s` : 'our'} Flower Shop!</h1>
        <p>Explore our beautiful collection of flowers and more.</p>
      </div>
    </div>
  );
};

export default Home;
