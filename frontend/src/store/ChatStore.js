import { observable, action, computed, runInAction } from "mobx";

export default class ChatStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  pollInterval = null;

  @observable _chats = [];
  @computed get messages() {
    return this._chats.slice();
  }

  @observable _threads = [];
  @computed get threads() {
    return this._threads.slice();
  }

  chattingWith = "";
  @observable currentThread = "";
  @action changeThread(thread) {
    this.currentThread = thread._id;
    this.chattingWith = thread.participants[0]._id;
    this.pollForMessages();
  }

  @action
  async postMessage(text) {
    try {
      const { chatMessage } = await this.rootStore.api.postMessage({
        text,
        to: this.chattingWith,
      });
      runInAction(() => {
        this._chats.push(chatMessage);
      });
    } catch (err) {
      console.error("store.postMessage failed", err);
    }
  }

  @action
  async pollForMessages() {
    try {
      if (!this.currentThread) {
        return;
      }
      const { chats, participants } = await this.rootStore.api.getThread(this.currentThread);
      runInAction(() => {
        this._chats = chats;
        this.participants = participants;
      });
    } catch (err) {
      console.error("store.pollForMessages failed", err);
    }
  }

  @action
  async getThreads() {
    try {
      const { threads } = await this.rootStore.api.getThreads();
      runInAction(() => {
        this._threads = threads;
      });
    } catch (err) {
      console.error("store.getThreads failed", err);
    }
  }

  startPolling() {
    this.stopPolling();
    this.pollForMessages();
    this.pollInterval = setInterval(() => {
      this.pollForMessages();
    }, 3000);
  }

  stopPolling() {
    if (this.pollInterval) {
      clearInterval(this.pollInterval);
    }
  }

  @computed get messageCount() {
    return this._chats.length;
  }

  doSomethingCrazy() {
    this.rootStore.api.login(null).catch((err) => console.error(err));
  }
}
