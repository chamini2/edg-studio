import React from 'react';
import ClusterBase from './ClusterBase';

import playing_card_set from './assets/Cluster1/playing_card_set.png'
import wrapping_paper from './assets/Cluster1/wrapping_paper.png'
import postcards from './assets/Cluster1/postcards.webp'
import boy_smells from './assets/Cluster1/boy_smells.webp'
import paper_tape from './assets/Cluster1/paper_tape.webp'

function Cluster() {
  return ClusterBase(
    <svg className="cluster-board" viewBox="0 0 8000 5200" xmlns="http://www.w3.org/2000/svg">
      <image href={wrapping_paper} x="2600" y="1600" height="2000"></image>
      <text className="cluster-image-title" y="1600" dy="800">
        <tspan x="2620">ANTIDOTE / Recycled Wrapping Paper</tspan>
        <tspan x="2620" dy="75">Design</tspan>
      </text>

      <image href={playing_card_set} x="2860" y="670" width="1600"></image>
      <text className="cluster-image-title" y="760">
        <tspan x="2920">ANTIDOTE / Playing Card Set</tspan>
        <tspan x="2920" dy="75">Design</tspan>
      </text>

      <image href={postcards} x="1000" y="1600" width="1500"></image>
      <text className="cluster-image-title" y="1600" dy="-100">
        <tspan x="1000">ANTIDOTE / Je T'aime Miami Postcards</tspan>
        <tspan x="1000" dy="75">Design and Photography</tspan>
      </text>

      <image href={boy_smells} x="4900" y="800" width="2100"></image>
      <text className="cluster-image-title" y="800" dy="1700">
        <tspan x="6700">ANTIDOTE / Boy Smells Campaign</tspan>
        <tspan x="6700" dy="75">Set Styling and Photography</tspan>
      </text>

      <image href={paper_tape} x="2800" y="3000" width="2550"></image>
      <text className="cluster-image-title" y="3000" dy="1000">
        <tspan x="5400">ANTIDOTE / Sustainable Paper Tape</tspan>
        <tspan x="5400" dy="75">Design</tspan>
      </text>
    </svg>
  );
}

export default Cluster;
