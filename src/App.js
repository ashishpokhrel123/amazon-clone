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
import Payment from './Component/Payment/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements} from '@stripe/react-stripe-js';

function App() {
        {/* API KEY for Stripe */ }
  const promise = loadStripe(
    "pk_test_51HaOiHDGcJUA0aErQkZTToFb3qB2dzo0xPuffK2srjn3yeP909WBMNilRNwEFTuTNHCnzudWgY1OVfIMi2tJzaVL00IlpygozY"
    );
  return (
    <Router>
      <Route exact path="/" component={Landing} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/checkout" component={UserCheckout} />
       <Route exact path="/payment">
         <Elements stripe={promise}>
           <Payment />
         </Elements>
       </Route>
    </Router>
  );
}

export default App;
