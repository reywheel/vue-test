import axios from "@/api/axios";

const login = userCredentials => {
  return axios
    .post("auth/login", userCredentials)
    .then(response => response.data);
};

export default {
  login
};
