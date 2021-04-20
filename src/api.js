import axios from "axios";

const api = axios.create({
  baseURL: "https://mentorbeast-be-dev.herokuapp.com/api/v1",
});

// const api = axios.create({
//   baseURL:
//     process.env.NODE_ENV !== "production"
//       ? "http://localhost:5000"
//       : process.env.REACT_APP_BACKEND_URL,
// });

// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");

//     if (token) {
//       config.headers.Authorization = token;
//     } else {
//       delete api.defaults.headers.common.Authorization;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

export default api;
