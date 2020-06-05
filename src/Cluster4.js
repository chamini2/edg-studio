import React from 'react';
import ClusterBase from './ClusterBase';

import scarf from './assets/Cluster4/scarf.jpg'
import vellies from './assets/Cluster4/vellies.webp'
import wrapping_paper from './assets/Cluster4/wrapping_paper.webp'
import socks from './assets/Cluster4/socks.png'
import travel_cup from './assets/Cluster4/travel_cup.png'

function Cluster() {
  return ClusterBase(
    <svg className="cluster-board" viewBox="0 0 8000 5200" xmlns="http://www.w3.org/2000/svg">
      <image href={wrapping_paper} x="1042" y="1475" height="2055"></image>
      <text className="cluster-image-title" y="1475" dy="2200">
        <tspan x="1042">ANTIDOTE / Recycled Gift Wrapping Paper</tspan>
        <tspan x="1042" dy="75">Design</tspan>
      </text>
      
      <image href={vellies} x="2950" y="1370" height="2275"></image>
      <text className="cluster-image-title" y="1370" dy="-190">
        <tspan x="2950">ANTIDOTE / Brother Vellies Social Media Campaign</tspan>
        <tspan x="2950" dy="75">Art Direction and Photography</tspan>
      </text>
      
      <image href={scarf} x="5100" y="1184" height="2600"></image>
      <text textAnchor="end" className="cluster-image-title" y="1184" dy="2750">
        <tspan x="6800">ANTIDOTE / Signature Logo Jacquard Scarf in 100% Alpaca</tspan>
        <tspan x="6800" dy="75">Design</tspan>
      </text>
      
      <image href={socks} x="4400" y="900" width="1000"></image>
      <text className="cluster-image-title" y="900" dy="-225">
        <tspan x="4420">ANTIDOTE / Common Sense Socks</tspan>
        <tspan x="4420" dy="75">Design</tspan>
      </text>
      
      <image href={travel_cup} x="2000" y="3100" width="950"></image>
      <text className="cluster-image-title" y="3100" dy="1600">
        <tspan x="2000">ANTIDOTE / Biodegradable Travel Cup</tspan>
        <tspan x="2000" dy="75">Design</tspan>
      </text>
    </svg>
  );
}

export default Cluster;
