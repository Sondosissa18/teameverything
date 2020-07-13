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
      <Card.Title className="title">{store.user.displayName}</Card.Title>
      <div className="bio">
        {store.user.about || "You Do Not Have A Bio Yet :)"}
        <br />
        <br />
        <br />
        <div className="school">{store.user.school}</div>
        <div className="location">{store.user.location}</div>
        <br />
        <br />
      </div>
    </Card>
  ));
}
