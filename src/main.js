import Vue from 'vue';
import App from './App.vue';
import 'date-input-polyfill';
import '@/assets/js/lib/modernizer';

Vue.config.productionTip = false;

require('@/assets/style/global.scss');

new Vue({
  render: h => h(App),
}).$mount('#app');
