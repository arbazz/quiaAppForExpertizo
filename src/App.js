import React from 'react';
import './App.css';
import Home from './Screens/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Quiz from './Screens/Quiz'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/quiz">
          <Quiz />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
