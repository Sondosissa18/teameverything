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

        {/* {form.meta.error && <div> {form.meta.error} </div>} */}
        <br />
        <input value="Continue" type="submit" />
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

// @observer
// class LoginForm extends Component {
//   // state= {

//   // }
//   render() {
//     const { form, onChange } = this.props;
//     console.log(onChange);

//     return (
//       <form onSubmit={this.submit}>
//         <h3>LOGIN PAGE</h3>
//         <form id="LoginForm">
//           <label htmlFor="email">Email</label>
//           <FormInput
//             type="email"
//             name="email"
//             value={form.fields.email.value}
//             error={form.fields.email.error}
//             onChange={onChange}
//             placeholder="email"
//           />
//           <br />
//           <label htmlFor="password">Password</label>
//           <FormInput
//             type="password"
//             name="password"
//             value={form.fields.password.value}
//             error={form.fields.password.error}
//             onChange={onChange}
//             placeholder="password"
//           />
//           <br />
//           <button type="submit">Login</button>
//         </form>

//         {/* {form.meta.error && <div> {form.meta.error} </div>} */}
//         <br />
//         <input value="Continue" type="submit" />
//       </form>
//       //<Link to="/signup">
//       //<>
//       //<Button variant="primary" size="1g" style={{ marginLeft: "5%", backgroundColor: "gray", size: "px" }}>
//       //  SIGN UP
//       // </Button>{" "}
//       // </>
//       // </Link>
//     );
//   }

//   submit = (event) => {
//     event.preventDefault();
//     // this.props.onSubmit()

//     //make a post request to /login here using axios.

//     const axios = require("axios");

//     // axios.post("/login"){
//     axios
//       .post("/login ", data)
//       .then((res) => console.log(res))
//       .catch((err) => console.log(err));

//     // }
//   };
// }

// LoginForm.propTypes = {
//   onChange: PropTypes.func.isRequired,

//   onSubmit: PropTypes.func.isRequired,

//   form: PropTypes.shape({
//     fields: Object,

//     meta: Object,
//   }).isRequired,
// };

export default LoginForm;
