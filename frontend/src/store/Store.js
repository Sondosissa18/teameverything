import { observable, action, computed, runInAction, toJS } from "mobx";
import jwtDecode from "jwt-decode";
import apiInstance, { setToken, getToken } from "../utils/api";
import MessageStore from "./MessageStore";
import ChatStore from "./ChatStore";
const defaultUser = {
  id: 0,
  name: "",
  role: "",
  email: "",
  location: "",
  school: "",
  accessToken: "",
  picLocation: "",
  displayName: "",
  about: "",
};

class Store {
  constructor({ api }) {
    this.api = api;
    this.messageStore = new MessageStore(this);
    this.chatStore = new ChatStore(this);
    this.fetchUserIfLoggedIn();
  }

  @observable user = { ...defaultUser };
  @observable isLoading = false;
  @action updateCount() {
    this.likesCount++;
  }
  @computed get isLoggedIn() {
    return !!this.user.accessToken;
  }

  @action
  async fetchUserIfLoggedIn() {
    try {
      runInAction(() => {
        this.isLoading = true;
      });
      await this.getUser();
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }
  @action
  async login(data) {
    try {
      const { accessToken } = await this.api.login(data);
      if (!accessToken) {
        return;
      }
      this.handleAccessToken(accessToken);
      this.getUser();
    } catch (err) {
      console.error("store.login failed", err);
    }
  }
  @action
  async logout() {
    try {
      await this.api.logout().catch((err) => {});
      runInAction(() => {
        this.user = { ...defaultUser };
      });
      this.handleAccessToken("");
    } catch (err) {
      console.error("store.logout failed", err);
    }
  }
  async registerUser(data) {
    try {
      const { accessToken } = await this.api.registerUser(data);
      if (!accessToken) {
        return;
      }
      this.handleAccessToken(accessToken);
      this.getUser();
    } catch (err) {
      console.error("store.registerUser failed", err);
    }
  }
  handleAccessToken(accessToken) {
    if (!accessToken) {
      setToken("");
      return;
    }
    setToken(accessToken);
    const { iat, exp, ...data } = jwtDecode(accessToken);
    if (exp < (new Date().getTime() + 1) / 1000) {
      this.logout();
    }
  }

  @action
  async uploadPic(data) {
    try {
      const picLocation = await this.api.uploadPic(data);
      runInAction(() => {
        this.user.picLocation = picLocation;
      });
    } catch (err) {
      console.error("store.uploadPic failed", err);
    }
  }

  @action
  async getUser() {
    try {
      const user = await this.api.getUser();
      if (!user) {
        return;
      }
      runInAction(() => {
        this.user = { ...defaultUser, ...user };
      });
    } catch (err) {
      console.error("store.getUser failed", err);
    }
  }

  @action
  async updateUser(data) {
    try {
      console.log(data);
      const user = await this.api.updateUser(data);
      runInAction(() => {
        this.user = { ...this.user, ...user };
      });
    } catch (err) {
      console.error("store.updateUser failed", err);
    }
  }

  @observable _userList = [];
  @computed get userList() {
    return toJS(this._userList);
  }
  @action
  async fetchUserList() {
    try {
      const { users: userList } = await this.api.getUserList();
      runInAction(() => {
        this._userList = userList.map((item) => ({
          label: item.displayName,
          value: item._id,
        }));
      });
    } catch (err) {
      console.error("store.getUser failed", err);
    }
  }

  async deleteUser() {
    try {
      await this.api.deleteUser();
      await this.logout();
    } catch (err) {
      console.error("store.deleteUser failed", err);
    }
  }
}
const storeInstance = new Store({ api: apiInstance });
window.storeInstance = storeInstance; //this is just for testing. Do not use in source code.
export default storeInstance;
