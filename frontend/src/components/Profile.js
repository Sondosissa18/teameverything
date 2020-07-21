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
        <div style={{ padding: "0px", marginLeft: "0px" }}>
          <img
            style={{
              padding: "0px",
              width: "1200px",
              height: "1700px",
              //marginRight: "1000px",
            }}
            alt="basketball picture"
            src="https://www.ncronline.org/sites/default/files/styles/article_full_width/public/web%20markus-spiske-1269203-unsplash.jpg?itok=lWd1zVUF"
          />
        </div>
      </Col>
      <Col>
        <div style={{ marginLeft: "202px" }}>
          <ProfileCard />
          <UpdateUser />
          <DeleteUser />
        </div>
      </Col>
    </Row>
  ));
}
