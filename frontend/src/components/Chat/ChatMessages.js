import React from "react";
import { useObserver } from "mobx-react";
import { useStore } from "../../store/useStore";

const ChatMessage = ({ message }) =>
  useObserver(
    () => (
      <li>
        {message.text}
        <span>{message.createdAt}</span>
        <span>{message.displayName}</span>
      </li>
    ),
    [],
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
    [],
  );
};

export default ChatMessages;
