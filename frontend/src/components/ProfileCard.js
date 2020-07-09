//import React, { Component } from "react";
import UploadImg from "./UploadImg";
//import DeleteUser from "./DeleteUser";
//import UpdateUser from "./UpdateUser";
import React, { useEffect } from "react";
import { useStore } from "../store/useStore";
import { useObserver, useLocalStore } from "mobx-react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

export default function ProfileCard() {
  const store = useStore();

  return useObserver(() => (
    <Card style={{ Width: "100", backgroundColor: "#B9DEDF", border: "1px solid" }}>
      <Card.Img
        style={{ Width: "100", padding: "47px", border: "1px solid", color: "#5EA1A6", backgroundColor: "#B9DEDF" }}
        className="cardImg"
        variant="top"
        src={
          store.user.picLocation ||
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
        <div>{store.user.school}</div>
        <div>{store.user.location}</div>
        <br />
        <br />
      </div>
    </Card>
  ));
}

// class ProfileCard extends React.Component {
//   componentDidMount() {
//     //console.log("componentDidMount");
//     // this.props.getUser();
//   }

//   componentDidUpdate(prevProps) {
//     // if (this.props.currentUser !== prevProps.currentUser) {
//     //   this.props.getUser();
//     // }
//   }

//   render() {
//     // {
//     //   if (this.props.username === null) {
//     //     return <Loader />;
//     //   }

//     return (
//       <div>
//         <Card style={{ Width: "100", backgroundColor: "#B9DEDF", border: "1px solid" }}>
//           <Card.Img
//             style={{ Width: "100", padding: "47px", border: "1px solid", color: "#5EA1A6", backgroundColor: "#B9DEDF" }}
//             className="cardImg"
//             variant="top"
//             src={
//               this.props.photo
//                 ? "https://kwitter-api.herokuapp.com" + this.props.photo
//                 : "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
//             }
//           />
//           <UploadImg />
//           <Card.Title className="title">{this.props.displayName}</Card.Title>
//           <div className="bio">
//             {this.props.displayName ? this.props.about : "You Do Not Have A Bio Yet :)"}
//             <br />
//             <br />
//             <br />
//             <div>{this.props.school}</div>
//             <div>{this.props.location}</div>
//             <br />
//             <br />
//           </div>
//         </Card>
//       </div>
//     );
//   }
// }

// export default ProfileCard;
