import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import vuetify from './plugins/vuetify';
import Firebase from './plugins/firebase'
import '@babel/polyfill'

import { AppConstants } from './configs';
import '@/assets/css/main.css';

const firebaseConfig = {};
Firebase.initializeApp({});
if (localStorage.getItem(AppConstants.localStorage_Session)) {
  store.commit('signinUser', JSON.parse(atob(localStorage.getItem(AppConstants.localStorage_Session) as any)))
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
