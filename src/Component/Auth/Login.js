import React from 'react'
import '../Auth/Login.css';
import { Link, useHistory } from "react-router-dom";
export default function Login() {
    return (
      <div className="loginpage">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
        <div className="login_container">
          <h1>Signin</h1>
          <form>
            <h5>Email or mobile phone number</h5>
            <input type="text" />
            <br />
            <h5>Password</h5>
            <input type="password" />
          </form>
          <button>Continue</button>
          <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>
        </div>
        New to Amazon ?
        <Link to="/register">
          <button className="button_createaccount">Create Account</button>
        </Link>
      </div>
    );
}
