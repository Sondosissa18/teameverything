import React from "react";
import Card from "./Card";
import MessageForm from "./MessageForm";
import Messages from "./Messages";
//import { useStore } from '../store/useStore';
import { useObserver } from 'mobx-react';
import ListOfUsers from './ListOfUsers'

export default function Message() {
  return useObserver(() => (
    <div>
      <h2>EverythingSports </h2>
      <p>The Facebook of Sports.</p>

  return useObserver (() => (
    <div className="container-md" align="center">
      <Card />
      <br />
      <MessageForm />
      <br />
      <Messages />
      <br />
      <ListOfUsers />
    </div>
  ));
}