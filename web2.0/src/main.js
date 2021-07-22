import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import * as echarts from 'echarts'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import contractsFun from "./common/contractsFun";
import getweb3 from "./common/globals.dbug"
import store from './store/index'
import axios from 'axios'
// import BootstrapVue from 'bootstrap-vue'

// Vue.use(BootstrapVue)
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.prototype.$Fun = contractsFun
Vue.prototype.$getweb3 = getweb3
Vue.prototype.$axios = axios
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')