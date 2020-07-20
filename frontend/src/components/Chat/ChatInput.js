import React, { useRef, useState } from "react";
import { useObserver } from "mobx-react";
import { useStore } from "../../store/useStore";
import Chat from "./Chat.css";

const ChatInput = () => {
  const store = useStore();
  const [err, setError] = useState("err");
  const messageRef = useRef(null);

  const sendMessage = async (e) => {
    try {
      e.preventDefault();
      setError("");
      await store.chatStore.postMessage(messageRef.current.value);
      messageRef.current.value = "";
    } catch (err) {
      setError(err.message);
    }
  };

  return useObserver(
    () => (
      <form onSubmit={sendMessage}>
        <input type="text" placeholder="Send a message..." ref={messageRef} />
      </form>
    ),
    []
  );
};

export default ChatInput;
