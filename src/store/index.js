import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: 'Home',
    snackbar: false,
    snackbarText: 'Hi, I am Shanu',
  },
  mutations: {
    setTitle(state, newTitle) {
      state.title = newTitle;
    },
    setSnackbarText(state, newText) {
      state.snackbar = true;
      state.snackbarText = newText;
    },
  },
  actions: {
    displaySnackbar(context, text) {
      context.commit('setSnackbarText', text);
    },
  },
  modules: {},
});
