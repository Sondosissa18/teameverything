import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./About.css";

//import { observable } from "mobx";
//import { observer } from "mobx";

class About extends Component {
  render() {
    return (
      <div class="sport">
        <Jumbotron>
          <h1>ABOUT PAGE</h1>
          <h3>Creators:</h3>
          <ul>
            <li>
              <h5>Bethsheba Zebata</h5>
            </li>
            <li>
              <h5>Sondos Issa</h5>
            </li>
            <li>
              <h5>Stephanie Guirand</h5>
            </li>
            <li>
              <h5>Morgan Farrell</h5>
            </li>
            <li>
              <h5>Ralph Hernandez</h5>
            </li>
            <li>
              <h5>Jasmyne Ford</h5>
            </li>
          </ul>
        </Jumbotron>
      </div>
    );
  }
}

export default About;
//export default observer(About)
