<template>
  <div class="wrapper">
    <layout-header/>
    <div>
      <layout-sidebar/>
      <div>
        <layout-tabbar/>
        <app-main/>
      </div>
    </div>
  </div>
</template>

<script>
import LayoutHeader from './components/layout-header'
import LayoutSidebar from './components/layout-sidebar'
import LayoutTabbar from './components/layout-tabbar'
import AppMain from './components/app-main'
export default {
  components: {
    LayoutHeader,
    LayoutSidebar,
    LayoutTabbar,
    AppMain
  },
  data() {
    return {}
  },
  computed: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  methods: {}
}
</script>
<style lang='less' scoped>
  .wrapper{
    width: 200px;
    height: 200px;
    overflow: hidden;
  }
</style>