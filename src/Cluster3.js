import React from 'react';
import ClusterBase from './ClusterBase';

import image from './assets/Cluster-3_2000.jpg'
import video from './assets/Cluster-3_video.mp4'

function Cluster() {
  return ClusterBase(
    <svg className="cluster-board" viewBox="0 0 8000 5200" xmlns="http://www.w3.org/2000/svg">
      <image href={image} x="2700" y="600" width="5200"></image>

      <svg x="541" y="1400" width="3200" height="1800" viewBox="0 0 480 270">
        <foreignObject x="0" y="0" width="480" height="270">
          <video
            title="ISCHIASPA - AcquaTermale"
            width="100%"
            height="100%"
            src={video} type="video/mp4"
            autoPlay
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
    </svg>
  );
}

export default Cluster;
