import React from 'react';
import ClusterBase from './ClusterBase';

import hinojosa from './assets/Cluster6/hinojosa.png';
import soko from './assets/Cluster6/soko.png';
import switch_ from './assets/Cluster6/switch.webp';

function Cluster() {
  return ClusterBase(
    <svg className="cluster-board" viewBox="0 0 8000 5200" xmlns="http://www.w3.org/2000/svg">
      <image href={hinojosa} x="1560" y="960" height="2415"></image>
      <text textAnchor="end" className="cluster-image-title" y="960" dy="40">
        <tspan x="1460">Hinojosa Design Studio /</tspan>
        <tspan x="1460" dy="75">Logo Design</tspan>
      </text>

      <image href={soko} x="3817" y="960" width="3438"></image>
      <text className="cluster-image-title" y="960" dy="3000">
        <tspan x="3817">ANTIDOTE / Jewelry Collaboration Proposal for SOKO</tspan>
        <tspan x="3817" dy="75">Design</tspan>
      </text>

      <image href={switch_} x="2350" y="3396" width="1280"></image>
    </svg>
  );
}

export default Cluster;
