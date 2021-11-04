/*
 * @Description: 
 * @Author: li qiang
 * @Date: 2021-10-20 16:09:50
 * @LastEditTime: 2021-11-04 20:46:42
 */

import NProgress from 'nprogress'
import 'nprogress/nprogress.css' // progress bar style
import Vue from 'vue'
import VueRouter from 'vue-router'

import HelloWorld from '../components/HelloWorld.vue'
import Login from '../view/login/Login.vue'
import Test from '../components/Test.vue'
Vue.use(VueRouter)

const routes = [
    { path: '/', component: Login },
    { path: "/home", component: HelloWorld },
    { path: "/test", component: Test }

]
const whiteList = ["/"]
var router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
})
router.beforeEach((to, from, next) => { // 路由独享守卫
    NProgress.start()
    var name = localStorage.getItem("username")
    console.log("name", name)
    if (name == "admin") //登录了
    {
        next()
    } else//没登录
    {
        if (whiteList.indexOf(to.path) === -1) { //没在白名单
            next(`/?redirect=${to.path}`)
        }
        else { //在白名单
            next()
        }
    }


})

router.afterEach(() => {
    NProgress.done()
})
export default router