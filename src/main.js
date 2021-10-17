/*
 * @Descripttion: 
 * @version: 
 * @Author: liqiang
 * @email: 497232807@qq.com
 * @Date: 2021-10-16 19:44:21
 * @LastEditTime: 2021-10-17 19:00:23
 */
import Vue from 'vue'
import App from './App.vue'


import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import Axios from "axios"
Vue.prototype.$axios = Axios;
Axios.defaults.baseURL = '/api'

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
