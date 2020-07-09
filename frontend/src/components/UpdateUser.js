//import React, { Component } from "react";
import mongoose from "mongoose";
import React from "react";
import { useStore } from "../store/useStore";
import { useObserver, useLocalStore } from "mobx-react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function UpdateUser() {
  const store = useStore();
  const state = useLocalStore(() => {
    return {
      displayName: "",
      about: "",
      displayName: "",
      about: "",
    };
  });

  //  useEffect(() {

  // })

  const handleChange = (e) => {
    setState({
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   await store.updateUser(store.user.state);
  // };

  const handleSubmit = (e) => {
    event.preventDefault();
    const data = {
      displayName: store.user.displayName,
      about: store.user.about,
      school: store.user.school,
      location: store.user.location,
    };
    state.updateUser(data);
    setState({
      displayName: "",
      about: "",
      school: "",
      location: "",
    });
  };

  return useObserver(() => (
    <form
      onSubmit={handleSubmit}
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
        value={store.user.school}
        onChange={handleChange}
      />
      <Card.Title style={{ fontSize: "16px", paddingTop: "10px" }}>Your Location:</Card.Title>
      <input
        style={{ display: "block" }}
        name="location"
        type="text"
        placeholder="text here"
        required
        value={store.user.location}
        onChange={handleChange}
      />
      <Card.Title style={{ paddingTop: "10px", fontSize: "16px" }}>Edit Display Name:</Card.Title>
      <Card.Text>
        <input
          style={{ display: "block" }}
          size="lg"
          name="displayName"
          type="text"
          placeholder="text here"
          required
          value={store.user.displayName}
          onChange={handleChange}
        />
        <br />
        <Card.Title style={{ fontSize: "16px" }}>Edit Bio:</Card.Title>
        <input
          style={{
            borderRadius: "0",
            paddingBottom: "10px",
            display: "block",
          }}
          size="sm"
          squared="true"
          name="about"
          type="text"
          placeholder="text here"
          required
          value={store.user.about}
          onChange={handleChange}
        />
        <br />
        <Button
          //outline
          variant="primary"
          //size="btn btn-secondary btn-sm" //  "sm"
          type="submit"
          value="submit"
          onSubmit={handleSubmit}
        >
          Save Edit
        </Button>
      </Card.Text>
    </form>
  ));
}

// class UpdateUser extends Component {
//   state = {
//     displayName: "",
//     about: "",
//     school: "",
//     location: "",
//   };
//   componentDidMount() {}

//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   handleSubmit = (e) => {
//     event.preventDefault();
//     const data = {
//       displayName: this.state.displayName,
//       about: this.state.about,
//       school: this.state.school,
//       location: this.state.location,
//     };
//     this.props.updateUser(data);
//     this.setState({
//       displayName: "",
//       about: "",
//       school: "",
//       location: "",
//     });
//   };

//   render() {
//     return (
//       <form
//         onSubmit={this.handleSubmit}
//         style={{
//           display: "flex",
//           flexDirection: "row",
//           float: "right",
//           flexWrap: "wrap",
//           width: "250px",
//           border: "1px",
//         }}
//       >
//         <Card.Title style={{ fontSize: "16px", paddingTop: "10px" }}>Your School:</Card.Title>
//         <input
//           style={{ display: "block" }}
//           name="school"
//           type="text"
//           placeholder="text here"
//           autoFocus
//           required
//           onChange={this.handleChange}
//         />
//         <Card.Title style={{ fontSize: "16px", paddingTop: "10px" }}>Your Location:</Card.Title>
//         <input
//           style={{ display: "block" }}
//           type="text"
//           name="location"
//           placeholder="text here"
//           required
//           onChange={this.handleChange}
//         />
//         <Card.Title style={{ paddingTop: "10px", fontSize: "16px" }}>Edit Display Name:</Card.Title>
//         <Card.Text>
//           <input
//             style={{ display: "block" }}
//             type="text"
//             name="displayName"
//             //autoFocus
//             required
//             onChange={this.handleChange}
//             placeholder="text here"
//             value={this.state.displayName}
//             //size="lg"
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
//             onChange={this.handleChange}
//             placeholder="text here"
//             value={this.state.about}
//           />
//           <br />
//           <Button variant="primary" type="submit" value="submit" onSubmit={this.handleSubmit}>
//             Save Edit
//           </Button>
//         </Card.Text>
//       </form>
//     );
//   }
// }

// export default UpdateUser;
