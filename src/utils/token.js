const set = token => {
  localStorage.setItem("accessToken", token);
};

const get = () => {
  return localStorage.getItem("accessToken");
};

const remove = () => {
  localStorage.removeItem("accessToken");
};

export default {
  set,
  get,
  remove
};
