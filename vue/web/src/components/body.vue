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
    <Row class="item-list">
        <Col class="item-box" :xs="24" :sm="12" :md="8" :lg="8">
          <ul class="web-work clearfix">
            <li>
              <a href="https://hanfengmi.github.io/auto-change"><img src="../assets/img/auto-change.png"></a>
            </li>
            <li>
              <a href="https://hanfengmi.github.io/monilvzuan"><img src="../assets/img/monilvzuan.png"></a>
            </li>
            <li>
              <a href="https://hanfengmi.github.io/my-web"><img src="../assets/img/my-web.png"></a>
            </li>
            <li>
              <a href="https://hanfengmi.github.io/phone"><img src="../assets/img/phone.png"></a>
            </li>
          </ul>
        </Col>
        <Col class="item-box2" :xs="24" :sm="12" :md="8" :lg="8">
          <ul class="web-before clearfix">
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </Col>
        <Col class="item-box3" :xs="24" :sm="12" :md="8" :lg="8">
          <ul class="web-work clearfix">
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </Col>
    </Row>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {}
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
  .item-box {
    ul {
      li {
        width:100%;
        box-sizing: border-box;
        padding: 5px;
        margin-bottom:40px;
        float: left;
        img {
          width:100%;
        }
      }
    }
  }
  .item-box2 {
    background: blue;
  }
  .item-box3 {
    background: yellow;
    height: 800px;
  }
}
</style>
