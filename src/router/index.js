import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export const ProfilePages = [
]

export const HomeRouter = {
  path: '/',
  name: 'Home',
  meta: {
    title: '',
    index: 1
  },
  components: {
    HomeRouter: () => import('../components/Home.vue').then(m => m.default)
  },
  children: [
    {
      path: '/article',
      redirect: '/article/index'
    },
    {
      path: '/article/index',
      name: 'ArticleIndex',
      meta: {
        title: '文章列表',
        index: 1
      },
      components: {
        ContentRouter: () => import('../components/pages/article/index.vue').then(m => m.default)
      }
    },
    {
      path: '/profile',
      redirect: '/profile/index'
    },
    {
      path: '/profile/index',
      name: 'ProfileIndex',
      meta: {
        title: '个人中心',
        index: 1
      },
      components: {
        ContentRouter: () => import('../components/pages/profile/index.vue').then(m => m.default)
      }
    }
  ]
}

window.addEventListener('popstate', function (e) {
  Router.isBack = true
}, false)

export default new Router({
  mode: 'history',
  routes: [
    HomeRouter,
    ...ProfilePages
  ]
})
