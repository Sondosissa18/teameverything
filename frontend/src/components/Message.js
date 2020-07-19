import React from "react";
import MessageForm from "./MessageForm";
import Messages from "./Messages";
import ListOfUsers from "./ListOfUsers";
import Button from "./Buttons";
import "./ListOfUsers.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import Card from "./Card";
import { useStore } from "../store/useStore";
import { useObserver } from "mobx-react";

export default function Message() {
  const store = useStore();
  return useObserver(() => (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <div>
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
        <h5>{store.user.displayName}</h5>
        {/* <h6>Bio: {store.user.about} </h6> */}
        <h6> School: {store.user.school}</h6>
        <h6> Location: {store.user.location}</h6>
      </div>
      {/* <div className="container-md" align="center"> */}
      <div>
        {/* <Card /> */}
        <MessageForm />
        <Messages />
      </div>
      <div>
        <h3>Other Sports Fanatics...</h3>
        <ListOfUsers />
      </div>
    </div>
  ));
}
