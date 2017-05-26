<template>
  <div id="app">
    <router-view v-wechat-title="$route.meta.title" @add="addCart"></router-view>
    <tabbar v-show="ismainView" ref="tabbar"></tabbar>
    <circle-menu v-show="!ismainView||$route.name == 'mycart'"></circle-menu>
  </div>
</template>

<script>
import tabbar from './components/tabbar.vue'
import circleMenu from './components/circle-menu.vue'
import Bus from './common/bus.js'
export default {
  name: 'app',
  computed: {
    ismainView() {
      if (this.$route.name == 'index' || this.$route.name == 'all' || this.$route.name == 'lottery' || this.$route.name == 'mycart' || this.$route.name == 'user') {
        return true
      } else {
        return false
      }
    }
  },
  mounted() {

  },
  methods: {
    addCart(target) {
      this._drop(target)
    },
    _drop(target) {
      // 体验优化,异步执行下落动画
      this.$nextTick(() => {
        this.$refs.tabbar.drop(target);
      });
    }
  },
  components: {
    tabbar,
    circleMenu
  }
}
</script>

<style lang="scss">
@import "./css/comm.scss";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #f1f1f1;
  position: relative;
  min-height: 100%;
  padding-bottom: $tabbar-height;
  /*给底部留*/
  box-sizing: border-box;
}
</style>
