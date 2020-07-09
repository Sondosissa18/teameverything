import { observable, action, computed, runInAction } from "mobx";

class MessageStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @observable _messages = ["Team", "Everything"];
  @action postMessage(message) {
    this._messages.push(message);
  }

  @computed get messageCount() {
    return this._messages.length;
  }
  @computed get messages() {
    return this._messages.slice();
  }

  doSomethingCrazy() {
    this.rootStore.api.login(null).catch((err) => console.error(err));
  }
}

export default MessageStore;
