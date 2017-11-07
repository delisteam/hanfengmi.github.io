<template lang="html">
  <div class="body">
    <Affix :offset-top="300" class="right-button">
      <ButtonGroup vertical>
          <Button type="ghost" icon="social-whatsapp" @click="instance('phone')"></Button>
          <Button type="ghost" icon="social-facebook" @click="instance('face')"></Button>
          <Button type="ghost" icon="email" @click="instance('email')"></Button>
          <Button type="ghost" icon="social-github" @click="instance('github')"></Button>
      </ButtonGroup>
    </Affix>
    <Row class="item-list" >
        <Col class="item-box" :xs="24" :sm="12" :md="8" :lg="8" v-for="(ele,indexP) in pro" :key='ele.title'>
          <h3>{{ele.title}}</h3>
          <ul class="web-work clearfix" >
            <li v-for="(item,indexC) in ele.list" :key="item.href">
              <a :href='item.href'>
                <img :src='item.img'>
                <div class="shadow" :class="{'show': item.noShow}">
                  <div class="discript">

                  </div>
                </div>
                <span class="small-tip" @mouseenter="toggleShow(indexP,indexC)" @mouseleave="toggleShow(indexP,indexC)">
                  <i></i><i></i><i></i>
                </span>
              </a>
            </li>
          </ul>
        </Col>
    </Row>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      pro: [{
        title: '临摹网站',
        list: [
          {
            img: require('@/assets/img/auto-change.png'),
            href: 'https://hanfengmi.github.io/auto-change'
          },
          {
            img: require('@/assets/img/my-web.png'),
            href: 'https://hanfengmi.github.io/my-web'
          },
          {
            img: require('@/assets/img/monilvzuan.png'),
            href: 'https://hanfengmi.github.io/monilvzuan'
          },
          {
            img: require('@/assets/img/phone.png'),
            href: 'https://hanfengmi.github.io/phone'
          }
        ]
      },
      {
        title: '工作项目',
        list: [
          {
            img: require('@/assets/img/work-back.png'),
            href: 'https://hanfengmi.github.io/auto-change'
          },
          {
            img: require('@/assets/img/xcc.png'),
            href: 'https://hanfengmi.github.io/auto-change'
          }
        ]
      },
      {
        title: '一顿咸鱼',
        list: [
          {
            img: require('@/assets/img/my-web.png'),
            href: 'https://hanfengmi.github.io/my-web'
          }
        ]
      }
      ]}
  },
  props: ['personsIn'],
  watch: {},
  filters: {},
  computed: {},
  created () {},
  mounted () {},
  destroyed () {},
  methods: {
    instance (type) {
      var that = this
      switch (type) {
        case 'phone':
          this.$Modal.info({
            title: '太乐峰',
            content: this.personsIn.tel + '<p>请给我打call</p>'
          })
          break
        case 'email':
          this.$Modal.info({
            title: '益脉澳',
            content: this.personsIn.email + '<p>敢给我发邮件吗？</p>'
          })
          break
        case 'face':
          this.$Modal.error({
            title: '非死不可',
            content: this.personsIn.face
          })
          break
        case 'github':
          this.$Modal.warning({
            title: '给特哈勃',
            content: '想带你去浪漫的github'
          })

          setTimeout(function () {
            window.location.href = that.personsIn.github
          }, 1000)
          break
      }
    },
    toggleShow (indexP, indexC) {
      if (this.pro[indexP].list[indexC].noShow) {
        this.$set(this.pro[indexP].list[indexC], 'noShow', false)
        console.log(1)
      } else {
        this.$set(this.pro[indexP].list[indexC], 'noShow', true)
        console.log(2)
      }

      // this.pro[indexP].list[indexC].noShow = true
      // console.log(this.pro[indexP].list[indexC])
      // if (this.show) {
      //
      // }
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes big {
  0% {
    transform: scale(0.5);
    opacity: 1;
  }
  100% {
    transform: scale(2.5);
    opacity: 0;
  }
}
.body {
  // margin-top:520px;
  background: #fff;
  position:relative;
  color:#000;
  margin:500px auto 0 auto;
}
.clearfix {
  content: '';
  display: block;
  clear:both;
}
.right-button {
  position: absolute;
  top:60px;
  left:0px;
}
.item-list {
  width:80%;
  height:100%;
  margin:0 auto;
  padding-top:20px;
  h3 {
    height:30px;
    font-weight: 400;
    line-height: 30px;
  }
  .item-box {
    ul {
      li {
        width:100%;
        box-sizing: border-box;
        padding: 5px;
        padding-bottom:20px;
        margin-bottom:20px;
        border-bottom:3px solid #c7c7c7;
        float: left;
        position: relative;
        .show {
          display: block !important;
        }
        .shadow {
          position:absolute;
          width:100%;
          height:100%;
          top:0;
          left:0;
          background: rgba(0,0,0,.5);
          display: none;
          .discript {
            width:100%;
            height:400px;
            background: rgba(250,250,250,.9);
            position:absolute;
            box-sizing: border-box;
            top:50%;
            margin-top: -200px;
            border-radius: 20px;
          }
        }
        img {
          width:100%;
          transition: .5s;
          &:hover {
            transform: scale(1.02);
            z-index:99;
          }
        }
        .small-tip {
          display:inline-block;
          position:absolute;
          width:20px;
          height:20px;
          right:10%;
          bottom:50%;
          border-radius:50%;
          // cursor: url('../assets/img/sb.ico'),default;
          i {
            position:absolute;
            border-radius: 50%;
            width:16px;
            height:16px;
            margin-top:-8px;
            margin-left:-8px;
            left:50%;
            top:50%;
            transform-origin: center center;
            border:1px solid #000;
            /*transform: scale(0.5);*/
          }
          i:nth-of-type(1) {
            animation:big 2.4s linear 1.6s infinite;
          }
          i:nth-of-type(2) {
            animation:big 2.4s linear .8s infinite;
          }
          i:nth-of-type(3) {
            animation:big 2.4s linear infinite;
          }
        }
      }
    }
  }
}
</style>
