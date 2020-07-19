import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import { useStore } from "../store/useStore";
import { useObserver, useLocalStore } from "mobx-react";
import ListOfUsers from "./ListOfUsers";
import Container from "react-bootstrap/Container";

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
            <Col>hi hi im to the right</Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  ));
}
