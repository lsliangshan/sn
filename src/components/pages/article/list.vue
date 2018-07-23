<template>
    <div class="article_list_container">
      <article-detail v-for="(item, index) in articles" :key="index" :data="item"></article-detail>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'ArticleList',
  data () {
    return {}
  },
  computed: {
    ...mapState({
      articles: state => state.article.articles,
      pageIndex: state => state.article.pageIndex,
      pageSize: state => state.article.pageSize,
      totalCounts: state => state.article.totalCounts,
      count: state => state.article.count,
      total: state => state.article.total
    })
  },
  methods: {
    ...mapActions('article', [
      'getArticles'
    ])
  },
  created () {
    this.getArticles({
      pageIndex: this.pageIndex,
      pageSize: this.pageSize
    })
  },
  components: {
    ArticleDetail: () => import('./detail.vue').then(m => m.default)
  }
}
</script>

<style scoped>

</style>
