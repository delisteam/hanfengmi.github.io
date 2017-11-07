<template lang="html">
  <div class="seeMe">
    <top-header :personsIn='persons' :hide='route'></top-header>
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

<style lang="css" scoped>
</style>
