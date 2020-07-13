//import React, { Component } from "react";
//import mongoose from "mongoose";
import React from "react";
import { useStore } from "../store/useStore";
import { useObserver, useLocalStore } from "mobx-react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function UpdateUser() {
  const store = useStore();
  const state = useLocalStore(() => {
    return {
      selectedUser: null,
      updateSelectedUser(user) {
        state.selectedUser = user;
      },
    };
  });

  // displayName: "",
  // about: "",
  // displayName: "",
  // about: "",
  //  useEffect(() {

  // })

  // const handleChange = (e) => {
  //   setTask(e.target.name, e.target.value);
  // };

  const handleChange = (e) => {
    state.updateSelectedUser([e.target.name], e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await store.updateUser(state.selectedUser);
  };

  // const handleSubmit = (e) => {
  //   event.preventDefault();
  //   const data = {
  //     displayName: store.user.displayName,
  //     about: store.user.about,
  //     school: store.user.school,
  //     location: store.user.location,
  //   };
  //   state.updateUser(data);
  //   setState({
  //     displayName: "",
  //     about: "",
  //     school: "",
  //     location: "",
  //   });
  // };

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
        value={state.school}
        onChange={handleChange}
      />
      <Card.Title style={{ fontSize: "16px", paddingTop: "10px" }}>Your Location:</Card.Title>
      <input
        style={{ display: "block" }}
        name="location"
        type="text"
        placeholder="text here"
        required
        value={state.location}
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
          value={state.displayName}
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
          value={state.about}
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
