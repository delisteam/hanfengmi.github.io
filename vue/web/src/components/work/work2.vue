<template lang="html">
  <div class="work2">
    <router-link to="/"><a href="javascript:;" class="logo" ref="a"></a></router-link>
    <div class="content">
      <Icon :type="tapName?'chevron-right':'chevron-left'" class="tap" :class="{'tap-left-hide': !tapName}" size="20" @click.native="canSee"></Icon>
      <transition name="custom-classes-transition"
                  enter-active-class="animated bounceInLeft"
                  leave-active-class="animated bounceOutLeft">
      <Menu :theme="theme2" accordion class="con-left" v-if="tapName" width='150px'><!--:class="{'con-left-hide': tapName}"-->
        <Submenu v-for="(ele,indexP) in list.ul" :key='ele.type'  :name='ele.name'>
          <template slot="title">
              <Icon :type="ele.type"></Icon>
              {{ele.title}}
          </template>
          <MenuItem v-for="(item,indexC) in ele.li" :key='item.name' :name='item.name'><a class="toHash" :href='item.hash'>{{item.title}}</a></MenuItem>
        </Submenu>
      </Menu>
      </transition>
      <div class="con-right">
        <div v-for="(ele,indexP) in list.ul" :key='ele.type'>
          <div class="item" v-for="(item,indexC) in ele.li" :key='item.name' :id="item.hash.split('#')[1]">
            <h2 class="item-header"><a :href='item.hash'>{{item.title}}</a></h2>
            <div class="img-content ">
              <Row class="content-center">
                <Col class="p" :xs="24" :sm="12" :md="12" :lg="12">
                  <span><Icon :type="item.icon"></Icon> &nbsp {{item.discript[0]}}</span>
                  <span>{{item.discript[1]}}</span>
                </Col>
                <Col :xs="24" :sm="12" :md="12" :lg="12"><img :src="item.img" alt=""></Col>
              </Row>
            </div>
          </div>
        </div>
        <BackTop></BackTop>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      theme2: 'dark',
      tapName: true,
      list: {
        ul: [
          {
            name: 1,
            type: 'ios-paper',
            title: '频道',
            li: [
              {
                name: '1-1',
                hash: '#pindao-1',
                title: '滚动广告',
                icon: 'ionic',
                img: require('@/assets/img/guanggao.png'),
                discript: [
                  '滚动块,推荐内容',
                  '点击可进入相关直播室'
                ]
              },
              {
                name: '1-2',
                hash: '#pindao-2',
                title: '频道列表',
                icon: 'stats-bars',
                img: require('@/assets/img/pindaoliebiao.png'),
                discript: [
                  '频道列表',
                  '点击可进入相关频道直播，更多精彩可进入查看所有频道'
                ]
              },
              {
                name: '1-3',
                hash: '#pindao-3',
                title: '话题列表',
                icon: 'chatboxes',
                img: require('@/assets/img/huatiliebiao.png'),
                discript: [
                  '话题列表,可复用组件',
                  '点击进入列表详情页查看该话题详细内容'
                ]
              }
            ]
          },
          {
            name: 2,
            type: 'chatbubble-working',
            title: '消息',
            li: [
              {
                name: '2-1',
                hash: '#xiaoxi-1',
                title: '频道消息',
                icon: 'chatbox-working',
                img: require('@/assets/img/xiaoxi1.jpg'),
                discript: [
                  '曾进入过得直播室',
                  '会记录进入过的直播间，并且会在直播间有消息时显示提示'
                ]
              },
              {
                name: '2-2',
                hash: '#xiaoxi-2',
                title: '话题回复',
                icon: 'chatbubbles',
                img: require('@/assets/img/xiaoxi2.png'),
                discript: [
                  '话题回复消息提示',
                  '会提示被回复会被赞情况'
                ]
              },
              {
                name: '2-3',
                hash: '#xiaoxi-3',
                title: '直播间',
                icon: 'easel',
                img: require('@/assets/img/zhibohuati.jpg'),
                discript: [
                  '直播间+聊天室',
                  '上半部分是视频直播,下半部分是聊天室,点击头像可进入他人个人中心,向右滑动可查看当前频道下的话题列表以及该节目频道的播出单,在聊天室下方的多功能键可新建话题'
                ]
              }
            ]
          },
          {
            name: 3,
            type: 'fireball',
            title: '话题',
            li: [
              {
                name: '3-1',
                hash: '#huati-1',
                title: '话题列表',
                icon: 'chatboxes',
                img: require('@/assets/img/huati.png'),
                discript: [
                  '复用模块，与首页复用',
                  '点击可进入话题详情页'
                ]
              },
              {
                name: '3-2',
                hash: '#huati-2',
                title: '话题详情',
                icon: 'ios-book',
                img: require('@/assets/img/huatixiangqing.png'),
                discript: [
                  '话题标题内容',
                  '可回复题主或回复他人评论'
                ]
              }
            ]
          },
          {
            name: 4,
            type: 'ios-people',
            title: '个人中心',
            li: [
              {
                name: '4-1',
                hash: '#wode-1',
                title: '信息',
                icon: 'person',
                img: require('@/assets/img/wode.jpg'),
                discript: [
                  '个人中心',
                  '显示头像、备注、粉丝数、关注数、个人话题列表等'
                ]
              },
              {
                name: '4-2',
                hash: '#wode-2',
                title: '相册',
                icon: 'image',
                img: require('@/assets/img/xiangce.jpg'),
                discript: [
                  '展示曾上传的照片',
                  '点击图片放大'
                ]
              },
              {
                name: '4-3',
                hash: '#wode-3',
                title: '反馈',
                icon: 'ios-compose',
                img: require('@/assets/img/fankui.png'),
                discript: [
                  '用户反馈',
                  '点击可提交意见'
                ]
              },
              {
                name: '4-4',
                hash: '#wode-4',
                title: '粉丝关注',
                icon: 'andriod-favorite',
                img: require('@/assets/img/fensi.jpg'),
                discript: [
                  '粉丝或关注列表',
                  '可关注或取关，点击头像可进入他人个人中心页'
                ]
              }
            ]
          }
        ]
      }
    }
  },
  methods: {
    canSee () {
      if (this.tapName) {
        this.$set(this, 'tapName', false)
      } else {
        this.$set(this, 'tapName', true)
      }
    },
    change () {
      // this.$set(this, 'tapName', false)
      console.log(123123)
    }
  },
  mounted () {
    var that = this
    window.onmousewheel = function () {
      that.$set(that, 'tapName', false)
    }
    window.addEventListener('touchmove', function () {
      that.$set(that, 'tapName', false)
    })
  }
}
</script>

