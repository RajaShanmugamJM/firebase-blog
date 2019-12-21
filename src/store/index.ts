import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auth: {
      signedin: false,
      user: {},
    },
    post_categories: [{ title: 'Recipies' }, { title: 'Programming' }, { title: 'Books' }]
  },
  mutations: {
    signinUser(state, payload) {
      state.auth.signedin = true;
      state.auth.user = payload["user"]
    },
    signoutUser(state, u) {
      state.auth.signedin = false;
      state.auth.user = {}
    },
  }
})
