import { createStore } from "vuex";
import uuidState from "./uuidState";
export default createStore({
  state: {
    code: "this is a code",
  },
  getters: {
    CODE(state) {
      return state.code.toUpperCase();
    },
  },
  mutations: {},
  actions: {},
  modules: {
    uuidState: uuidState.uuidState,
  },
});
