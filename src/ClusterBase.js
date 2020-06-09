import React from 'react';
import { useHistory } from 'react-router-dom';
import logo from './assets/logo.png';
import './Cluster.css';

function ClusterBase(board) {
  const history = useHistory();
  return (
    <div className="cluster">
      {board}
      <a className="Home-logo-header" href="/" onClick={() => history.goBack()}>
        <img src={logo} className="Home-logo" alt="logo" />
      </a>
    </div>
  );
}

export default ClusterBase;
