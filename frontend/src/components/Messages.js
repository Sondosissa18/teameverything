import React from "react";
import { useStore } from "../store/useStore";
import { useObserver } from "mobx-react";
import { toJS } from 'mobx'

export default function Messages() {
  const store = useStore();
  console.log(toJS(store.messageStore))
  return useObserver(() => (
    <>
    <h2>This is the messages component!</h2>
    <table className="table">
      <tbody>
        {store.messageStore.messages.map((message, index) => {
          return (
            <tr key={index}>
              <td>{message}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </>

  ));
}
