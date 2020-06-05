import React from 'react';
import ClusterBase from './ClusterBase';

import whole from './assets/Cluster5/art_basel.jpg'

function Cluster() {
  return ClusterBase(
    <svg className="cluster-board" viewBox="0 0 8000 5200" xmlns="http://www.w3.org/2000/svg">
      <image href={whole} x="600" y="0" width="6800"></image>
      <text className="cluster-image-title" y="4000">
        <tspan x="830">ANTIDOTE / Baseling 100% Organic Cotton Tee</tspan>
        <tspan x="830" dy="75">Design and Copywriting</tspan>
        <tspan x="830" dy="75">*Photography by Diego Armando / Arturo Alcala</tspan>
      </text>
    </svg>
  );
}

export default Cluster;
