<template>
  <div class="menu-wrapper">
    <el-row class="tac">
      <el-col :span="8">
        <el-menu
          :default-active="defaultActive.key"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          @select="handleSelect"
        >
          <el-menu-item v-for="item in menuData" :index="item.key" :key="item.key">
            <i class="el-icon-location"></i>
            <span slot="title">{{item.title}}</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="16">
        <el-menu
          :default-active="defaultSectionActive.key"
          @open="handleOpen"
          @close="handleClose"
          :default-openeds="['1','2','3','4']"
          @select="handleSectionItemSelect"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{defaultActive.title}}</span>
            </template>
            <el-menu-item-group v-for="section in defaultActive.sections" :key="section.key">
              <template slot="title">{{section.title}}</template>
              <el-menu-item :index="item.key" v-for="item in section.items" :key="item.key">{{item.title}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {menuData} from '@/utils/utils'
export default {
  name:'LayoutSidebar',
  components: {},
  data() {
    return {
      menuData,
      defaultActive:menuData[0],
      defaultSectionActive:menuData[0].sections[0].items[0]
    }
  },
  computed: {},
  watch:{
    defaultActive:function(newVal, oldVal){
     this.defaultSectionActive = newVal.sections[0].items[0]
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  methods: {
    handleSelect(index,indexPath){
      menuData.map((list)=>{
        if(list.key == index){
          this.defaultActive =list
        }
      })
    },
    handleSectionItemSelect(index,indexPath){
      console.log(index)
      console.log(indexPath)
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
<style lang='less' scoped>

</style>

<style lang='less'>
  .menu-wrapper .el-submenu__title,.menu-wrapper .el-menu-item{
    padding: 0;
    padding-left: 0px !important;
  }
</style>