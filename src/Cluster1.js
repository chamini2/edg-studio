import React from 'react';
import ClusterBase from './ClusterBase';

import image from './assets/Cluster-1_2000.jpg'

function Cluster() {
  return ClusterBase(
    <svg className="cluster-board" viewBox="0 0 8000 5200" xmlns="http://www.w3.org/2000/svg">
      <image href={image} x="950" y="600" width="6000"></image>

      <text className="cluster-image-title" y="1600" dy="800">
        <tspan x="2620">ANTIDOTE / Recycled Wrapping Paper</tspan>
        <tspan x="2620" dy="75">Design</tspan>
      </text>

      <text className="cluster-image-title" y="760">
        <tspan x="2825">ANTIDOTE / Playing Card Set</tspan>
        <tspan x="2825" dy="75">Design</tspan>
      </text>

      <text className="cluster-image-title" y="1500" dy="-100">
        <tspan x="1000">ANTIDOTE / Je T'aime Miami Postcards</tspan>
        <tspan x="1000" dy="75">Design and Photography</tspan>
      </text>

      <text className="cluster-image-title" y="800" dy="1700">
        <tspan x="6700">ANTIDOTE / Boy Smells Campaign</tspan>
        <tspan x="6700" dy="75">Set Styling and Photography</tspan>
      </text>

      <text className="cluster-image-title" y="3000" dy="1000">
        <tspan x="5400">ANTIDOTE / Sustainable Paper Tape</tspan>
        <tspan x="5400" dy="75">Design</tspan>
      </text>
    </svg>
  );
}

export default Cluster;
