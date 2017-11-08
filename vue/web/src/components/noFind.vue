<template lang="html">
  <div class="noFind">
    <p>找不到页面</p>
    <router-link to="/"><a href="javascript:;">点击回首页</a></router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.noFind {
  height:500px;
  color:#fff;

  p {
    font-size:30px;
    line-height:400px;
  }
  a {
    font-size:20px;
    color:#fff;
    transition: 1.5s;
    &:hover {
      color: yellow;
    }
  }
}
</style>
