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
  // const state = useLocalStore(() => {
  //   return {
  //     getUser(props) {
  //       if (state.props.user !== props.user) {
  //         state.props.getUser();
  //       }
  //     },
  //   };
  // });

  console.log(store);
  return useObserver(() => (
    <Card style={{ Width: "100", backgroundColor: "#B9DEDF", border: "1px solid" }}>
      <Card.Img
        style={{ Width: "100", padding: "47px", border: "1px solid", color: "#5EA1A6", backgroundColor: "#B9DEDF" }}
        className="cardImg"
        variant="top"
        src={
          `${process.env.REACT_APP_API_URL}${store.user.picLocation}` ||
          "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
        }
      />
      <UploadImg />
      <Card.Title className="title">
        <h1>{store.user.displayName}</h1>
      </Card.Title>
      <div className="bio">
        <h4>Bio:</h4> {store.user.about || "You Do Not Have A Bio Yet :)"}
        <br />
        <br />
        <br />
        <div className="school">
          <h6>School:</h6> {store.user.school}
        </div>
        <br />
        <div className="location">
          <h6>Location:</h6> {store.user.location}
        </div>
        <br />
      </div>
    </Card>
  ));
}
