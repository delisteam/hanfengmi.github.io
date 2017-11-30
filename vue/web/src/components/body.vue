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
              <router-link :to="{ name: item.route}" v-show="!item.href">
              <!-- <router-link :to="item.route" v-show="!item.href"> -->
                <img :src='item.img'>
                <div class="shadow" :class="{'show': item.noShow}">
                  <div class="discript">
                    <h2>{{item.intru.title}}</h2>
                    <p class="clearfix"><span>使用技术：</span><span v-html="item.intru.content[0]"></span></p>
                    <p class="clearfix"><span>工作内容：</span><span v-html="item.intru.content[1]"></span></p>
                  </div>
                </div>
                <span class="small-tip" @mouseenter="toggleShow(indexP,indexC)" @mouseleave="toggleShow(indexP,indexC)">
                  <i></i><i></i><i></i>
                </span>
              </router-link>
              <a :href='item.href' v-show="item.href">
                <img :src='item.img'>
                <div class="shadow" :class="{'show': item.noShow}">
                  <div class="discript">
                    <h2>{{item.intru.title}}</h2>
                    <p class="clearfix"><span>使用技术：</span><span v-html="item.intru.content[0]"></span></p>
                    <p class="clearfix"><span>工作内容：</span><span v-html="item.intru.content[1]"></span></p>
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
      pro: [
        {
          title: '工作项目',
          list: [
            {
              img: require('@/assets/img/work-back.png'),
              href: 'http://adadm.calli-media.com',
              // route: 'Work1',
              intru: {
                title: 'iptv后台管理系统',
                content: [
                  'bootstrap框架, echarts可视化图表,jquery,arttemplate渲染模板',
                  '1.使用bootstrap构建响应式前端页面。</br> 2.调用后端接口请求数据，对数据进行整理后渲染到模板显示。</br> 3.封装常用函数库以及常用组件。</br> 4.使用echarts将数据可视化，根据需求修改配置，自定义显示样式'
                ]
              }
            },
            {
              img: require('@/assets/img/xcc.png'),
              route: 'Work2',
              intru: {
                title: '社交小程序',
                content: [
                  '微信小程序, websocket',
                  '1.根据设计图展示页面。</br> 2.舍弃原生操作DOM方式进行网页开发，根据数据绑定，对数据进行操作更新页面。</br> 3.封装后台接口，统一处理异常。</br> 4.封装常用组件，重复调用。 </br> 5.根据微信小程序api完成项目所需上传、tabbar切换、video播放等功能'
                ]
              }
            },
            {
              img: require('@/assets/img/www.png'),
              href: 'http://www.calli-media.com',
              intru: {
                title: '尔邦官网',
                content: [
                  'fullpage.js, jquery, wow.js, animate.css',
                  '1.设计图展示页面，实现动画效果。</br> 2.响应式布局，适应各尺寸PC端展示。</br> 3.主流浏览器的兼容'
                ]
              }
            }
          ]
        },
        {
          title: '临摹网站',
          list: [
            {
              img: require('@/assets/img/auto-change.png'),
              href: 'https://hanfengmi.github.io/auto-change',
              intru: {
                title: '自适应网站',
                content: [
                  'css3动画, @media媒询',
                  '1.原生html布局。</br> 2.css3制作背景变化动画。</br> 3.使用media媒体查询制作自适应。</br>'
                ]
              }
            },
            {
              img: require('@/assets/img/my-web.png'),
              href: 'https://hanfengmi.github.io/my-web',
              intru: {
                title: '特效网站',
                content: [
                  '原生html布局, 原生js, css3动画, svg画图, js面向对象编程, 封装js动画库',
                  '1.原生html布局。</br> 2.使用hashchange对页面hash变化监测，控制页面显示。</br> 3.首页使用3D动画效果。</br>'
                ]
              }
            },
            {
              img: require('@/assets/img/monilvzuan.png'),
              href: 'https://hanfengmi.github.io/monilvzuan',
              intru: {
                title: '模拟绿钻官网',
                content: [
                  '原生html布局',
                  '1.原生html布局，符合W3C页面布局标准。</br> 2.使用float与position混合布局，达到页面显示效果'
                ]
              }
            },
            {
              img: require('@/assets/img/phone.png'),
              href: 'https://hanfengmi.github.io/phone',
              intru: {
                title: '模拟携程app',
                content: [
                  '原生html, 原生js',
                  '1.原生html布局，符合W3C页面布局标准。</br> 2.js控制页面标准字体大小，页面使用rem布局，适应不同尺寸设备。</br>'
                ]
              }
            }
          ]
        },
        {
          title: '效果巴拉',
          list: [
            {
              img: require('@/assets/img/dh1.gif'),
              route: 'Texiao1',
              intru: {
                title: '火影眼睛',
                content: [
                  '火影各种眼睛',
                  '进化进化'
                ]
              }
            },
            {
              img: require('@/assets/img/dh2.gif'),
              route: 'Texiao2',
              intru: {
                title: '前段黑科技',
                content: [
                  '666啊',
                  '高级了'
                ]
              }
            },
            {
              img: require('@/assets/img/dh2.gif'),
              route: 'Texiao3',
              intru: {
                title: 'css3支付宝小鸡',
                content: [
                  '喂鸡',
                  '不许抢我的粮'
                ]
              }
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
      } else {
        this.$set(this.pro[indexP].list[indexC], 'noShow', true)
      }
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
.clearfix::after {
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
            padding: 60px 20px;
            margin-top: -200px;
            border-radius: 20px;
            h2 {
              margin:20px 0;
              color: #666;
            }
            p {
              text-align: left;
              font-size:14px;
              margin-top:10px;
              span {
                float:left;
                height:100%;
              }
              span:nth-of-type(1){
                width:30%;
                text-align: center;
                color:#333;
              }
              span:nth-of-type(2){
                width:70%;
                color:#333;
              }
            }

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
          cursor: help;
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
