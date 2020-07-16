import React from "react";
import { useStore } from "../store/useStore";
import { useObserver, useLocalStore } from "mobx-react";
import Button from "react-bootstrap/Button";

export default function DeleteUser() {
  const store = useStore();

  const handleDeleteUser = (e) => {
    e.preventDefault();
    const confirmed = window.confirm("DELETE WILL BE FINAL ...");
    if (confirmed) {
      store.deleteUser();
    }
  };

  return useObserver(() => (
    <Button variant="outline-danger" size="sm" onClick={handleDeleteUser}>
      DELETE PROFILE
    </Button>
  ));
}
