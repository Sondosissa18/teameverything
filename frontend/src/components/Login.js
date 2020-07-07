// import React, { Component } from "react";

// class Login extends Component {
//   render() {
//     return (
//       <div>
//         <h2>LOGIN PAGE</h2>
//       </div>
//     );
//   }
// }

// export default Login;

import React from "react";
import { useObserver } from "mobx-react";

import { useStore } from "../store/useStore";

const Login = () => {
  const store = useStore();

  const loginUser = () => {
    store.login();
  };
  return useObserver(() => (
    <div>
      <h2>LOGIN PAGE</h2>
      <p>The Facebook of Sports.</p>
      <button onClick={loginUser}>Login Fake</button>
    </div>
  ));
};

export default Login;
