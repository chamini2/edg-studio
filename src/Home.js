import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';
import './Home.css';

import cluster1 from './assets/Cluster-1_2000.jpg'
import cluster2 from './assets/Cluster-2_2000.jpg'
import cluster3 from './assets/Cluster-3_2000.jpg'
import cluster4 from './assets/Cluster-4_2000.jpg'
import cluster5 from './assets/Cluster-5_2000.jpg'
import cluster6 from './assets/Cluster-6_2000.jpg'

const EMAIL = "elay@edgstudio.com";

function sendEmail(event) {
  window.open('mailto:' + EMAIL, 'mail');
  event.preventDefault();
}

function Home() {
  return (
    <div className="Home">
      <Link to="/" className="Home-logo-header">
        <img src={logo} className="Home-logo" alt="logo" />
      </Link>
      <svg className="Home-board" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
        <Link to={{pathname: "/1", state: {internal: true}}}>
          <circle id="circle1" fill="#2622c1" className="Home-circle" cx="20" cy="20" r="4" />
        </Link>
        <Link to={{pathname: "/2", state: {internal: true}}}>
          <circle id="circle2" fill="#f2e9a3" className="Home-circle" cx="80" cy="40" r="12" />
        </Link>
        <Link to={{pathname: "/3", state: {internal: true}}}>
          <circle id="circle3" fill="#415e3f" className="Home-circle" cx="100" cy="50" r="7" />
        </Link>
        <Link to={{pathname: "/4", state: {internal: true}}}>
          <circle id="circle4" fill="#b7663b" className="Home-circle" cx="50" cy="60" r="8" />
        </Link>
        <Link to={{pathname: "/5", state: {internal: true}}}>
          <circle id="circle5" fill="#d3bb95" className="Home-circle" cx="120" cy="80" r="10" />
        </Link>
        <Link to={{pathname: "/6", state: {internal: true}}}>
          <circle id="circle6" fill="#b1bca9" className="Home-circle" cx="150" cy="45" r="4" />
        </Link>
        {/* eslint-disable-next-line */}
        <a>
          <circle id="circle7" fill="#d3bdba" className="Home-circle" cx="175" cy="30" r="6" />
        </a>
      </svg>
      <div className="Home-email">
        <a onClick={sendEmail} href={"mailto:" + EMAIL}>
          {EMAIL}
        </a>
      </div>
      <div className="Home-footer">
        <p>
          <i>
            To be modern in today’s creative landscape is to blur the lines and forgo preconceptions. <br/>
            A lifelong string of affairs between different art forms sparks a desire for sublime visual experiences. <br/>
          </i>
          <span></span>
          ART DIRECTION | BRANDING | TEXTILE DESIGN | PRODUCT DESIGN | COPYWRITING
        </p>
      </div>
      {/* Prefetch images of clusters */}
      <link rel="prefetch" href={cluster1} />
      <link rel="prefetch" href={cluster2} />
      <link rel="prefetch" href={cluster3} />
      <link rel="prefetch" href={cluster4} />
      <link rel="prefetch" href={cluster5} />
      <link rel="prefetch" href={cluster6} />
    </div>
  );
}

export default Home;
