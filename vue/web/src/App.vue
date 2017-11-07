<template>
  <div id="app" >
    <!-- <img src="./assets/logo.png"> -->
    <router-view :persons='person' />
  </div>
</template>

<script>
export default {
  name: 'app',
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
  }
}
</script>

<style>
html {
  height:100%;
}
body {
  padding:0;
  margin:0;
  background: #f4f3f3 url(./assets/img/header.gif) repeat-x center top fixed;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
