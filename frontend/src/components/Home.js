import React, { Component } from "react";
import Login from "./LoginForm";
import { Container } from "react-bootstrap";
import Register from "./Register";

class Home extends Component {
  render() {
    return (
      <div id="home">
        <h2>EverythingSports </h2>
        <p>The Facebook of Sports.</p>
        <p>This is the Home Landing Page</p>
   
      </div>
    );
  }
}

export default Home;
