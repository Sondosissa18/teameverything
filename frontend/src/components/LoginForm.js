import React, { Component, PropTypes } from "react";
import FormInput from "./FormInput";
// import LoginStore from "../store/LoginStore";
import { Container, Button, Row, Col } from "react-bootstrap";

import { observer, useLocalStore, useObserver } from "mobx-react";
import { useStore } from "../store/useStore";
const LoginForm = () => {
  const store = useStore();

  const state = useLocalStore(() => {
    return {
      email: "",
      password: "",
      updateEmail(email) {
        state.email = email;
      },
      updatePassword(pass) {
        state.password = pass;
      },
    };
  });

  const submitForm = async (e) => {
    try {
      e.preventDefault();
      await store.login({ email: state.email, password: state.password });
    } catch (err) {
      console.error(err);
      //
      state.setError(err.message);
    }
  };

  return useObserver(
    () => (
      <form onSubmit={submitForm}>
        <h3>LOGIN PAGE</h3>
        <label htmlFor="email">Email</label>
        <input type="email" value={state.email} onChange={(e) => state.updateEmail(e.target.value)} />
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" value={state.password} onChange={(e) => state.updatePassword(e.target.value)} />
        <br />
        <button type="submit">Login</button>
        <br />
        <input value="Continue" type="submit" />
      </form>

    ),
    [],
  );
};


export default LoginForm;
