/*
 * @Description: 
 * @Author: li qiang
 * @Date: 2021-10-20 16:09:50
 * @LastEditTime: 2021-10-20 16:09:50
 */

import Vue from 'vue'
import VueRouter from 'vue-router'

import HelloWorld from '../components/HelloWorld.vue'
import Test from '../components/Test.vue'
Vue.use(VueRouter)

const routes = [
    { path: '/', component: HelloWorld },
    { path: "/test", component: Test }

]
var router= new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
})
export default router