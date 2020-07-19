import React from "react";
import { useObserver } from "mobx-react";
import { Row, Col } from "react-bootstrap";
import DeleteUser from "./DeleteUser";
import UpdateUser from "./UpdateUser";
import ProfileCard from "./ProfileCard";
import Card from "react-bootstrap/Card";
import "./Profile.css";

export default function Profile() {
  return useObserver(() => (
    <Row>
      <Col>
        <ProfileCard />
        <UpdateUser />
        <DeleteUser />
      </Col>
    </Row>
  ));
}
