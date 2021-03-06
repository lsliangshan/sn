/***
 **                                                          _ooOoo_
 **                                                         o8888888o
 **                                                         88" . "88
 **                                                         (| -_- |)
 **                                                          O\ = /O
 **                                                      ____/`---'\____
 **                                                    .   ' \\| |// `.
 **                                                     / \\||| : |||// \
 **                                                   / _||||| -:- |||||- \
 **                                                     | | \\\ - /// | |
 **                                                   | \_| ''\---/'' | |
 **                                                    \ .-\__ `-` ___/-. /
 **                                                 ___`. .' /--.--\ `. . __
 **                                              ."" '< `.___\_<|>_/___.' >'"".
 **                                             | | : `- \`.;`\ _ /`;.`/ - ` : | |
 **                                               \ \ `-. \_ __\ /__ _/ .-` / /
 **                                       ======`-.____`-.___\_____/___.-`____.-'======
 **                                                          `=---='
 **
 **                                       .............................................
 **                                              佛祖保佑             永无BUG
 **                                      佛曰:
 **                                              写字楼里写字间，写字间里程序员；
 **                                              程序人员写程序，又拿程序换酒钱。
 **                                              酒醒只在网上坐，酒醉还来网下眠；
 **                                              酒醉酒醒日复日，网上网下年复年。
 **                                              但愿老死电脑间，不愿鞠躬老板前；
 **                                              奔驰宝马贵者趣，公交自行程序员。
 **                                              别人笑我忒疯癫，我笑自己命太贱；
 **                                              不见满街漂亮妹，哪个归得程序员？
 */
/**
 * Created by liangshan on 2017/7/13.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

import Footer from './module/Footer.js'
import Article from './module/Article.js'

Vue.use(Vuex)

const PROTOCOL = location.protocol

const store = new Vuex.Store({
  actions: actions.actions,
  mutations: mutations.mutations,
  getters: getters.getters,
  modules: {
    footer: Footer,
    article: Article
  },
  state: {
    author: '智愚',
    appName: 'ZPM_PLUGINS',
    fullAppName: 'ZPM_PLUGINS后台管理系统',
    loadingStatus: {
      page: false
    },
    socket: {
      // server: PROTOCOL + '//wss.dei2.com',
      server: PROTOCOL + '//192.168.0.105',
      port: '3010',
      path: '/sk',
      event: 'enkel-message',
      client: {}
    },
    socketEvents: {
      changeUserRole: 'change-user-role',
      reviewPlugin: 'review-plugin',
      sendMessage: 'send-message'
    },
    localStorageKeys: {
    },
    events: {
    },
    assets: {
    },
    requestInfo: {
      baseUrl: PROTOCOL + '//192.168.0.105:3000',
      // baseUrl: PROTOCOL + '//talkapi.dei2.com',
      login: '/Zpm/user/login',
      register: '/Zpm/user/register'
    },
    loginInfo: {
    },
    needlessLogin: ['Login', 'Register', 'Forget', 'ActivityPreview', 'ArticleList', 'ArticleView'] // 不需要登录的页面
  }
})

export default store

global.store = store
