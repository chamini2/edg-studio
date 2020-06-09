import React from 'react';
import ClusterBase from './ClusterBase';

import image from './assets/Cluster-4_2000.jpg'

function Cluster() {
  return ClusterBase(
    <svg className="cluster-board" viewBox="0 0 8000 5200" xmlns="http://www.w3.org/2000/svg">
      <image href={image} x="1000" y="725" width="6000"></image>

      <text className="cluster-image-title" y="1475" dy="2200">
        <tspan x="1000">ANTIDOTE / Recycled Gift Wrapping Paper</tspan>
        <tspan x="1000" dy="75">Design</tspan>
      </text>
      
      <text className="cluster-image-title" y="1370" dy="-190">
        <tspan x="2975">ANTIDOTE / Brother Vellies Social Media Campaign</tspan>
        <tspan x="2975" dy="75">Art Direction and Photography</tspan>
      </text>
      
      <text textAnchor="end" className="cluster-image-title" y="1184" dy="2750">
        <tspan x="6950">ANTIDOTE / Signature Logo Jacquard Scarf in 100% Alpaca</tspan>
        <tspan x="6950" dy="75">Design</tspan>
      </text>
      
      <text className="cluster-image-title" y="900" dy="-225">
        <tspan x="4420">ANTIDOTE / Common Sense Socks</tspan>
        <tspan x="4420" dy="75">Design</tspan>
      </text>
      
      <text className="cluster-image-title" y="4600">
        <tspan x="2150">ANTIDOTE / Biodegradable Travel Cup</tspan>
        <tspan x="2150" dy="75">Design</tspan>
      </text>
    </svg>
  );
}

export default Cluster;
