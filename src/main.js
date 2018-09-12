import firebase from 'firebase';
import VueFire from 'vuefire';
import 'firebase/firestore';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import config from './config';

Vue.config.productionTip = false;
Vue.use(VueFire);

firebase.initializeApp(config);
/* eslint-disable-next-line */
export const db = firebase.firestore();

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
