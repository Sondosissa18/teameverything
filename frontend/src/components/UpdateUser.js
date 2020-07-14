//import React, { Component } from "react";
//import mongoose from "mongoose";
import React from "react";
import { useStore } from "../store/useStore";
import { useObserver, useLocalStore, observer } from "mobx-react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function UpdateUser() {
  const store = useStore();
  const state = useLocalStore(() => {
    return {
      displayName: "",
      school: "",
      location: "",
      about: "",

      updateDisplayName(displayName) {
        state.displayName = displayName;
      },
      updateSchool(school) {
        state.school = school;
      },
      updateLocation(location) {
        state.location = location;
      },
      updateAbout(about) {
        state.about = about;
      },
    };
  });

  const handleChangeDisplay = (e) => {
    state.updateDisplayName(e.target.value);
  };
  const handleChange = (e) => {
    switch (e.target.name) {
      case "displayName":
        state.updateDisplayName(e.target.value);
        break;
      case "school":
        state.updateSchool(e.target.value);
        break;
      case "location":
        state.updateLocation(e.target.value);
        break;
      case "about":
        state.updateAbout(e.target.value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await store.updateUser({
        displayName: state.displayName,
        school: state.school,
        location: state.location,
        about: state.about,
      });
    } catch (err) {
      console.error(err);
      //
      state.setError(err.message);
    }
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
