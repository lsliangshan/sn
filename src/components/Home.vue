<template>
  <div class="home_container">
    <view-box body-padding-bottom="53px">
      <ls-scroll class="main_scroll_container" :options="scrollOptions">
        <router-view name="ContentRouter"></router-view>
      </ls-scroll>
      <div class="bottom_tabbars_container" slot="bottom">
        <app-footer class="app_footer"></app-footer>
      </div>
    </view-box>
  </div>
</template>

<script>
import { ViewBox } from 'vux'
export default {
  name: 'Home',
  data () {
    return {
      scrollOptions: {
        scrollbar: false
      }
    }
  },
  components: {
    ViewBox,
    AppFooter: () => import('./parts/Footer.vue').then(m => m.default),
    LsScroll: () => import('./plugins/LsScroll/LsScroll.vue').then(m => m.default)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home_container {
    width: 100%;
    height: 100%;
  }
  .main_scroll_container {
    width: 100%;
    height: 100%;
  }
  .bottom_tabbars_container {
    width: 100%;
    height: 53px;
  }
  .main_router_container {
    width: 100%;
    height: calc(100% - 50px);
  }
  .app_footer {
    width: 100%;
    height: 50px;
  }
</style>
