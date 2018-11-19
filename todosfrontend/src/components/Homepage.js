import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="home-hero">
      <h1>Hello there!</h1>
      <h4>First time around here?</h4>
      <Link to="/signup" className="btn btn-primary">
        Sign up here
      </Link>
    </div>
  );
};

export default Homepage;
