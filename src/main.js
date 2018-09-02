import firebase from 'firebase';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// Initialize Firebase DONT FORGET TO PUT THIS IN CONFIG LATER
const config = {
  apiKey: 'AIzaSyDE-SNfCC9kUTfi-VR3STIWIlhjv7v0iRo',
  authDomain: 'siljan-440ac.firebaseapp.com',
  databaseURL: 'https://siljan-440ac.firebaseio.com',
  projectId: 'siljan-440ac',
  storageBucket: 'siljan-440ac.appspot.com',
  messagingSenderId: '625778467507',
};
firebase.initializeApp(config);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
