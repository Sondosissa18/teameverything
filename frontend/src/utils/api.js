import axios from "axios";

class API {
  axiosInstance = null;

  constructor() {
    const axiosInstance = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      timeout: 30000,
    });

    axiosInstance.interceptors.request.use(
      (config) => ({
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${getToken() || ""}`,
        },
      }),
      (error) => {
        if (401 === error.response.status) {
          window.alert("Sorry, your session has expired. Please log back in.");
          this.logout();
        }
        Promise.reject(error);
      },
    );

    axiosInstance.interceptors.response.use(
      ({ data }) => data,
      (error) => Promise.reject(error),
    );

    this.axiosInstance = axiosInstance;
  }

  async login(data) {
    try {
      return await this.axiosInstance.post("/auth/login", data);
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  async logout() {
    try {
      await this.axiosInstance.get("/auth/logout");
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  async registerUser(data) {
    try {
      return await this.axiosInstance.post("/auth/register", data);
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  async uploadPic(file) {
    try {
      const data = new FormData();
      data.append("picture", file);
      const result = await this.axiosInstance.post("/user/upload-pic", data);
      return result.picLocation;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  async getUser() {
    try {
      return await this.axiosInstance.get("/user/get-user");
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  async getThread(thread) {
    try {
      return await this.axiosInstance.get(`/chat/threads/${thread}`);
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  async getThreads() {
    try {
      return await this.axiosInstance.get(`/chat/threads`);
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  async startThread(to) {
    try {
      return await this.axiosInstance.post(`/chat/threads`, { to });
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  async getUserList() {
    try {
      return await this.axiosInstance.get(`/user/list`);
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  async postMessage(data) {
    try {
      return await this.axiosInstance.post("/chat", data);
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  async updateUser(data) {
    try {
      const result = await this.axiosInstance.patch("/user/update-User", data);
      return result;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  async deleteUser() {
    try {
      return await this.axiosInstance.delete("/user");
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}

const TOKEN_KEY = "auth:token";
export function getToken() {
  try {
    const storedState = localStorage.getItem(TOKEN_KEY);
    return storedState;
  } catch {
    return "";
  }
}
export function setToken(token) {
  localStorage.setItem(TOKEN_KEY, `${token}`);
}
export default new API();
