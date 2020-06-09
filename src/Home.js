import React from 'react';
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
      <a className="Home-logo-header" href="/">
        <img src={logo} className="Home-logo" alt="logo" />
      </a>
      <svg className="Home-board" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
        <a href="/1">
          <circle id="circle1" fill="#2622c1" className="Home-circle" cx="20" cy="20" r="4" />
        </a>
        <a href="/2">
          <circle id="circle2" fill="#f2e9a3" className="Home-circle" cx="80" cy="40" r="12" />
        </a>
        <a href="/3">
          <circle id="circle3" fill="#415e3f" className="Home-circle" cx="100" cy="50" r="7" />
        </a>
        <a href="/4">
          <circle id="circle4" fill="#b7663b" className="Home-circle" cx="50" cy="60" r="8" />
        </a>
        <a href="/5">
          <circle id="circle5" fill="#d3bb95" className="Home-circle" cx="120" cy="80" r="10" />
        </a>
        <a href="/6">
          <circle id="circle6" fill="#b1bca9" className="Home-circle" cx="150" cy="45" r="4" />
        </a>
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
          To be modern in today’s creative landscape is to blur the lines and forgo preconceptions. <br/>
          A lifelong string of affairs between different art forms sparks a desire for sublime visual
experiences. <br/>
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
