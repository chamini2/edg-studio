import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Home';
import Cluster1 from './Cluster1';
import Cluster2 from './Cluster2';
import Cluster3 from './Cluster3';
import Cluster4 from './Cluster4';
import Cluster5 from './Cluster5';
import Cluster6 from './Cluster6';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"> <Home /> </Route>
        <Route exact path="/1"> <Cluster1 /> </Route>
        <Route exact path="/2"> <Cluster2 /> </Route>
        <Route exact path="/3"> <Cluster3 /> </Route>
        <Route exact path="/4"> <Cluster4 /> </Route>
        <Route exact path="/5"> <Cluster5 /> </Route>
        <Route exact path="/6"> <Cluster6 /> </Route>
      </Switch>
    </Router>
  );
}

export default App;
