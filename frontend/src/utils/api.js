import axios from "axios";

class API {
  axiosInstance = null;

  constructor() {
    const axiosInstance = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      timeout: 30000,
      headers: { Authorization: `Bearer ${getToken()}` },
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

  async register(data) {
    try {
      const result = await this.axiosInstance.post("/auth/register", data);
      return result;
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
      return result;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  async getUser(user) {
    try {
      const result = await this.axiosInstance.get("/user/getUser", user);
      return result;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  // async deleteUser(data) {
  //   try {
  //     const result = await this.axiosInstance.post("/user/delete-user", data);
  //     return result;
  //   } catch (err) {
  //     console.error(err);
  //     throw err;
  //   }
  // }

  // async updateUser(data) {
  //   try {
  //     const result = await this.axiosInstance.post("/user/", data);
  //     return result;
  //   } catch (err) {
  //     console.error(err);
  //     throw err;
  //   }
  // }
}

// WARNING.. do not touch below this line if you want to have a good day =]

function getToken() {
  try {
    const storedState = JSON.parse(localStorage.getItem("persist:root"));
    return JSON.parse(storedState.auth).isAuthenticated;
  } catch {
    return "";
  }
}

export default new API();