<style lang="scss" scoped>
.clearfix::after {
  content: '';
  display: block;
  clear:both;
}
.content {
  position: absolute;
  width:100%;
  margin:100px 0 0 0;
  background: #f2f1f1;
  z-index: 19;
  .toHash {
    display: inline-block;
    width:100%;
    color:#fff;
  }
  .tap {
    position: fixed;
    left:150px;
    top:20%;
    cursor: pointer;
    transition: 1s;
    z-index: 77;
  }
  .tap-left-hide {
    left:20px;
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
.con-left {
  position:fixed;
  top:100px;
}
.con-right {
  width:80%;
  margin:0 auto;
  background: #fff;
  .item-header {
    padding:10px;
  }
  .img-content {
    padding:20px 0;
    border-bottom:1px solid #666;
    .content-center {
      width:50%;
      margin:0 auto;
    }
    .p {
      margin-top:20px;

      span {
        display: block;
        font-size: 16px;
      }
      span:nth-of-type(1){
        color:#666;
        text-align: left;
        padding-bottom:10px;
      }
      span:nth-of-type(2){
        text-align: left;
        text-indent: 2em;
        color: #000;
        // text-shadow: 5px 5px 0 #666, 7px 7px 0 #eee;
      }
    }
    img {
      width:100%;
      max-width:400px;
    }
  }
}
</style>
