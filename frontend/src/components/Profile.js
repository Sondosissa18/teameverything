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
      <Col>
        <img
          //style={{ padding: "5px" }}
          alt="basketball picture"
          src="https://www.ncronline.org/sites/default/files/styles/article_full_width/public/web%20markus-spiske-1269203-unsplash.jpg?itok=lWd1zVUF"
        />
      </Col>
    </Row>
  ));
}
