import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./About.css";

//import { observable } from "mobx";
//import { observer } from "mobx";

class About extends Component {
  render() {
    return (
      <div class="sport">
        <Row>
          <Col>
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
                <h5>Morgan Farrell </h5>
              </li>
              <li>
                <h5>Ralph Hernandez</h5>
              </li>
              <li>
                <h5>Jasmyne Ford</h5>
              </li>
            </ul>
          </Col>
          <Col>
            <img
              //style={{ padding: "5px" }}
              alt="silhouette"
              src="https://image.freepik.com/free-vector/group-businesspeople-holding-raised-hands-happy-successful-team-black-silhouettes_48369-18388.jpg"
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default About;
//export default observer(About)
