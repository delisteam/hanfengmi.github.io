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
        <h2>拖动<span>（小bug未完善）</span></h2>
        <Button @click="changeXYD">{{changeXY}}</Button>
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
      firstXP: 0,
      firstYP: 0,
      rotate: true,
      changeXY: 'X轴旋转',
      xC: 0,
      yC: 0,
      role: 'transform: rotateY(0deg) rotateX(0deg);'
    }
  },
  watch: {},
  filters: {},
  computed: {},
  methods: {
    changeXYD () {
      if (this.rotate) {
        this.$set(this, 'changeXY', 'Y轴旋转')
        this.$set(this, 'rotate', false)
      } else {
        this.$set(this, 'changeXY', 'X轴旋转')
        this.$set(this, 'rotate', true)
      }
    },
    mouse_down (event) {
      event.target.addEventListener('mousemove', this.change_rote, false)
      event.target.addEventListener('touchmove', this.change_rote, false)
      if (window.event.pageX) {
        this.$set(this, 'firstXP', window.event.pageX)
        this.$set(this, 'firstYP', window.event.pageY)
      }
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
      // console.log(xC, yC)
      if (window.event.clientX) {
        if (this.rotate) {
          if (this.firstXP > window.event.clientX) {
            xC = -2
          } else {
            xC = 2
          }
        } else {
          if (this.firstYP <= window.event.clientY) {
            yC = 3
          } else {
            yC = -3
          }
        }
        this.$set(this, 'firstXP', window.event.clientX)
        this.$set(this, 'firstYP', window.event.clientY)
      } else {
        if (this.rotate) {
          if (this.firstXP > window.event.changedTouches[0].clientX) {
            xC = -2
          } else {
            xC = 2
          }
        } else {
          if (this.firstXP > window.event.changedTouches[0].clientY) {
            yC = -3
          } else {
            yC = 3
          }
        }
        this.$set(this, 'firstXP', window.event.changedTouches[0].clientX)
        this.$set(this, 'firstYP', window.event.changedTouches[0].clientY)
      }
      var lastXP = this.xC + xC
      var lastYP = this.yC + yC
      var rotateY = 'transform: rotateY(' + lastXP + 'deg) rotateX(' + -lastYP + 'deg);'
      // console.log(rotateY)
      this.$set(this, 'xC', lastXP)
      this.$set(this, 'yC', lastYP)
      this.$set(this, 'role', rotateY)
    }
  },
  created () {
  },
  mounted () {},
  destroyed () {}
}
</script>


// var isChoose = false;
// $('.collection').on('mouseenter',function(){//移入加显示class
// 	$(this).addClass('collect')
// })
// $('.collection').on('mouseleave',function(){//移出去掉显示class
//   if (isChoose) {
//     return false
//   }
// 	$(this).removeClass('collect');
// })
// $('.collection').on('click',function(){//点击加永久class
//   isChoose = !isChoose;
// 	$(this).addClass('collect');
// })
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
    span {
      font-size: 12px;
      color:gray;
    }
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
