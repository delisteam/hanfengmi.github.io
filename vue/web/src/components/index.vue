<template lang="html">
  <div class="index">
    <top-header></top-header>
    <inner-body></inner-body>
    <BackTop></BackTop>
    
  </div>
</template>

<script>
import TopHeader from '@/components/header'
import InnerBody from '@/components/body'
export default {
  components: {
    TopHeader,
    InnerBody
  }
}
</script>

<style lang="scss" scoped>
</style>
