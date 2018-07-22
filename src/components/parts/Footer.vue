<template>
    <div class="footer_container">
      <tabbar>
        <tabbar-item v-for="(item, index) in tabbarItems" :key="index" :selected="index === activeItem" @on-item-click="tabbarClick">
          <svg slot="icon">
            <use :xlink:href="'#' + item.name"></use>
          </svg>
          <svg slot="icon-active" class="active">
            <use :xlink:href="'#' + item.name"></use>
          </svg>
          <span slot="label" v-text="item.text"></span>
        </tabbar-item>
      </tabbar>
    </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'
import { mapState } from 'vuex'
export default {
  name: 'Footer',
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      tabbarItems: state => state.footer.items,
      activeItem: state => state.footer.active
    })
  },
  methods: {
    tabbarClick (e) {
      this.$router.replace({
        name: this.tabbarItems[Number(e)].pathName
      })
    },
    findItemByPathName (name) {
      let outIndex = -1
      let i = 0
      let tabbars = this.tabbarItems
      for (i; i < tabbars.length; i++) {
        if (name === tabbars[i].pathName) {
          outIndex = i
          i = tabbars.length
        }
      }
      return outIndex
    },
    initSelected () {
      let _selectedIndex = this.findItemByPathName(this.$route.name)
      this.$store.commit('footer/updateSelected', {
        selectedIndex: _selectedIndex
      })
    }
  },
  mounted () {
    this.initSelected()
  },
  watch: {
    '$route' (val) {
      this.initSelected()
    }
  },
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>

<style scoped lang="less">
  .footer_container {

  }
  svg {
    width: 27px;
    height: 27px;
    fill: #c8c8c8;
  }
  svg.active {
    fill: @tabbar-text-active-color;
  }
</style>
