import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import { useStore } from "../store/useStore";
import { useObserver } from "mobx-react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Message from "./Message.js";

export default function Home() {
  const store = useStore();
  return useObserver(() => (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"
      }}
    >
      <Row>
         xs={6} md={3}>
          <Image
            src={
              store.user.picLocation
                ? process.env.REACT_APP_API_URL + store.user.picLocation
                : "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
            }
            thumbnail
          />
       
      </Row>

      <h3>
        {store.user.displayName ||
          "Welcome!!! Click On Profile & Add Your Info!"}
      </h3>
      <h6>Bio: {store.user.about} </h6>
      <h6> School: {store.user.school}</h6>
      <h6> Location: {store.user.location}</h6>
      <div>
        <h3>Messages</h3>
        <Message />
      </div>
    </div>
  ));
}
