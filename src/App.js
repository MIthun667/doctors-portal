import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Appointment from './components/Home/Appointment/Appointment';
import Login from './components/Login/Login/Login';
import Signup from './components/Login/Signup/Signup';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import Contact from './components/Home/Contact/Contact';



const App = () => {
  return (
    <>
    <AuthProvider>
     <Router>
      <Switch>
         <Route exact path="/appointment" component={Appointment}>
            <Appointment />
        </Route>
        <Route exact path="/home" component={Home}>
            <Home />
        </Route>
        <Route exact path="/login" component={Login}>
            <Login />
        </Route>
        <Route exact path="/signup" component={Signup}>
            <Signup />
        </Route>
        <Route exact path="/contact" component={Contact}>
            <Contact />
        </Route>
        <Route exact path="/" component={Home}>
            <Home />
        </Route>
      </Switch>
     </Router>
    </AuthProvider>
    </>
    
  );
};

export default App;
