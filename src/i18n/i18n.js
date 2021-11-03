/*
 * @Description: 
 * @Author: li qiang
 * @Date: 2021-11-03 14:18:02
 * @LastEditTime: 2021-11-03 14:35:00
 */

//i18n
import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)
const messages = {
    en: {
      message: {
        hello: 'hello world',
        login: 'login',
        remberpw:'rember password',
        password:'password',
        username:'username',
        changeLanguage:'ChangeLanguage',
      }
    },
    zh: {
      message: {
        hello: '你好世界',
        login: '登录',
        remberpw:'记住密码',
        password:'密码',
        username:'用户名',
        changeLanguage:'切换语言',
      }
    }
  }

const i18n = new VueI18n({
    locale: 'zh', // 设置语言环境
    messages
})

export default i18n
