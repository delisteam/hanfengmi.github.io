<template lang="html">
  <div class="texiao1">
    <router-link to="/"><a href="javascript:;" class="logo" ref="a"></a></router-link>
    <Row class="content" type="flex" justify="center">
      <Col class="eyes" :xs="24" :sm="12" :md="8" :lg="8">
        <div class="face clearfix">
          <div class="eye l-eye">
            <div class="see">
              <svg width="120px" height="70px" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path d="M 0 70 C 25 25, 40 15, 120 0 Z" stroke="#fff" fill="#fff"/>
                <path d="M 0 70 C 45 75, 100 65, 120 0 Z" stroke="#fff" fill="#fff"/>
                <path d="M 0 70 C 25 25, 40 15, 120 0 C 120 18, 15 20, 0 70 Z" stroke="#bfbfbf" fill="#bfbfbf"/>
                <path d="M 0 70 C 45 75, 100 65, 120 0 C 100 25, 80 70, 60 60 C 50 70, 30 70, 0 70z" stroke="#bfbfbf" fill="#bfbfbf"/>
              </svg>
              <div class="eye-ball" :style="eyeColor">
                <span class="shan"></span>
                <span class="xian" :style="xianColor"></span>
              </div>
            </div>
          </div>
          <div class="eye r-eye">
            <div class="see">
              <svg width="120px" height="70px" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path d="M 0 70 C 25 25, 40 15, 120 0 Z" stroke="#fff" fill="#fff"/>
                <path d="M 0 70 C 45 75, 100 65, 120 0 Z" stroke="#fff" fill="#fff"/>
                <path d="M 0 70 C 25 25, 40 15, 120 0 C 120 18, 15 20, 0 70 Z" stroke="#bfbfbf" fill="#bfbfbf"/>
                <path d="M 0 70 C 45 75, 100 65, 120 0 C 100 25, 80 70, 60 60 C 50 70, 30 70, 0 70z" stroke="#bfbfbf" fill="#bfbfbf"/>
              </svg>
              <div class="eye-ball" :style="eyeColor">
                <span class="shan" ></span>
                <span class="xian" :style="xianColor"></span>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
    <button class="jinhua" type="button" name="button" @click="jinhua()">进化---未完成。。。。</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      eyeColor: 'background:#000',
      xianColor: 'border:1px solid #000'
    }
  },
  watch: {},
  filters: {},
  computed: {},
  methods: {
    jinhua () {
      this.$set(this, 'eyeColor', 'background:red')
      this.$set(this, 'xianColor', 'border:1px solid #e80000')
      // this.$set(this.pro[indexP].list[indexC], 'noShow', false)
    }
  },
  created () {},
  mounted () {},
  destroyed () {}
}
</script>

<style lang="scss" scoped>
.jinhua {
  position: absolute;
  margin-top:400px;
  z-index: 99;
}
.content {
  position: absolute;
  width:100%;
  height:800px;
  margin:100px 0 0 0;
  background: #f2f1f1;
  z-index: 19;
  .eyes {
    background: #000;
    height:200px;
    margin-top:50px;
    .face {
      width:100%;
      padding:0 30px;
      box-sizing: border-box;
      height:200px;
      border:1px solid #fff;
      margin:0 auto;
      .eye {
        width:120px;
        height:200px;
        .see {
          width:100%;
          height:70px;
          background: #000;
          margin:50px 0;
          position: relative;
          overflow: hidden;
          .eye-ball {
            position: absolute;
            width:50px;
            height:50px;
            left:50%;
            top:50%;
            margin-top:-20px;
            margin-left:-25px;
            border-radius: 50%;
            border:2px solid #000;
            box-shadow: inset 0px 0px 4px 1px #000;
            transition: 1s;
            .shan {
              position: absolute;
              width:10px;
              height:10px;
              background: #fff;
              top:15%;
              left:25%;
              border-radius: 50%;
              z-index:999;
            }
            .xian {
              position: absolute;
              width:36px;
              height:36px;
              left:50%;
              top:50%;
              margin-top:-18px;
              margin-left:-18px;
              border-radius: 50%;
            }
          }
        }
      }
       .r-eye {
         float: right;
         .eye-ball span{

         }
       }
       .l-eye {
        float: left;
        transform: rotateY(180deg);
       }
    }
  }
}
.clearfix::after {
  content:'';
  clear:both;
  display: block;
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
</style>
