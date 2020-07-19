import React from "react";
import { useStore } from "../store/useStore";
import { Container, Button, Row, Col } from "react-bootstrap";

import { useObserver } from "mobx-react";
import { useHistory } from "react-router-dom";
const Logout = () => {
  const store = useStore();
  const history = useHistory();

  const handleLogout = async () => {
    await store.logout();
    history.push("/");
  };
  return useObserver(
    () =>
      store.isLoggedIn && (
        <Button
          onClick={handleLogout}
          variant="primary"
          size="1g"
          style={{ marginLeft: "0%", backgroundColor: "#29303D", size: "px" }}
        >
          Logout
        </Button>
      )
  );
};
export default Logout;

// const Logout = () => {
//   const store = useStore();
//   return useObserver(() => store.isLoggedIn && <button onClick={() => store.logout()}>Logout</button>);
// };
// export default Logout;
