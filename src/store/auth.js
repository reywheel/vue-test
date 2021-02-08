export const getterTypes = {
  getUser: "[auth] get user",
  isSubmitting: "[auth] is submitting",
  getErrors: "[auth] get errors",
  isAuth: "[auth] is auth",
  isAnonymous: "[auth] is anonymous"
};

export const mutationTypes = {
  loginStart: "[auth] login start",
  loginSuccess: "[auth] login success",
  loginFailure: "[auth] login failure"
};

export const actionTypes = {
  login: "[auth] login"
};

const state = {
  data: null,
  errors: null,
  isSubmitting: false
};

const getters = {
  [getterTypes.getUser]: state => state.data,
  [getterTypes.getErrors]: state => state.errors,
  [getterTypes.isSubmitting]: state => state.isSubmitting
};

const mutations = {};

const actions = {};

export default {
  state,
  getters,
  mutations,
  actions
};
