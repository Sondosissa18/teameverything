import React  from "react";
import Card from "./Card";
import Form from './Form';
import Messages from "./Messages";
//import { useStore } from '../store/useStore';
import { useObserver } from 'mobx-react';

export default function Message() {

  return useObserver (() => (
    <div className="container-md" align="center">
      <Card />
      <Form />
      <Messages />
    </div>
  )
  )
}