import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Appointment from './components/Home/Appointment/Appointment';
const App = () => {
  return (
    <>
    <Router>
      <Switch>
      <Route exact path="/appointment" component={Appointment}>
        <Appointment />
        </Route>
      <Route exact path="/" component={Home}>
        <Home />
        </Route>
      </Switch>
    </Router>
    </>
    
  );
};

export default App;
