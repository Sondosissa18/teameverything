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
          Authorization: `Bearer ${getToken()}`,
        },
      }),
      (error) => Promise.reject(error),
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

  async getUser(user) {
    try {
      await this.axiosInstance.get("/user/get-User", user);
      //const result = await this.axiosInstance.get("/user/get-User", user);
      //return result.defaultUser;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  async updateUser(file) {
    try {
      const data = new FormData();
      //const data = { ...defaultUser };
      data.append("school", file);
      data.append("location", file);
      data.append("displayName", file);
      data.append("about", file);
      const result = await this.axiosInstance.patch("/user/update-User", data);
      return result.school;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  async deleteUser(user) {
    try {
      const result = await this.axiosInstance.delete("/", user);
      return result;
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
