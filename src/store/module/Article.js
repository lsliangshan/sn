const axios = require('axios')
const querystring = require('querystring')
const instance = axios.create({
  baseURL: 'http://192.168.0.105:3000',
  timeout: 3000
})
const article = {
  namespaced: true,
  state () {
    return {
      articles: [],
      pageIndex: 0,
      pageSize: 30,
      totalCounts: 0,
      count: 0,
      total: 0
    }
  },
  mutations: {
    setArticles (state, data) {
      if (data.status === 200) {
        if (Number(data.data.pageIndex) === 1) {
          state.articles = data.data.list
        } else {
          state.articles = state.articles.concat(data.data.list)
        }
        state.pageIndex = Number(data.data.pageIndex)
        state.totalCounts = Number(data.data.totalCounts)
        state.count = Number(data.data.count)
        state.total = Number(data.data.total)
      }
    }
  },
  actions: {
    getArticles ({ state, commit, rootState }, data) {
      return new Promise((resolve) => {
        let _pageIndex = data.pageIndex ? Number(data.pageIndex) : (state.pageIndex + 1)
        instance({
          method: 'post',
          url: '/Zpm/article/getAll',
          data: querystring.stringify({
            pageIndex: _pageIndex,
            pageSize: (data.pageSize ? Number(data.pageSize) : state.pageSize),
            offsetCount: (data.offsetCount ? Number(data.offsetCount) : 0)
          })
        }).then(({ data }) => {
          commit('setArticles', data)
          resolve(data)
        })
      })
    }
  }
}

export default article
