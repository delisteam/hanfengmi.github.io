<template lang="html">
  <div class="texiao2">
    <router-link to="/"><a href="javascript:;" class="logo" ref="a"></a></router-link>
    <div class="content">
      <div class="rewriteP">
        <h2>实时编辑 CSS</h2>
        <p contenteditable="true">点击这里试一下，这和input有啥不同呢？？？？</p>
      </div>
      <div class="css3D">
        <h2>3D</h2>
        <div class="wraper">
          <div class="cube">
            <div class="q m"></div>
            <div class="h m"></div>
            <div class="z m"></div>
            <div class="y m"></div>
            <div class="s m"></div>
            <div class="x m"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@keyframes role {
  0% {transform: rotateY(0deg) rotateX(0deg);}
  100% {transform: rotateY(360deg) rotateX(360deg);}
}
.content {
  position: absolute;
  width:100%;
  height:800px;
  margin:100px 0 0 0;
  background: #f2f1f1;
  z-index: 19;
  box-sizing: border-box;
  padding:30px;
  h2 {
    text-align: left;
  }
  .rewriteP {
    p {
      text-align: left;
      text-indent: 2em;
      font-size:16px;
    }
  }
}
.logo {
  position:fixed;
  top:30px;
  left:50%;
  width:50px;
  height:50px;
  margin-left:-25px;
  background:url('../../assets/img/fan-logo-hollow.png') repeat-x;
  background-size:50px 50px;
  z-index: 9;
}
.wraper {
  width: 100%;
  height:400px;
  padding:50px;
  background: #fff;
  perspective: 2000px;
  perspective-origin: 20% -50%;
  .cube {
    width:200px;
    height:200px;
    margin:50px auto;
    position: relative;
    transform-style: preserve-3d;
    // transform: rotateY(30deg) rotateX(-30deg);
    // transform: rotateY(10deg);
    animation: role 3s linear infinite;
    .m {
      position: absolute;
      width:100%;
      height:100%;
      top:0;
      left:0;
    }
    .q {
      transform: translateZ(100px);
      background: red;
    }
    .h {
      transform: translateZ(-100px);
      background: blue;
    }
    .z {
      transform: rotateY(-90deg) translateZ(100px);
      background: yellow;
    }
    .y {
      transform: rotateY(90deg) translateZ(100px);
      background: brown;
    }
    .s {
      transform: rotateX(90deg) translateZ(100px);
      background: pink;
    }
    .x {
      transform: rotateX(-90deg) translateZ(100px);
      background: black;
    }
  }
}
</style>
