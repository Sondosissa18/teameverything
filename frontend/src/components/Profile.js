import React, { Component } from "react";
//import UploadImg from "./UploadImg";
import DeleteUser from "./DeleteUser";
import UpdateUser from "./UpdateUser";
import ProfileCard from "./ProfileCard";
//import React from "react";
//import { useObserver } from "mobx-react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

class Profile extends Component {
  render() {
    return (
      <div>
        <h2>Profile Page</h2>
        <Card>
          <ProfileCard />
          <UpdateUser />
          <DeleteUser />
        </Card>
      </div>
    );
  }
}

export default Profile;

// export default function Profile() {
//   return useObserver(() => (
// <div>
//  <h2>Profile Page</h2>
//  <Card>
//     <ProfileCard />
//     <UpdateUser />
//     <DeleteUser />
//  </Card>
// </div>
//    ));
//   }
