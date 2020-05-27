import React from 'react';
import logo from './logo.png';
import './Home.css';

const EMAIL = "elay@edgstudio.com";

function sendEmail(event) {
  window.open('mailto:' + EMAIL, 'mail');
  event.preventDefault();
}

function Home() {
  return (
    <div className="Home">
      <a className="Home-logo-header" href="/">
        <img src={logo} className="Home-logo" alt="logo" />
      </a>
      <svg className="Home-board" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
        <a href="/1">
          <circle fill="#2622c1" className="Home-circle" cx="20" cy="20" r="3" />
        </a>
        <a href="/2">
          <circle fill="#f2e9a3" className="Home-circle" cx="80" cy="40" r="10" />
        </a>
        <a href="/3">
          <circle fill="#415e3f" className="Home-circle" cx="100" cy="50" r="5" />
        </a>
        <a href="/4">
          <circle fill="#b7663b" className="Home-circle" cx="50" cy="60" r="7" />
        </a>
        <a href="/5">
          <circle fill="#d3bb95" className="Home-circle" cx="120" cy="80" r="8" />
        </a>
        <a href="/6">
          <circle fill="#b1bca9" className="Home-circle" cx="150" cy="45" r="3" />
        </a>
        <a href="#">
          <circle fill="#d3bdba" className="Home-circle" cx="175" cy="30" r="4" />
        </a>
      </svg>
      <div className="Home-email">
        <a onClick={sendEmail} href={"mailto:" + EMAIL}>
          {EMAIL}
        </a>
      </div>
      <div className="Home-footer">
        <p>
          I believe the only way to be truly modern in today's creative landscape is to
          remove the limits betwen art forms, to have fluid conversations to create
          sublime visual experiences.
        </p>
      </div>
    </div>
  );
}

export default Home;
