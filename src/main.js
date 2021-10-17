/*
 * @Descripttion: 
 * @version: 
 * @Author: liqiang
 * @email: 497232807@qq.com
 * @Date: 2021-10-16 19:44:21
 * @LastEditTime: 2021-10-17 19:40:05
 */
import Vue from 'vue'
import App from './App.vue'


import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import Axios from "axios"
Vue.prototype.$axios = Axios;
Axios.defaults.baseURL = '/api'

//打开loading
Vue.prototype.loadingInStance = null
Vue.prototype.showLoading = function (param = {}) {
  const loading = this.$loading({
    lock: param.lock ? param.lock : true,
    text: param.text ? param.text : "Loading",
    spinner: param.spinner ? param.spinner : "el-icon-loading",
    background: param.background ? param.background : "rgba(0, 0, 0, 0.7)",
  });
  Vue.prototype.loadingInStance = loading
}
//关闭loading
Vue.prototype.closeLoading = function () {
  if (Vue.prototype.loadingInStance) {
    Vue.prototype.loadingInStance.close()
  }

}
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
