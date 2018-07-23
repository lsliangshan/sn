<template>
  <div class="article_index_container">
    <article-list></article-list>
  </div>
</template>
<style scoped>
  .article_index_container {
    width: 100%;
    height: 100%;
  }
</style>
<script>
export default {
  name: 'ArticleIndex',
  data () {
    return {}
  },
  components: {
    ArticleList: () => import('./list.vue').then(m => m.default)
  }
}
</script>
