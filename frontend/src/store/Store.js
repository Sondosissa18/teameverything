import { observable, action, computed, runInAction, autorun } from "mobx";
import jwtDecode from "jwt-decode";
import apiInstance, { setToken, getToken } from "../utils/api";
import MessageStore from "./MessageStore";
const defaultUser = {
  id: 0,
  name: "",
  role: "",
  email: "",
  location: "",
  school: "",
  accessToken: "",
};
class Store {
  constructor({ api }) {
    this.api = api;
    this.messageStore = new MessageStore(this);
    this.fetchUserIfLoggedIn();
  }
  @observable likesCount = 7;
  @observable user = defaultUser;
  @action updateCount() {
    this.likesCount++;
  }
  @computed get isLoggedIn() {
    return !!this.user.accessToken;
  }
  fetchUserIfLoggedIn() {
    this.handleAccessToken(getToken());
  }
  @action
  async login(data) {
    try {
      const { accessToken } = await this.api.login(data);
      this.handleAccessToken(accessToken);
    } catch (err) {
      console.error("store.login failed", err);
    }
  }
  @action
  async logout() {
    try {
      this.api.logout().catch((err) => {});
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
      this.handleAccessToken(accessToken);
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
    // TODO check expiration here
    runInAction(() => {
      this.user = { ...defaultUser, ...data, accessToken };
    });
  }
}
const storeInstance = new Store({ api: apiInstance });
window.storeInstance = storeInstance; //this is just for testing. Do not use in source code.
export default storeInstance;