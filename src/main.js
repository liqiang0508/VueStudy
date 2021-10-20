/*
 * @Descripttion: 
 * @version: 
 * @Author: liqiang
 * @email: 497232807@qq.com
 * @Date: 2021-10-16 19:44:21
 * @LastEditTime: 2021-10-17 20:08:37
 */
import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import Axios from "axios"
import router from "./router/router"
Vue.prototype.$axios = Axios;
// Axios.defaults.baseURL = '/api'

//插件
import MyUtils from "./plugins/MyUtils"
Vue.use(MyUtils)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
