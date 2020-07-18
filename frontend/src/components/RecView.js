import React, { Component } from "react";
import { useStore } from "../store/useStore";
import { useObserver, useLocalStore } from "mobx-react";
import { Container, Form, Card, Row, Col, Image } from "react-bootstrap";

export default function RecView() {
  const store = useStore();
  return useObserver(() => (
    <div>
      {/* <h1>Recruiter Page</h1> */}
      <h2>EverythingSports </h2>
      <p>The Facebook of Sports.</p>
      <h3 style={{ marginLeft: "6px" }}>{store.user.displayName || "Display Name"}</h3>
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
    </div>
  ));
}
