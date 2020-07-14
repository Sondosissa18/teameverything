import React, { Component } from "react";
import Login from "./LoginForm";
import { Container, Form, Card } from "react-bootstrap";
import Register from "./Register";
import storeInstance from "../store/Store";
import { useStore } from "../store/useStore";
import { useObserver, useLocalStore } from "mobx-react";

export default function Home() {
  const store = useStore();
  return useObserver(() => (
    <div id="home">
      <h2>EverythingSports </h2>
      <p>The Facebook of Sports.</p>
      <p>This is the Home Landing Page</p>
      {/* <div> */}
      <Card.Img
        style={{
          Height: "10%",
          Width: "10%",
          padding: "100px",
          // border: "1px solid",
          //color: "#5EA1A6",
          //backgroundColor: "#B9DEDF",
        }}
        className="cardImg"
        variant="top"
        src={
          `${process.env.REACT_APP_API_URL}${store.user.picLocation}` ||
          "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
        }
      />

      <h3>Hi {store.user.displayName}!</h3>

      <h6> School: {store.user.school}</h6>
      <h6> Location: {store.user.location}</h6>
    </div>
    // </div>

    ///>
  ));
}

// class Home extends Component {
//   render() {
//     return (
//       <div id="home">
//         <h2>EverythingSports </h2>
//         <p>The Facebook of Sports.</p>
//         <p>This is the Home Landing Page</p>
//         <p>Hi store.user.displayName</p>
//       </div>
//     );
//   }
// }

// export default Home;
