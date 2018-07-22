const footer = {
  namespaced: true,
  state () {
    return {
      items: [
        {
          name: 'article',
          text: '文章',
          icon: 'article',
          pathName: 'ArticleIndex',
          path: '/article/index'
        },
        {
          name: 'profile',
          text: '我的',
          icon: 'profile',
          pathName: 'ProfileIndex',
          path: '/profile/index'
        }
      ],
      active: 0
    }
  },
  mutations: {
    updateSelected (state, data) {
      state.active = Number(data.selectedIndex)
    }
  }
}

export default footer
