<template lang="html">
  <div class="header">
    <router-link to="/"><a href="javascript:;" class="logo" ref="a"></a></router-link>
    <div class="header-center" ref="headerCenter" >
      <div class="avartar"><img src="../assets/img/fan-logo-hollow.png"></div>
      <router-link to="/seeMe"><h3 class="avartar-name">{{personsIn.name}}<i v-show="hide"></i></h3></router-link>
      <h3 class="avartar-job">{{personsIn.job}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: ['personsIn', 'hide'],
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
@keyframes lToR {
  0% {top:-40px;right:30px;}
  25% {top:-45px;right:25px;}
  50% {top:-40px;right:30px;}
  75% {top:-35px;right:35px;}
  100% {top:-40px;right:30px;}
}
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
  position: relative;
  i {
    position: absolute;
    width:60px;
    height:60px;
    background: url('../assets/img/taptap.png') repeat-x;
    background-size:60px 60px;
    transform: rotate(190deg);
    top:-40px;
    right:30px;
    animation: lToR 0.4s infinite;
  }
}
.avartar-job {
  margin-top:15px;
  color:#9a9d9b;
  font-size:16px;
  font-weight: 300;
  letter-spacing: 1em;
}
</style>
