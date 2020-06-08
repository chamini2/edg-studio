import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Home';
import Circle1 from './Circle1';

function App() {
  return (
    <Router>
      {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/1">
          <Circle1 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
