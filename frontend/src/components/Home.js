import React, { Component } from "react";
import Login from "./LoginForm";
import { Container } from "react-bootstrap";
import Register from "./Register";
import ProfileCard from "./ProfileCard";
import Message from "./Message";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div id="home">
        <h2>Everything Sports. </h2>
        <p>The Facebook of Sports.</p>
        {/* <p>This is the Home Landing Page</p> */}
        <div class="columns">
          <div class="profile">
            <Jumbotron>
              <h3>Profile</h3>
              <ProfileCard />
            </Jumbotron>{" "}
          </div>
          <div class="message">
            <Jumbotron>
              <h3>Messages</h3>
              <Message />
            </Jumbotron>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
