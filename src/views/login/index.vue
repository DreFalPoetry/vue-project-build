<template>
    <div class=''>
      <p @click="handleChangeDevice">login</p>
      <p>root:: {{root}}</p>
      <p>state:: {{device}}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  components: {},
  data() {
    return {}
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    console.log(this.$store)
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  computed: {
    ...mapGetters([
      'device',
      'root'
    ])
  },
  methods: {
    handleChangeDevice() {
      this.$store.dispatch('login/toggleDevice', 'mobile')
    }
  },
}
</script>
<style lang='less' scoped>

</style>