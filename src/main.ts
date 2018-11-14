import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'jquery';
import 'bootstrap';
import datePicker from 'vue-bootstrap-datetimepicker';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false;
Vue.use(datePicker);
Vue.use(BootstrapVue);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
