import React from "react";
import { useStore } from "../store/useStore";
import { useObserver, useLocalStore, observer } from "mobx-react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function UpdateUser() {
  const store = useStore();
  const state = useLocalStore(() => {
    return {
      displayName: store.user.displayName,
      school: store.user.school,
      location: store.user.location,
      about: store.user.about,
      update(key, value) {
        state[key] = value;
      },
    };
  });

  const handleChangeDisplay = (e) => {
    state.update("displayName", e.target.value);
  };
  const handleChange = (e) => {
    state.update(e.target.name, e.target.value);
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
      <Card.Title style={{ fontSize: "16px", paddingTop: "10px" }}>Edit School:</Card.Title>
      <input
        style={{ display: "block", width: "400px", height: "70px" }}
        name="school"
        type="text"
        placeholder="text here"
        autoFocus
        required
        value={state.school}
        onChange={handleChange}
      />
      <Card.Title style={{ fontSize: "16px", paddingTop: "10px" }}>Edit Location:</Card.Title>
      <input
        style={{ display: "block", width: "400px", height: "70px" }}
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
          style={{ display: "block", width: "400px", height: "70px" }}
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
            width: "400px",
            height: "70px",
          }}
          size="sm"
          squared="true"
          name="about"
          type="text"
          placeholder="TEXT HERE"
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
          Save
        </Button>
      </Card.Text>
    </form>
  ));
}
