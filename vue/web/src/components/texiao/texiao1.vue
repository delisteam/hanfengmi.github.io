<template lang="html">
  <div class="texiao1">
    <router-link to="/"><a href="javascript:;" class="logo" ref="a"></a></router-link>
    <div class="content">
      <ul class="list clearfix">
        <li v-for="(item,indexC) in list" :key="item.name">
          <span>{{item.name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {
          name: '111',
          img: require('@/assets/img/my-web.png'),
          content: '1111'
        },
        {
          name: '222',
          img: require('@/assets/img/my-web.png'),
          content: '2222'
        },
        {
          name: '333',
          img: require('@/assets/img/my-web.png'),
          content: '33333'
        },
        {
          name: '444',
          img: require('@/assets/img/my-web.png'),
          content: '4444'
        },
        {
          name: '555',
          img: require('@/assets/img/my-web.png'),
          content: '5555'
        }
      ]
    }
  },
  watch: {},
  filters: {},
  computed: {},
  created () {},
  mounted () {
    // var list = document.getElementsByTagName('ul')[0]
    // var lis = list.getElementsByTagName('li')
    // var liPosition = []
    // // Array.prototype.slice.call(lis).forEach((e, i) => {
    // //   var item = {}
    // //   item.left = e.offsetLeft
    // //   item.top = e.offsetTop
    // //   liPosition.push(item)
    // // })
    // // console.log(liPosition)
    // // Array.prototype.slice.call(lis).forEach((e, i) => {
    // //   e.style.position = 'absolute'
    // //   e.style.left = liPosition[i].left + 'px'
    // //   e.style.top = liPosition[i].top + 'px'
    // // })
  },
  destroyed () {}
}
</script>

<style lang="scss" scoped>
.content {
  position: absolute;
  width:100%;
  height:800px;
  margin:100px 0 0 0;
  background: #f2f1f1;
  z-index: 19;
  .list{
    display: flex;
    width:80%;
    margin:100px auto;
    position: relative;
    li {
      flex:1;
      height:160px;
    }
    li:nth-of-type(1) {
      background:red;
    }
    li:nth-of-type(2) {
      background:yellow;
    }
    li:nth-of-type(3) {
      background:brown;
    }
    li:nth-of-type(4) {
      background:gray;
    }
    li:nth-of-type(5) {
      background:pink;
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
