import React, { useEffect } from "react";
import { useObserver } from "mobx-react";
import { Row, Col } from "react-bootstrap";
import ChatMessages from "./ChatMessages";
import ThreadList from "./ThreadList";
import UserSelect from "./UserSelect";
import ChatInput from "./ChatInput";
import { useStore } from "../../store/useStore";

const Chat = () => {
  const store = useStore();
  useEffect(() => {
    // poll when mounting
    store.chatStore.startPolling();
    return () => {
      // stop polling on unmount
      store.chatStore.stopPolling();
    };
  }, []);
  return useObserver(() => (
    <Row>
      <Col>
        <UserSelect />
        <ThreadList />
      </Col>
      <Col>
        <Row>
          <ChatMessages />
        </Row>
        <Row>
          <ChatInput />
        </Row>
      </Col>
    </Row>
  ));
};

export default Chat;
