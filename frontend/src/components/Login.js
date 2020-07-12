import React, { Component } from "react";
import LoginForm from "./LoginForm";
import Register from "./Register";

class Login extends Component {
  render() {
    return (
      <div>
        <h2>EverythingSports </h2>
        <p>The Facebook of Sports.</p>
        <LoginForm />
        <Register />
      </div>
    );
  }
}

export default Login;
