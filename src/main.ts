import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'jquery';
import 'bootstrap';
import datePicker from 'vue-bootstrap-datetimepicker';
import VeeValidate from 'vee-validate';
import * as moment from 'moment';

Vue.config.productionTip = false;
Vue.use(datePicker);
Vue.use(VeeValidate);
Vue.filter('date', (date) => date ? moment(date).format('DD.MM.YYYY') : '-');

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
