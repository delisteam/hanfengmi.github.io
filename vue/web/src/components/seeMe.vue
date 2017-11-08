<template lang="html">
  <div class="seeMe">
    <top-header :personsIn='persons' :hide='route'></top-header>
    <div class="thisMe">
      大吉大利，今晚吃鸡
    </div>
  </div>
</template>

<script>
import TopHeader from '@/components/header'
export default {
  props: ['persons'],
  components: {
    TopHeader: TopHeader
  },
  data () {
    return {
      route: false
    }
  },
  watch: {},
  methods: {},
  filters: {},
  computed: {},
  created () {},
  mounted () {},
  destroyed () {}
}
</script>

<style lang="scss" scoped>
.thisMe {
  background: pink;
  position:relative;
  color:#000;
  height:500px;
  margin:520px auto 0 auto;
}
</style>
