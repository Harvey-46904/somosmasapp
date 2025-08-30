import axios, { InternalAxiosRequestConfig } from "axios";
import { Preferences } from "@capacitor/preferences";
import config from "./Base_Api";
import { showLoading, hideLoading } from "./Loading";

const api = axios.create({
  baseURL: config.baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    showLoading();
    const { value } = await Preferences.get({ key: "authToken" });
    if (value && config.headers) {
      config.headers.Authorization = `Bearer ${value}`;
    }
    return config;
  },
  (error) => {
    hideLoading();
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (res) => {
    hideLoading();
    return res;
  },
  (error) => {
    hideLoading();
    return Promise.reject(error);
  }
);

export default api;
