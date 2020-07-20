import React, { Component, PropTypes } from "react";
import FormInput from "./FormInput";
// import LoginStore from "../store/LoginStore";
import { Container, Button, Row, Col } from "react-bootstrap";
import "./Login.css";
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
      console.log(err);

      state.setError(err.message);
    }
  };

  // if (res.status === 500) {
  //   return useObserver(() => <h3>Wrong Password</h3>);
  // }

  return useObserver(
    () => (
      <form id="login-form" onSubmit={submitForm}>
        <h3>
          Welcome Back!
          <br></br>
          LOGIN
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
        {/* <button type="submit">Login</button> */}
        <Button
          className="button1"
          type="submit"
          variant="primary"
          size="1g"
          style={{
            marginLeft: "1%",
            marginRight: "1%",
            backgroundColor: "#FCCA03",
            size: "px",
          }}
        >
          Login
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
    []
  );
};

export default LoginForm;
