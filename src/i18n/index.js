/*
 * @Description: 
 * @Author: li qiang
 * @Date: 2021-11-03 14:18:02
 * @LastEditTime: 2021-11-03 14:42:37
 */

//i18n
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zh from './local/zh.js'
import en from './local/en.js'

Vue.use(VueI18n)
const messages = {
    en: en,
    zh: zh
}


const i18n = new VueI18n({
    locale: 'zh', // 设置语言环境
    messages
})

export default i18n
