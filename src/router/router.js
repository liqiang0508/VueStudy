/*
 * @Description: 
 * @Author: li qiang
 * @Date: 2021-10-20 16:09:50
 * @LastEditTime: 2021-11-03 10:19:56
 */

import Vue from 'vue'
import VueRouter from 'vue-router'

import HelloWorld from '../components/HelloWorld.vue'
import Login from '../view/login/Login.vue'
// import Test from '../components/Test.vue'
Vue.use(VueRouter)

const routes = [
    { path: '/', component: Login },
    { path: "/test", component: HelloWorld }

]
var router= new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
})
export default router