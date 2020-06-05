import React from 'react';
import ClusterBase from './ClusterBase';

import girl from './assets/Cluster3/girl.jpg'
import water from './assets/Cluster3/water.jpg'
import text from './assets/Cluster3/text.png'

function Cluster() {
  return ClusterBase(
    <svg className="cluster-board" viewBox="0 0 8000 5200" xmlns="http://www.w3.org/2000/svg">
      <image href={water} x="5915" y="1313" width="1417"></image>
      <text className="Cluster-image-title" y="1600" dy="800">
        <tspan x="2620">ANTIDOTE /</tspan>
        <tspan x="2620" dy="50">XXX</tspan>
      </text>

      <image href={girl} x="3833" y="865" height="3160"></image>
      {/* <text className="cluster-image-title" y="760">
        <tspan x="2920">ANTIDOTE /</tspan>
        <tspan x="2920" dy="50">XXX</tspan>
      </text> */}

      <svg x="541" y="1400" width="3200" height="1800" viewBox="0 0 1008 567">
        <foreignObject x="0" y="0" width="1008" height="567">
        <iframe
          title="ISCHIASPA - AcquaTermale"
          width="1008"
          height="567"
          src="https://www.youtube-nocookie.com/embed/CF9M0yonM84"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
        </foreignObject>
      </svg>
      <text className="cluster-image-title" y="1400" dy="2100">
        <tspan x="541">Ischia Spa Cosmetics / Acqua Termale Spray</tspan>
        <tspan x="541" dy="75">Bottle Design and Art Direction</tspan>
        <tspan x="541" dy="75">Photography and Styling by WCP Collective</tspan>
      </text>

      <image href={text} x="2917" y="3010" width="1810"></image>
      {/* <text className="cluster-image-title" y="800" dy="1700">
        <tspan x="6700">ANTIDOTE /</tspan>
        <tspan x="6700" dy="50">XXX</tspan>
      </text> */}
    </svg>
  );
}

export default Cluster;
