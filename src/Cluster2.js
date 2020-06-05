import React from 'react';
import ClusterBase from './ClusterBase';

import miami_candle from './assets/Cluster2/miami_candle.webp'
import naadam_proposal from './assets/Cluster2/naadam_proposal.jpg'
import pinta_logo from './assets/Cluster2/pinta_logo.png'
import scarf from './assets/Cluster2/scarf.png'
import upcycled_tote from './assets/Cluster2/upcycled_tote.png'

function Cluster() {
  return ClusterBase(
    <svg className="cluster-board" viewBox="0 0 8000 5200" xmlns="http://www.w3.org/2000/svg">
      <image href={pinta_logo} x="3800" y="584" width="2890"></image>
      <text className="cluster-image-title" y="584" dy="300">
        <tspan x="6720">Pinta Miami / Crossing Cultures Logo</tspan>
        <tspan x="6720" dy="75">Design</tspan>
      </text>

      <image href={miami_candle} x="3700" y="1575" height="2145"></image>
      <text fill="white" className="cluster-image-title" y="1575" dy="1920">
        <tspan textAnchor="end" x="6420">ANTIDOTE / Je T'aime Miami Candle</tspan>
        <tspan textAnchor="end" x="6420" dy="75">Design</tspan>
      </text>

      <image href={naadam_proposal} x="975" y="1117" width="2517"></image>
      <text className="cluster-image-title" y="1117" dy="-200">
        <tspan x="975">ANTIDOTE / Naadam Collaboration Proposal</tspan>
        <tspan x="975" dy="75">Design</tspan>
      </text>

      <image href={upcycled_tote} x="1550" y="2333" width="1750"></image>
      <text className="cluster-image-title" y="2333" dy="2250">
        <tspan x="1700">ANTIDOTE / Upcycled Gingham Tote</tspan>
        <tspan x="1700" dy="75">Design</tspan>
      </text>

      <image href={scarf} x="3350" y="1355" height="2810"></image>
      <text className="cluster-image-title" y="1355" dy="2680">
        <tspan x="4150">ANTIDOTE / Signature Logo Jacquard Scarf</tspan>
        <tspan x="4150" dy="75">Design</tspan>
      </text>
    </svg>
  );
}

export default Cluster;
