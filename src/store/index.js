import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: 'Home',
  },
  mutations: {
    setTitle(state, newTitle) {
      state.title = newTitle;
    },
  },
  actions: {},
  modules: {},
});
