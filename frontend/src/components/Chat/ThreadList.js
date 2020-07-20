import React, { useEffect } from "react";
import { useObserver } from "mobx-react";
import { useStore } from "../../store/useStore";
import Chat from "./Chat.css";

const ThreadList = () => {
  const store = useStore();
  useEffect(() => {
    store.chatStore.getThreads();
  }, []);
  return useObserver(
    () => (
      <ul>
        {store.chatStore.threads.map((thread) => (
          <li
            key={thread._id}
            onClick={() => store.chatStore.changeThread(thread)}
          >
            {thread.threadName}
          </li>
        ))}
      </ul>
    ),
    []
  );
};

export default ThreadList;
