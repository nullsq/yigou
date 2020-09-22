import Vue from 'vue'
import App from './App.vue'
import router from './router'

import axios from "axios"
axios.defaults.withCredentials=true;
// axios.defaults.baseurl=;
Vue.prototype.$axios =axios;
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
