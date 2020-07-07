import { observable, action, computed } from "mobx";
import apiInstance from "../utils/api";

class Store {
  constructor({ api }) {
    this.api = api;
  }
  @observable likesCount = 7;

  @observable messages = ["Team", "Everything"];
  @observable user = {
    id: 0,
    name: "",
    email: "",
    token: "",
    location: "",
    school: "",
  };

  @action updateCount() {
    this.likesCount++;
  }

  @action postMessage(message) {
    this.messages.push(message);
  }

  @computed get messageCount() {
    return this.messages.length;
  }

  // @action login(data) {
  //     this.api.login(data).then(results => {
  //         console.log(results)
  //         this.user=results
  //     })
  // }

  @action
  async login(data) {
    try {
      const user = await this.api.login(data);
      runInAction(() => {
        this.user = user;
      });
    } catch (err) {
      console.error("store.login failed", err);
    }
  }
}

const storeInstance = new Store({ api: apiInstance });
window.storeInstance = storeInstance; //this is just for testing. Do not use in source code.
export default storeInstance;
