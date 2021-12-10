import axios from "axios";
require("dotenv").config();

class Api {
  static axiosInstance = axios;
  static ACCESS_TOKEN = JSON.parse(JSON.parse(localStorage.getItem('persist:root'))?.login).user.access_token;
  static initiate() {
    this.axiosInstance.defaults.baseURL = process.env.REACT_APP_API_URL;
    this.axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${this.ACCESS_TOKEN}`;
    this.axiosInstance.defaults.headers.common["Content-Type"] = "application/json";
    // handle cors error
    this.axiosInstance.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
    return this.axiosInstance.create();
  }
}

export default Api;
