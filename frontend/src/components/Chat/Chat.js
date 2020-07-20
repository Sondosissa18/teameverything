import React, { useEffect } from "react";
import { useObserver } from "mobx-react";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
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
    <div>
      <h2>Chat with a Player or Recruiter! </h2>

      <Container fluid>
        <Row>
          <Col>
            <UserSelect />
            <ThreadList />
          </Col>
          <Col>
            <Card>
              <Card.Header>Chat Window</Card.Header>
              <Card.Body>
                <Row>
                  <ChatMessages />
                </Row>
                <Row>
                  <ChatInput />
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  ));
};

export default Chat;
