<template>
  <div class="wrapper">
    <el-container>
      <el-header>
        <layout-header/>
      </el-header>
       <el-container>
        <el-aside width="260px">
          <layout-sidebar/>
        </el-aside>
        <el-main>
          <layout-tabbar/>
          <app-main/>
        </el-main>
      </el-container>
    </el-container>
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
    height: 100vh;
  }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    padding: 0px 20px;
  }
  
  .wrapper > .el-container {
    height: 100%;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>