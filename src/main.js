import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'date-input-polyfill';

Vue.config.productionTip = false;

require('@/assets/style/global.scss');

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
