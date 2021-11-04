/*
 * @Description: 
 * @Author: li qiang
 * @Date: 2021-11-03 14:18:02
 * @LastEditTime: 2021-11-04 11:53:22
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
//浏览器语言
// http://www.lingoes.net/zh/translator/langcode.htm
let lang = navigator.language
let langCode = lang.substr(0, 2)
if (messages[langCode] === undefined ){
    langCode = 'zh'
}
const i18n = new VueI18n({
    locale: langCode, // 设置语言环境
    messages
})

export default i18n
