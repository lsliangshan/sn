<template>
    <div class="article_detail_container" v-html="data.content"></div>
</template>

<script>
export default {
  name: 'ArticleDetail',
  props: {
    data: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.article_detail_container {

}
</style>
