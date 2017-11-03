<template lang="html">
  <div class="header">
    <a href="javascript:;" class="logo" ref="a"></a>
    <div class="header-center" ref="headerCenter" >
      <div class="avartar"><img src="../assets/img/fan-logo-hollow.png"></div>
      <h3 class="avartar-name">{{persons.name}}</h3>
      <h3 class="avartar-job">{{persons.job}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: ['persons'],
  components: {
  },
  data () {
    return {}
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
.header {
  height:500px;
  width:100%;
  top:0;
  position: fixed;
  .header-center {
    position: absolute;
    width:300px;
    height:200px;
    top:50%;
    left:50%;
    margin-left:-150px;
    margin-top:-100px;
  }
}
.logo {
  position:fixed;
  top:30px;
  left:20px;
  width:50px;
  height:50px;
  background:url('../assets/img/fan-logo-hollow.png') repeat-x;
  background-size:50px 50px;
  z-index: 9;
}

.avartar {
  width:100%;
  height:80px;
  img {
    width:70px;
    height:70px;
  }
}
.avartar-name {
  color:#fff;
  font-size:30px;
  font-weight: 300;
  letter-spacing: 10px;
}
.avartar-job {
  margin-top:15px;
  color:#9a9d9b;
  font-size:16px;
  font-weight: 300;
  letter-spacing: 1em;
}
</style>
