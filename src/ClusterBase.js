import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import logo from './assets/logo.png';
import './Cluster.css';

function ClusterBase(board) {
  const history = useHistory();
  const location = useLocation();
  return (
    <div className="cluster">
      {/* `board` must have a `cluster-board` as className for it's outermost element */}
      {board}
      {/* eslint-disable-next-line */}
      <a className="Home-logo-header" onClick={() => {
        console.log(location.state)
        if (location.state && location.state.internal) {
          history.goBack();
        }
        history.replace('/');
      }}>
        <img src={logo} className="Home-logo" alt="logo" />
      </a>
    </div>
  );
}

export default ClusterBase;
