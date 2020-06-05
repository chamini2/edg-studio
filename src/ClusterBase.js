import React from 'react';
import logo from './assets/logo.png';
import './Cluster.css';

function ClusterBase(board) {
  return (
    <div className="cluster">
      {board}
      <a className="Home-logo-header" href="/">
        <img src={logo} className="Home-logo" alt="logo" />
      </a>
    </div>
  );
}

export default ClusterBase;
