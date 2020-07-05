import React  from "react";
import Card from "./Card";
import Form from './Form';
import Messages from "./Messages";

export default function Message() {
  return (
    <div className="container-md" align="center">
      <Card />
      <Form />
      <Messages />
    </div>
  )
}