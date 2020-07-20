import React from "react";
import { useStore } from "../store/useStore";
import { useObserver } from "mobx-react";
import { Button } from "react-bootstrap";
import Button from "./Buttons";

export default function Messages() {
  const store = useStore();
  return useObserver(() => (
    <table className="table">
      <tbody>
        {store.messageStore.messages.map((message) => {
          return (
            <tr key={message._id}>
              <td>{message}</td>
              <Button />
            </tr>
          );
        })}
      </tbody>
    </table>
  ));
}
