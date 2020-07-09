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
    photo: "",
    //displayName: "",
    //about: ""
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

  @action
  async uploadPic(data) {
    try {
      const user = await this.api.uploadPic(data);
      runInAction(() => {
        this.user = user;
      });
    } catch (err) {
      console.error("store.uploadPic failed", err);
    }
  }

  @action
  async getUser(data) {
    try {
      const user = await this.api.getUser(data);
      runInAction(() => {
        this.user = user;
      });
    } catch (err) {
      console.error("store.getUser failed", err);
    }
  }

  // LogOut need to be added to deleteUser .....  I think here
  //   @action <-- prob don't need
  //   async deleteUser(data) {
  //     try {
  //       const user = await this.api.deleteUser(data);
  //       runInAction(() => {
  //         this.user = user;
  //       });
  //     } catch (err) {
  //       console.error("store.deleteUser failed", err);
  //     }
  //   }

  //   @action
  //   async updateUser(data) {
  //     try {
  //       const user = await this.api.updateUser(data);
  //       runInAction(() => {
  //         this.user = user;
  //       });
  //     } catch (err) {
  //       console.error("store.updateUser failed", err);
  //     }
  //   }
}

const storeInstance = new Store({ api: apiInstance });
window.storeInstance = storeInstance; //this is just for testing. Do not use in source code.
export default storeInstance;
