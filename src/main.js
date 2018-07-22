// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { sync } from 'vuex-router-sync'
import store from './store'
import router from './router/index'
import * as filters from './filters'
import mixins from './mixins'
import VueNavigation from 'vue-navigation'
import utils from './utils/index'
import { WechatPlugin, AjaxPlugin, ToastPlugin } from 'vux'

Vue.use(WechatPlugin)

Vue.use(AjaxPlugin)

Vue.use(ToastPlugin, { width: 'auto' })

Vue.config.productionTip = false

const FastClick = require('fastclick')
FastClick.attach(document.body)

sync(store, router)

Vue.use(VueNavigation, {router, store, moduleName: 'navigation', keyName: 'sn'})

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// register global mixins.
Vue.mixin(mixins)

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title) {
    utils.kit.title(to.meta.title)
  }
  store.commit('PAGE_LOADING', {
    isLoading: true
  })
  next()
})

router.afterEach(to => {
  setTimeout(() => {
    store.commit('PAGE_LOADING', {
      isLoading: false
    })
  }, 300)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
