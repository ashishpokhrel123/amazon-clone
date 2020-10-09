import React from "react";
import "../Register/Register.css";
import { Link, useHistory } from "react-router-dom";
export default function Register() {
  return (
    <div className="registerpage">
      <img
        className="register__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
      />
      <div className="register_container">
        <h1>SignUp</h1>
        <form>
          <h5>Your name</h5>
          <input type="text" />
          <br />
          <h5>Email</h5>
          <input type="email" />
          <br />
          <h5>Password</h5>
          <input type="password" />
          <br />
          <h5>Re-enter Password</h5>
          <input type="password" />
        </form>
        <button>Create Amazon Account</button>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <hr style={{ marginTop: "10px" }}></hr>
        <p>
          {" "}
          Already have Account
          <Link to="/login">
            <h5>Login</h5>
          </Link>
        </p>
      </div>
    </div>
  );
}
