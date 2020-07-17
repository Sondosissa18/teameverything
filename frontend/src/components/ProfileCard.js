//import React, { Component } from "react";
import UploadImg from "./UploadImg";
//import DeleteUser from "./DeleteUser";
import UpdateUser from "./UpdateUser";
import React, { useEffect } from "react";
import { useStore } from "../store/useStore";
import { useObserver, useLocalStore } from "mobx-react";
import Card from "react-bootstrap/Card";

export default function ProfileCard() {
  const store = useStore();

  console.log(store);
  return useObserver(() => (
    <Card style={{ Width: "100px", backgroundColor: "#B9DEDF", border: "1px solid" }}>
      <Card.Img
        style={{ Width: "100", padding: "47px", border: "1px solid", color: "#5EA1A6", backgroundColor: "#B9DEDF" }}
        className="cardImg"
        variant="top"
        src={
          store.user.picLocation
            ? process.env.REACT_APP_API_URL + store.user.picLocation
            : "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
        }
      />
      <UploadImg />
      <Card.Title className="title" style={{ marginLeft: "5px" }}>
        <h1>{store.user.displayName}</h1>
      </Card.Title>
      <div className="bio" style={{ marginLeft: "5px" }}>
        <h4>Bio:</h4> {store.user.about || "Please...Tell Us About You! :)"}
        <br />
        <br />
        <br />
        <div className="school" style={{ marginLeft: "5px" }}>
          <h4>School:</h4> {store.user.school}
        </div>
        <br />
        <div className="location" style={{ marginLeft: "5px" }}>
          <h4>Location:</h4> {store.user.location}
        </div>
        <br />
      </div>
    </Card>
  ));
}
