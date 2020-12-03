<template>
  <div>
    login page
    {{name}},{{age}}
    <el-button @click="handleClick">点击</el-button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name:'Login',
  components: {},
  data() {
    return {}
  },
  computed: {
    ...mapState({
      name: state => state.login.name,
      age: state => state.login.age,
    })
  },
  created() {},
  mounted() {},
  methods: {
    handleClick(){
      this.$store.dispatch('login/setName','liu ranran')
    }
  }
}
</script>
<style lang='scss' scoped>

</style>