<template lang="html">
  <div class="texiao2">
    <router-link to="/"><a href="javascript:;" class="logo" ref="a"></a></router-link>
    <div class="content">
      <!-- <div class="rewriteP">
        <h2>实时编辑 CSS</h2>
        <p contenteditable="true">点击这里试一下，这和input有啥不同呢？？？？</p>
      </div> -->
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
      <div class="tuodong" @mousedown.self="mouse_down($event)" @touchstart.self="mouse_down($event)" @mouseup.self="mouse_up($event)" @touchend.self="mouse_up($event)">
        <h2>拖动</h2>
        <ul :style="role">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
        </ul>
      </div>
      <div class="meme">
        <h2>更新...</h2>
        <ul>

        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      role: 'transform: rotateY(0deg) rotateX(0deg);'
    }
  },
  watch: {},
  filters: {},
  computed: {},
  methods: {
    mouse_down (event) {
      // console.log(event)
      event.target.addEventListener('mousemove', this.change_rote, false)
      event.target.addEventListener('touchmove', this.change_rote, false)
    },
    mouse_up (event) {
      // console.log(event)
      event.target.removeEventListener('mousemove', this.change_rote, false)
      event.target.removeEventListener('mouseup', this.mouse_up)
      event.target.removeEventListener('touchmove', this.change_rote, false)
      event.target.removeEventListener('touchend', this.mouse_up)
    },
    change_rote (event) {
      var xC = 0
      var yC = 0
      if (window.event.clientX) {
        xC = (window.event.clientX - event.target.offsetLeft) - (document.body.clientWidth / 2)
        yC = (window.event.clientY - event.target.offsetTop) - (document.body.clientHeight / 2)
      } else {
        xC = (window.event.changedTouches[0].clientX - event.target.offsetLeft) - (document.body.clientWidth / 2)
        yC = (window.event.changedTouches[0].clientY - event.target.offsetTop) - (document.body.clientHeight / 2)
      }
      var rotateY = 'transform: rotateY(' + xC + 'deg) rotateX(' + -yC + 'deg);'
      this.$set(this, 'role', rotateY)
    }
  },
  created () {
  },
  mounted () {
  },
  destroyed () {}
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
  margin:100px 0 0 0;
  background: #f2f1f1;
  z-index: 19;
  box-sizing: border-box;
  padding:30px;
  h2 {
    text-align: left;
    margin-top:50px;
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
.tuodong {
  overflow: hidden;
  h2 {
    margin-top:0;
    background: #f2f1f1;
  }
  width:100%;
  height:500px;
  margin-top:50px;
  background: #333;
  perspective: 1000px;
  perspective-origin: 50% 20%;
  ul {
    width:100px;
    height:150px;
    position:relative;
    margin:150px auto;
    transform-style: preserve-3d;
    transform-origin: center center -500px;
    li {
      position:absolute;
      width:100%;
      height:100%;
      background: #fff;
      font-size:50px;
      line-height:150px;
      border-radius: 10px;
      transform-origin: center center -500px;
      box-shadow:5px 5px 15px #969696,inset 5px 5px 50px #000,inset -5px -5px 50px #000;//10px 10px 20px #333333
    }
    li:nth-of-type(2){
      transform:rotateY(60deg);
    }
    li:nth-of-type(3){
      transform:rotateY(120deg);
    }
    li:nth-of-type(4){
      transform:rotateY(180deg);
    }
    li:nth-of-type(5){
      transform:rotateY(240deg);
    }
    li:nth-of-type(6){
      transform:rotateY(300deg);
    }
  }
}
</style>
