import React from "react";
import FormInput from "./FormInput";
import "./Register.css";

import { Container, Button, Row, Col, Form } from "react-bootstrap";

import { useLocalStore, useObserver } from "mobx-react";
import { useStore } from "../store/useStore";
const Register = () => {
  const store = useStore();

  const state = useLocalStore(() => {
    return {
      email: "",
      password: "",
      role: "other",
      updateEmail(email) {
        state.email = email;
      },
      updatePassword(pass) {
        state.password = pass;
      },
      updateRole(role) {
        state.role = role;
      },
    };
  });

  const submitForm = async (e) => {
    try {
      e.preventDefault();
      await store.registerUser({ email: state.email, password: state.password, role: state.role });
    } catch (err) {
      console.error(err);
      //
      state.setError(err.message);
    }
  };

  return useObserver(
    () => (
      <form id="Register-form" onSubmit={submitForm}>
        <h3>
          New User?
          <br></br>
          REGISTER HERE
        </h3>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={state.email}
          placeholder="email"
          onChange={(e) => state.updateEmail(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={state.password}
          placeholder="password"
          onChange={(e) => state.updatePassword(e.target.value)}
        />
        <br />
        <Form.Group controlId="register.role">
          <Form.Label>Are you a student or recruiter?</Form.Label>
          <Form.Control as="select" value={state.role} onChange={(e) => state.updateRole(e.target.value)}>
            <option value="other">Other</option>
            <option value="student">Student</option>
            <option value="recruiter">Recruiter</option>
          </Form.Control>
        </Form.Group>
        {/* <button type="submit">Register</button> */}
        <Button
          className="button2"
          type="submit"
          variant="primary"
          size="1g"
          style={{ marginLeft: "1%", marginRight: "1%", backgroundColor: "#FCCA03", size: "px" }}
        >
          Register
        </Button>{" "}
        <br />
        {/* <input value="Continue" type="submit" /> */}
      </form>
      //<Link to="/signup">
      //<>
      //<Button variant="primary" size="1g" style={{ marginLeft: "5%", backgroundColor: "gray", size: "px" }}>
      //  SIGN UP
      // </Button>{" "}
      // </>
      // </Link>
    ),
    [],
  );
};

export default Register;
