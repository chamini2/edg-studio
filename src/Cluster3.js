import React from 'react';
import ClusterBase from './ClusterBase';

import image from './assets/Cluster-3_2000.jpg'
import video from './assets/Cluster-3_video.mp4'

function Cluster() {
  return ClusterBase(
    <>
    <video
      className="cluster-video"
      title="ISCHIASPA - AcquaTermale"
      src={video} type="video/mp4"
      autoPlay
      controls
      controlsList="nodownload"
      xmlns="http://www.w3.org/2000/svg"
      // HACK: because of a bug in Safari https://bugs.webkit.org/show_bug.cgi?id=23113
      style={{
        position: 'absolute',
        bottom: '50%',
        right: '52%',
        width: 'calc(min(90vw, 1080px) * .4)', // looking at .cluster width and taking 40% of it
        zIndex: '1' // make it appear over jpeg of cluster
      }}
    ></video>
    <svg className="cluster-board" viewBox="0 0 8000 5200" xmlns="http://www.w3.org/2000/svg">
      <image href={image} x="2700" y="600" width="5200"></image>

      <text className="cluster-image-title" y="1400" dy="2100">
        <tspan x="541">Ischia Spa Cosmetics / Acqua Termale Spray</tspan>
        <tspan x="541" dy="75">Bottle Design and Art Direction</tspan>
        <tspan x="541" dy="75">Photography and Styling by WCP Collective</tspan>
      </text>
    </svg>
    </>
  );
}

export default Cluster;
