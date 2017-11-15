<template lang="html">
  <div class="seeMe">
    <top-header :personsIn='persons' :hide='route'></top-header>
    <Row class="thisMe" type="flex" justify="center">
        <Col class="item-box" :xs="24" :sm="20" :md="16" :lg="10">
          <img :src="img" class="my-jl">
        </Col>
    </Row>
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
      route: false,
      img: require('@/assets/img/hanfengmi.png')
    }
  },
  watch: {},
  methods: {},
  filters: {},
  computed: {},
  created () {
    console.log(document.getElementsByTagName('img'), 123)
  },
  mounted () {},
  destroyed () {}
}
</script>

<style lang="scss" scoped>
.thisMe {
  background: rgb(48,48,48);
  position:relative;
  color:#000;
  margin:350px auto 0 auto;
  img {
    width:100%;
    border-bottom:1px solid #bebebe;
  }
}
</style>
