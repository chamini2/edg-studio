import React from 'react';
import ClusterBase from './ClusterBase';

import image from './assets/Cluster-2_2000.jpg'

function Cluster() {
  return ClusterBase(
    <svg className="cluster-board" viewBox="0 0 8000 5200" xmlns="http://www.w3.org/2000/svg">
      <image href={image} x="950" y="600" width="6000"></image>

      <text className="cluster-image-title" y="1000">
        <tspan x="7000">Pinta Miami / Crossing Cultures Logo</tspan>
        <tspan x="7000" dy="75">Design</tspan>
      </text>

      <text fill="white" className="cluster-image-title" y="3700">
        <tspan textAnchor="end" x="6750">ANTIDOTE / Je T'aime Miami Candle</tspan>
        <tspan textAnchor="end" x="6750" dy="75">Design</tspan>
      </text>

      <text className="cluster-image-title" y="1117" dy="-200">
        <tspan x="975">ANTIDOTE / Naadam Collaboration Proposal</tspan>
        <tspan x="975" dy="75">Design</tspan>
      </text>

      <text className="cluster-image-title" y="4350">
        <tspan x="1820">ANTIDOTE / Upcycled Gingham Tote</tspan>
        <tspan x="1820" dy="75">Design</tspan>
      </text>

      <text className="cluster-image-title" y="3970">
        <tspan x="4250">ANTIDOTE / Signature Logo Jacquard Scarf</tspan>
        <tspan x="4250" dy="75">Design</tspan>
      </text>
    </svg>
  );
}

export default Cluster;
