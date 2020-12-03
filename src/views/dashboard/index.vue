<template>
  <div>
    dashboard
  </div>
</template>

<script>
export default {
  name:'Dashboard',
  components: {},
  data() {
    return {}
  },
  computed: {},
  created() {},
  mounted() {
    this.$store.dispatch('permission/generateRoutes',['admin'])
  },
  methods: {}
}
</script>
<style lang='scss' scoped>

</style>