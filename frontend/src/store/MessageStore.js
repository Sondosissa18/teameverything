import { observable, action, computed, runInAction } from "mobx";

class MessageStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @observable messages = ["Team", "Everything"];
  @action postMessage(message) {
    this.messages.push(message);
  }

  @computed get messageCount() {
    return this.messages.length;
  }

  doSomethingCrazy() {
    this.rootStore.api.login(null).catch((err) => console.error(err));
  }
}

export default MessageStore;
