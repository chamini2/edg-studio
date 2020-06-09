import React from 'react';
import ClusterBase from './ClusterBase';

import image from './assets/Cluster-6_2000.jpg'
import switch_ from './assets/Cluster-6_switch.gif';

function Cluster() {
  return ClusterBase(
    <svg className="cluster-board" viewBox="0 0 8000 5200" xmlns="http://www.w3.org/2000/svg">
      <image href={image} x="1550" y="725" width="5700"></image>

      <text textAnchor="end" className="cluster-image-title" y="960" dy="40">
        <tspan x="1460">Hinojosa Design Studio /</tspan>
        <tspan x="1460" dy="75">Logo Design</tspan>
      </text>

      <text className="cluster-image-title" y="3300">
        <tspan x="6200">ANTIDOTE / Jewelry Collaboration Proposal for SOKO</tspan>
        <tspan x="6200" dy="75">Design</tspan>
      </text>

      <text className="cluster-image-title" y="4570">
        <tspan x="3720">ANTIDOTE /  The Switch Social Media Campaign</tspan>
        <tspan x="3720" dy="75">Design</tspan>
      </text>

      <image href={switch_} x="2350" y="3396" width="1280"></image>
    </svg>
  );
}

export default Cluster;
