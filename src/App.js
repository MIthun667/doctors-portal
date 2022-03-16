import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home/Home';
import Appointment from './components/Home/Appointment/Appointment';
import Login from './components/Login/Login/Login';
import Signup from './components/Login/Signup/Signup';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import Contact from './components/Home/Contact/Contact';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';



const App = () => {
    return (
        <>
            <AuthProvider>
                <Router>
                    <Switch>
                        <PrivateRoute exact path="/appointment">
                            <Appointment />
                        </PrivateRoute>
                        <PrivateRoute exact path="/dashboard">
                            <Dashboard />
                        </PrivateRoute>
                        <Route exact path="/home">
                            <Home />
                        </Route>
                        <Route exact path="/login">
                            <Login />
                        </Route>
                        <Route exact path="/signup">
                            <Signup />
                        </Route>
                        <Route exact path="/contact">
                            <Contact />
                        </Route>
                        <Route exact path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Router>
            </AuthProvider>
        </>

    );
};

export default App;
