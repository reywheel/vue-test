const set = token => {
  localStorage.setItem("accessToken", token);
};

const get = () => {
  return localStorage.getItem("accessToken");
};

export default {
  set,
  get
};
