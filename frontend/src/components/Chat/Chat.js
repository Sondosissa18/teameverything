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
      <h2>EverythingSports </h2>
      <p>The Facebook of Sports.</p>

      <Container>
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
        <Card>
          <Card.Header>Chat with a Player or Recruiter</Card.Header>
          <Card.Body>
            <Card.Title>Select a User Below:</Card.Title>
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
            <Button variant="primary">Start Thread</Button>
          </Card.Body>
        </Card>
        ;
      </Container>
    </div>
  ));
};

export default Chat;
