import axios from "axios";

export const handleAuthorizationHeader = () => {
  const token = localStorage.getItem("token");
  if (token) {
    axios.defaults.headers.common.authorization = token;
  } else {
    delete axios.defaults.headers.common.authorization;
  }
};