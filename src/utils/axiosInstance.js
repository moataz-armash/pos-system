import axios from "axios";

// Create an axios instance
const axiosInstance = axios.create({
  baseURL: "https://mocki.io/v1", // Base URL for the mock API
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor (if needed)
axiosInstance.interceptors.request.use(
  (config) => {
    // Add authorization token or any other custom headers here if needed
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor (if needed)
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle response errors here
    return Promise.reject(error);
  }
);

export default axiosInstance;
