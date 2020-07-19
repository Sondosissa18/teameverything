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
    <Card style={{ Width: "100px", backgroundColor: "#143ebc", border: "1px solid", borderColor: "#af9631" }}>
      <Card.Img
        style={{ Width: "100", padding: "47px", border: "1px solid", color: "#5EA1A6", backgroundColor: "#143ebc" }}
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
        <h1 style={{ color: "white" }}>{store.user.displayName}</h1>
      </Card.Title>
      <div className="bio" style={{ marginLeft: "6px" }}>
        <h4 style={{ color: "white" }}>Bio:</h4>{" "}
        <h6 style={{ color: "white" }}>{store.user.about || "Please...Tell Us About You! :)"}</h6>
        <br />
        <br />
        {/* <br /> */}
        <div className="school" style={{ marginLeft: "4px" }}>
          <h4 style={{ color: "white" }}>School:</h4> <h6 style={{ color: "white" }}>{store.user.school}</h6>
        </div>
        <br />
        <div className="location" style={{ marginLeft: "4px" }}>
          <h4 style={{ color: "white" }}>Location:</h4> <h6 style={{ color: "white" }}>{store.user.location}</h6>
        </div>
        <br />
      </div>
    </Card>
  ));
}
