import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './Component/Header/Header';
import Landing from './Component/LandingPage/Landing';
import Login from './Component/Auth/Login';
import { Checkbox } from '@material-ui/core';
import Checkout from './Component/User/Checkout';
import UserCheckout from './Component/User/Checkout';
import Register from './Component/Register/Register';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Landing} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/checkout" component={UserCheckout} />
    </Router>
  );
}

export default App;
