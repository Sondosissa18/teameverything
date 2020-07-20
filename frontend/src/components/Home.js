import React, { Component } from "react";
import { Row, Col, Image, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import { useStore } from "../store/useStore";
import { useObserver, useLocalStore } from "mobx-react";
import ListOfUsers from "./ListOfUsers";
import Container from "react-bootstrap/Container";
import onlinechat2 from "../images/onlinechat2.png";
import search from "../images/search.jpg";

export default function Home() {
  const store = useStore();
  return useObserver(() => (
    <>
      <div className="image">
        <Container style={{ width: "100%", padding: "2px" }}>
          <Row>
            <Col>
              <Image
                src={
                  store.user.picLocation
                    ? process.env.REACT_APP_API_URL + store.user.picLocation
                    : "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                }
                thumbnail
              />
              <>
                <h3>
                  {store.user.displayName ||
                    "Welcome!!! Click On Profile & Add Your Info!"}
                </h3>
                <h6>Bio: {store.user.about} </h6>
                <h6> School: {store.user.school}</h6>
                <h6> Location: {store.user.location}</h6>
              </>
            </Col>
            <Col>
              <ListOfUsers />
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={search} />
                <Card.Body>
                  <Card.Title>Checkout Our College Search!</Card.Title>
                  <Card.Text>
                    Search for colleges here and abroad. Get their information
                    and then chat with a coach!
                  </Card.Text>
                  <Button variant="primary">College Search</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={onlinechat2} />
                <Card.Body>
                  <Card.Title>Online Recruiter Chat</Card.Title>
                  <Card.Text>
                    Once you find the perfect college, contact the recruiter
                    right here using our recruiter chat
                  </Card.Text>
                  <Button variant="primary">Online Chat</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  ));
}
