import React from "react";
import Card from "./Card";
import MessageForm from "./MessageForm";
import Messages from "./Messages";
//import { useStore } from '../store/useStore';
import { useObserver } from "mobx-react";
import ListOfUsers from "./ListOfUsers";
import Button from "./Buttons";

export default function Message() {
  return useObserver(() => (
    <div className="container-md" align="center">
      <Card />
      <br />
      <MessageForm />
      <Button />
      <br />
      <Messages />
      <br />
      <ListOfUsers />
    </div>
  ));
}
