import authApi from "@/api/auth";
import token from "@/utils/token";

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
  [getterTypes.isSubmitting]: state => state.isSubmitting,
  [getterTypes.isAuth]: state => state.data !== null,
  [getterTypes.isAnonymous]: state => state.data === null
};

const mutations = {
  [mutationTypes.loginStart](state) {
    state.isSubmitting = true;
    state.data = null;
    state.errors = null;
  },
  [mutationTypes.loginSuccess](state, user) {
    state.isSubmitting = false;
    state.data = user;
  },
  [mutationTypes.loginFailure](state, errors) {
    state.isSubmitting = false;
    state.errors = errors;
  }
};

const actions = {
  async [actionTypes.login]({ commit }, { userCredentials }) {
    try {
      commit(mutationTypes.loginStart);
      const response = await authApi.login(userCredentials);
      token.set(response.access_token);
      commit(mutationTypes.loginSuccess, response.user);
    } catch (e) {
      commit(mutationTypes.loginFailure, e.response.data.errors);
    }
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
