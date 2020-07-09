import React, { Component } from "react";
import mongoose from "mongoose";
// import React from "react";
// import { useStore } from "../store/useStore";
// import { useObserver, useLocalStore } from "mobx-react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

class DeleteUser extends React.Component {
  handleDeleteUser = (e) => {
    event.preventDefault();
    const confirmed = window.confirm("Delete will be Final");
    if (confirmed) {
      this.props.deleteUser(this.props.user);
    }
  };

  render() {
    return (
      <React.Fragment>
        <Button variant="outline-danger" size="sm" onClick={this.handleDeleteUser}>
          Delete Profile
        </Button>
      </React.Fragment>
    );
  }
}

export default DeleteUser;

// export default function DeleteUser() =>{
//   const store = useStore();
//   const state = useLocalStore(() => {
//     return {}
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const confirmed = window.confirm("Delete will be Final");
//     if (confirmed) {
//       await.store.deleteUser(state.user);
//     }
//   }
// return useObserver(() => (
// <React.Fragment>
// <Button
// variant="outline-danger"
// size="sm"
// onClick={this.handleDeleteUser}
// >
// Delete Profile
// </Button>
// </React.Fragment>
// ))
//  }
