<template lang="html">
  <div class="index">
    <top-header :personsIn='persons' :hide='route'></top-header>
    <inner-body :personsIn='persons'></inner-body>
    <BackTop></BackTop>
  </div>
</template>

<script>
import TopHeader from '@/components/header'
import InnerBody from '@/components/body'
export default {
  props: ['persons'],
  data () {
    return {
      route: true
    }
  },
  components: {
    TopHeader,
    InnerBody
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>
