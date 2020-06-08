import React from 'react';
import ClusterBase from './ClusterBase';

import girl from './assets/Cluster3/girl.jpg'
import water from './assets/Cluster3/water.jpg'
import text from './assets/Cluster3/text.png'
import acquatermale_video from './assets/Cluster3/acquatermale.mp4'

function Cluster() {
  return ClusterBase(
    <svg className="cluster-board" viewBox="0 0 8000 5200" xmlns="http://www.w3.org/2000/svg">
      <image href={water} x="5915" y="1313" width="1417" height="2122"></image>

      <image href={girl} x="3833" y="865" width="2110" height="3160"></image>

      <svg x="541" y="1400" width="3200" height="1800" viewBox="0 0 480 270">
        <foreignObject x="0" y="0" width="480" height="270">
          <video
            title="ISCHIASPA - AcquaTermale"
            width="100%"
            height="100%"
            src={acquatermale_video} type="video/mp4"
            controls
            controlsList="nodownload"
          ></video>
        </foreignObject>
      </svg>
      <text className="cluster-image-title" y="1400" dy="2100">
        <tspan x="541">Ischia Spa Cosmetics / Acqua Termale Spray</tspan>
        <tspan x="541" dy="75">Bottle Design and Art Direction</tspan>
        <tspan x="541" dy="75">Photography and Styling by WCP Collective</tspan>
      </text>

      <image href={text} x="2917" y="3010" width="1810" height="1812"></image>
    </svg>
  );
}

export default Cluster;
