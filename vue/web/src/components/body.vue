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
        <Col class="item-box" :xs="24" :sm="12" :md="8" :lg="8" v-for="(ele,index) in pro" :key='ele.title'>
          <h3>{{ele.title}}</h3>
          <ul class="web-work clearfix" >
            <li v-for="(item,index) in ele.list" :key="item.href">
              <a :href='item.href'><img :src='item.img'></a>
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
  props: ['persons'],
  watch: {},
  filters: {},
  computed: {},
  created () {},
  mounted () {},
  destroyed () {},
  methods: {
    instance (type) {
      switch (type) {
        case 'phone':
          this.$Modal.info({
            title: '太乐峰',
            content: this.persons.tel + '<p>请给我打call</p>'
          })
          break
        case 'email':
          this.$Modal.info({
            title: '益脉澳',
            content: this.persons.email + '<p>敢给我发邮件吗？</p>'
          })
          break
        case 'face':
          this.$Modal.error({
            title: '非死不可',
            content: this.persons.face
          })
          break
        case 'github':
          this.$Modal.warning({
            title: '给特哈勃',
            content: '不管你愿意不愿意，两秒钟以后进行跳转'
          })
          setTimeout(function () {
            window.location.href = this.person.github
          }, 1500)
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
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
        margin-bottom:40px;
        border-bottom:1px solid #c7c7c7;
        float: left;
        img {
          width:100%;
        }
      }
    }
  }
}
</style>
