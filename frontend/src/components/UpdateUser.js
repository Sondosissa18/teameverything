import React, { Component } from "react";
import mongoose from "mongoose";
// import React from "react";
// import { useStore } from "../store/useStore";
// import { useObserver, useLocalStore } from "mobx-react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class UpdateUser extends Component {
  state = {
    displayName: "",
    about: "",
    school: "",
    location: "",
  };
  componentDidMount() {}

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    event.preventDefault();
    const data = {
      displayName: this.state.displayName,
      about: this.state.about,
      school: this.state.school,
      location: this.state.location,
    };
    this.props.updateUser(data);
    this.setState({
      displayName: "",
      about: "",
      school: "",
      location: "",
    });
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        style={{
          display: "flex",
          flexDirection: "row",
          float: "right",
          flexWrap: "wrap",
          width: "250px",
          border: "1px",
        }}
      >
        <Card.Title style={{ fontSize: "16px", paddingTop: "10px" }}>Your School:</Card.Title>
        <input
          style={{ display: "block" }}
          name="school"
          type="text"
          placeholder="text here"
          autoFocus
          required
          onChange={this.handleChange}
        />
        <Card.Title style={{ fontSize: "16px", paddingTop: "10px" }}>Your Location:</Card.Title>
        <input
          style={{ display: "block" }}
          type="text"
          name="location"
          placeholder="text here"
          required
          onChange={this.handleChange}
        />
        <Card.Title style={{ paddingTop: "10px", fontSize: "16px" }}>Edit Display Name:</Card.Title>
        <Card.Text>
          <input
            style={{ display: "block" }}
            type="text"
            name="displayName"
            //autoFocus
            required
            onChange={this.handleChange}
            placeholder="text here"
            value={this.state.displayName}
            //size="lg"
          />
          <br />
          <Card.Title style={{ fontSize: "16px" }}>Edit Bio:</Card.Title>
          <input
            style={{
              borderRadius: "0",
              paddingTop: "10px",
              display: "block",
            }}
            squared="true"
            size="sm"
            type="text"
            name="about"
            required
            onChange={this.handleChange}
            placeholder="text here"
            value={this.state.about}
          />
          <br />
          <Button variant="primary" type="submit" value="submit" onSubmit={this.handleSubmit}>
            Save Edit
          </Button>
        </Card.Text>
      </form>
    );
  }
}

export default UpdateUser;

// export default function UpdateUser() =>{
//   const store = useStore();
//   const state = useLocalStore(() => {
//     return {
//  displayName: "",
//  about:""
//  displayName: state.displayName,
//  about: state.about,
// }
//    }

//    useEffect(() {

//   })

//   handleChange = (e) => {
//     setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   handleSubmit = (e) => {
//     event.preventDefault();
//     const data = {
//     displayName: state.displayName,
//     about: state.about,
//     school: state.school,
//     location: state.location
//     };
//     state.updateUser(data);
//     setState({
//       displayName: "",
//       about: "",
//       school: "",
//       location: "",
//     });
//   }

//  return useObserver(() =>
// <form
//         onSubmit={handleSubmit}
//         style={{
//           display: "flex",
//           flexDirection: "row",
//           float: "right",
//           flexWrap: "wrap",
//           width: "250px",
//         }}
//       >
// <Card.Title style={{ fontSize: "16px", paddingTop: "10px" }}>Your School:</Card.Title>
// <input
//   style={{ display: "block" }}
//   name="school"
//   type="text"
//   placeholder="text here"
//   autoFocus
//   required
//   onChange={this.handleChange}
// />
// <Card.Title style={{ fontSize: "16px", paddingTop: "10px" }}>Your Location:</Card.Title>
// <input
//   style={{ display: "block" }}
//   type="text"
//   name="location"
//   placeholder="text here"
//   required
//   onChange={this.handleChange}
// />
//         <Card.Title style={{ fontSize: "16px" }}>Edit Display Name:</Card.Title>
//         <Card.Text>
//           <input
//             style={{ display: "block" }}
//             type="text"
//             name="displayName"
//             autoFocus
//             required
//             onChange={this.handleChange}
//             placeholder="text here"
//             value={state.displayName}
//             size="lg"
//           />
//           <br />
//           <Card.Title style={{ fontSize: "16px" }}>Edit Bio:</Card.Title>
//           <input
//             style={{
//               borderRadius: "0",
//               paddingTop: "10px",
//               display: "block",
//             }}
//             squared="true"
//             size="sm"
//             type="text"
//             name="about"
//             required
//             onChange={handleChange}
//             placeholder="text here"
//             value={state.about}
//           />
//           <br />
//           <Button
//             //outline
//             variant="primary"
//             //size="btn btn-secondary btn-sm" //  "sm"
//             type="submit"
//             value="submit"
//             onSubmit={handleSubmit}
//           >
//             Save Edit
//           </Button>
//         </Card.Text>
//       </form>
// )
//  }
