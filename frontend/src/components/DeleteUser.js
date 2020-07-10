//import React, { Component } from "react";
import mongoose from "mongoose";
import React from "react";
import { useStore } from "../store/useStore";
import { useObserver, useLocalStore } from "mobx-react";
import Button from "react-bootstrap/Button";

export default function DeleteUser() {
  //const store = useStore();
  // const state = useLocalStore(() => {
  //   return {}
  // }

  const handleDeleteUser = (e) => {
    e.preventDefault();
    const confirmed = window.confirm("DELETE WILL BE FINAL ...");
    if (confirmed) {
      store.state.deleteUser(store.state.user);
    }
  };
  return useObserver(() => (
    // <React.Fragment>
    <Button variant="outline-danger" size="sm" onClick={handleDeleteUser}>
      DELETE PROFILE
    </Button>
    // </React.Fragment>
  ));
}
