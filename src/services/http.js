import axios from "axios";
export const DEFAULT_TIMEOUT=10000
export const httpClient = axios.create({
    baseURL: "https://api.coingecko.com/api/v3" 
  });

  httpClient.interceptors.request.use(
    (config) => {
      config = {
        ...config,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        timeout: config.timeout || DEFAULT_TIMEOUT,
        data: config.data,
      };
      return config;
    },
    (err) => {
      return Promise.reject(err);
    },
  );

  httpClient.interceptors.response.use(
    (res) => {
      return res.data;
    },
    (err) => {
      if (err.response) {
        if (err.response.status === 404) {
          console.error("End Point Not found:", err.response.config.url);
        } else if (err.response.status === 500) {
          console.error("Internal Server Error:"+ err.response.data);
        } else {
          console.error(`Error ${err.response.status}:`, err.response.data);
        }
      } else if (err.request) {
        console.error("No response received");
  
        if (err.message === "Network Error" || err.code === "ECONNABORTED") {
          console.error("Network error or request timeout");
        }
      } else {
        console.error("Error:", err.message);
      }
      return Promise.reject(err);
    },
  );