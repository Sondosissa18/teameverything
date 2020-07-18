import React, { Component } from "react";
import Login from "./LoginForm";
import { Container, Form, Card, Row, Col, Image } from "react-bootstrap";
import Register from "./Register";
import storeInstance from "../store/Store";
import { useStore } from "../store/useStore";
import { useObserver, useLocalStore } from "mobx-react";

export default function Home() {
  const store = useStore();
  return useObserver(() => (
    <div id="home">
      <h2>EverythingSports </h2>
      <p>The Facebook of Sports.</p>
      <Container style={{ margin: "0px", padding: "2px" }}>
        <Row>
          <Col xs={6} md={3}>
            <Image
              src={
                store.user.picLocation
                  ? process.env.REACT_APP_API_URL + store.user.picLocation
                  : "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
              }
              thumbnail
            />
          </Col>
        </Row>
      </Container>
      <h3>{store.user.displayName || "Welcome!!! Click On Profile & Add Your Info!"}</h3>
      <h6>Bio: {store.user.about} </h6>
      <h6> School: {store.user.school}</h6>
      <h6> Location: {store.user.location}</h6>
    </div>
  ));
}
