/*
 * @Descripttion:
 * @version:
 * @Author: liqiang
 * @email: 497232807@qq.com
 * @Date: 2021-10-17 19:49:01
 * @LastEditTime: 2021-11-04 19:22:24
 */

let MyUtils = {

    install(Vue) {
        Vue.prototype.loadingInStance = null,
            Vue.prototype.SayHello = function () {
                console.log("myUtils sayhello")
            },
            //打开loading
            Vue.prototype.showLoading = function (param = {}) {
                if (Vue.prototype.loadingInStance) {
                    return
                }
                const loading = this.$loading({
                    lock: param.lock ? param.lock : true,
                    text: param.text ? param.text : "Loading",
                    spinner: param.spinner ? param.spinner : "el-icon-loading",
                    background: param.background ? param.background : "rgba(0, 0, 0, 0.7)",
                });
                Vue.prototype.loadingInStance = loading
            },
            //关闭loading
            Vue.prototype.closeLoading = function () {
                if (Vue.prototype.loadingInStance) {
                    Vue.prototype.loadingInStance.close()
                    Vue.prototype.loadingInStance = null
                }

            }
    },
}
export default MyUtils