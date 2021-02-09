import axios from "@/api/axios";

const login = userCredentials => {
  return axios
    .post("auth/login", userCredentials)
    .then(response => response.data);
};

const logout = () => {
  return axios.post("auth/logout");
};

export default {
  login,
  logout
};
