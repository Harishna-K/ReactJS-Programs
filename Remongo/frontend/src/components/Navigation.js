import React from "react";
// import Home from "./Home";
import { Link } from "react-router-dom";
const Navigation=()=>{
    return(
        <div>
        <header>
          <input type="checkbox" id="toggler" />
          <label htmlFor="toggler" className="fas fa-bars"></label>
          <a href="/" className="logo">
            FLOWER<span>.</span>
          </a>
          <nav className="navbar">
            <Link to="/home">home</Link>
            <Link to="/about">about</Link>
            <Link to="/products">products</Link>
            <Link to="/review">review</Link>
            <Link to="/contact">contact</Link>
            <button onClick={() => window.history.back()} className="back-button">
              <i className="fas fa-arrow-left"></i> Back
            </button>
          </nav>
        </header>
        </div>
    )
}
export default Navigation