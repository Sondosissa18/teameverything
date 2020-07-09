import React from "react";
import { useStore } from "../store/useStore";
import { useObserver } from "mobx-react";
const Logout = () => {
  const store = useStore();
  return useObserver(() => store.isLoggedIn && <button onClick={() => store.logout()}>Logout</button>);
};
export default Logout;
