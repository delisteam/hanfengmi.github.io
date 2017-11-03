<template lang="html">
  <div class="index">
    <top-header :persons='person'></top-header>
    <inner-body :persons='person'></inner-body>
    <BackTop></BackTop>
  </div>
</template>

<script>
import TopHeader from '@/components/header'
import InnerBody from '@/components/body'
export default {
  data () {
    return {
      person: {
        name: '韩兆科',
        job: '前端菜鸟',
        tel: '15717671152',
        email: 'm15717671152@163.com',
        face: '你猜我告不告诉你',
        github: 'https://github.com/hanfengmi'
      }
    }
  },
  components: {
    TopHeader,
    InnerBody
  }
}
</script>

<style lang="scss" scoped>
</style>
