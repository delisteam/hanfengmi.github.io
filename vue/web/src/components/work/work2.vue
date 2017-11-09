<template lang="html">
  <div class="work2">
    <router-link to="/"><a href="javascript:;" class="logo" ref="a"></a></router-link>
    <div class="content">
      <Icon :type="tapName?'chevron-right':'chevron-left'" class="tap" :class="{'tap-left-hide': !tapName}" size="20" @click.native="canSee"></Icon>
      <transition name="custom-classes-transition"
                  enter-active-class="animated bounceInLeft"
                  leave-active-class="animated bounceOutLeft">
      <Menu :theme="theme2" accordion class="con-left" v-if="tapName"><!--:class="{'con-left-hide': tapName}"-->
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
            <h2><a :href='item.hash'>{{item.title}}</a></h2>
            <div class="img-content clearfix">
              <p>qewqe</p>
              <img :src="item.img" alt="">
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
                img: require('@/assets/img/xcc.png')
              },
              {
                name: '1-2',
                hash: '#pindao-2',
                title: '频道列表',
                img: require('@/assets/img/xcc.png')
              },
              {
                name: '1-3',
                hash: '#pindao-3',
                title: '话题列表',
                img: require('@/assets/img/xcc.png')
              }
            ]
          },
          {
            name: 2,
            type: 'ios-people',
            title: '消息',
            li: [
              {
                name: '2-1',
                hash: '#xiaoxi-1',
                title: '滚动广告',
                img: require('@/assets/img/xcc.png')
              },
              {
                name: '2-2',
                hash: '#xiaoxi-2',
                title: '话题回复',
                img: require('@/assets/img/xcc.png')
              },
              {
                name: '2-3',
                hash: '#xiaoxi-3',
                title: '直播间',
                img: require('@/assets/img/xcc.png')
              }
            ]
          },
          {
            name: 3,
            type: 'ios-people',
            title: '话题',
            li: [
              {
                name: '3-1',
                hash: '#huati-1',
                title: '话题列表',
                img: require('@/assets/img/xcc.png')
              },
              {
                name: '3-2',
                hash: '#huati-2',
                title: '话题详情',
                img: require('@/assets/img/xcc.png')
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
                img: require('@/assets/img/xcc.png')
              },
              {
                name: '4-2',
                hash: '#wode-2',
                title: '相册',
                img: require('@/assets/img/xcc.png')
              },
              {
                name: '4-3',
                hash: '#wode-3',
                title: '反馈',
                img: require('@/assets/img/xcc.png')
              },
              {
                name: '4-4',
                hash: '#wode-4',
                title: '粉丝关注',
                img: require('@/assets/img/xcc.png')
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
    }
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
    left:250px;
    top:20%;
    cursor: pointer;
    &:hover {
      color:#000
    }
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
  .item {
  }
  .img-content {
    p {
      width:50%;
      float:left;
    }
    img {
      float:left;
      width:100%;
      max-width:400px;
    }
  }
}
</style>
