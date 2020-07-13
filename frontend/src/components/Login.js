import React, { Component } from "react";
import LoginForm from "./LoginForm";
import { Container } from "react-bootstrap";
import Register from "./Register";

class Login extends Component {
  render() {
    return (
      <div id="login">
        <h2>EverythingSports </h2>
        <p>The Facebook of Sports.</p>

        <LoginForm />
        <Register />   
      </div>
    );
  }
}

export default Login;
