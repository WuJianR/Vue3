import { createStore } from "vuex";

const uuidState = {
  namespaced: true,
  state: {
    uuid: "",
    state_tag: "",
  },
  // 要想改变state中的数据必须使用mutations的方法
  mutations: {
    changeUuid(state, value) {
      state.uuid = value;
    },
    changeTag(state, value) {
      state.state_tag = value;
    },
  },
  // 异步的方法
  actions: {
    CHANGE_TAG(context, value) {
      setTimeout(() => {
        context.commit("changeTag", value);
      }, 2000);
    },
  },
  // 类似计算属性
  getters: {
    uuidToUpper(state) {
      return state.uuid.toUpperCase();
    },
  },
};

export default { uuidState };
