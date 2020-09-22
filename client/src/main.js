import Vue from 'vue'
import App from './App.vue'
import router from './router'
<<<<<<< HEAD

import axios from "axios"
axios.defaults.withCredentials=true;
// axios.defaults.baseurl=;
Vue.prototype.$axios =axios;
=======
import axios from 'axios'
Vue.prototype.$axios=axios
// function myxx () {
// 	console.log(66661111)
// 	var x=200
// 	// console.log(this)
// 	Vue.prototype.$x=x
// }
// Vue.use(myxx)

>>>>>>> 804359d6af5d0e0400821661aea64f2dc5a84d2e
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
