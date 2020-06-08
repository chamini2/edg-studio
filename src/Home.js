import React from 'react';
import logo from './logo.png';
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <a className="Home-logo-header" href="/">
        <img src={logo} className="Home-logo" alt="logo" />
      </a>
      <svg className="Home-svg"viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <a href="/1">
          <circle fill="#2622c1" className="Home-circle" cx="20" cy="20" r="3" />
        </a>
      </svg>
    </div>
  );
}

export default Home;
