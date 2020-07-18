//import React, { Component } from "react";
//import UploadImg from "./UploadImg";
import DeleteUser from "./DeleteUser";
import UpdateUser from "./UpdateUser";
import ProfileCard from "./ProfileCard";
import React from "react";
import { useObserver } from "mobx-react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

export default function Profile() {
  return useObserver(() => (
    <div>
      <h2>EverythingSports </h2>
      <p>The Facebook of Sports.</p>
      <h4>Profile Page</h4>
      <Card>
        <ProfileCard />
        <UpdateUser />
        <DeleteUser />
      </Card>
    </div>
  ));
}
