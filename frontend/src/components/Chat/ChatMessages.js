import React from "react";
import { useObserver } from "mobx-react";
import { useStore } from "../../store/useStore";

const ChatMessage = ({ message }) =>
  useObserver(
    () => (
      <>
        <li>
          <li>{message.text}</li>
          <span>{message.createdAt}</span>
        </li>
        <span>{message.displayName}</span>
      </>
    ),
    []
  );

const ChatMessages = () => {
  const store = useStore();
  return useObserver(
    () => (
      <ul>
        {store.chatStore.messages.map((message) => (
          <ChatMessage key={message._id} message={message} />
        ))}
      </ul>
    ),
    []
  );
};

export default ChatMessages;
