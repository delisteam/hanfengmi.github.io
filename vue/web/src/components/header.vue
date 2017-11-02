<template lang="html">
  <div class="header">
    <a href="javascript:;" class="logo"></a>
    <Affix :offset-top="500" class="right-button">
      <ButtonGroup vertical>
          <Button type="ghost" icon="social-whatsapp" @click="instance('phone')"></Button>
          <Button type="ghost" icon="social-facebook" @click="instance('face')"></Button>
          <Button type="ghost" icon="email" @click="instance('email')"></Button>
          <Button type="ghost" icon="social-github" @click="instance('github')"></Button>
      </ButtonGroup>
    </Affix>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {}
  },
  props: {},
  watch: {},
  methods: {
    instance (type) {
      switch (type) {
        case 'phone':
          this.$Modal.info({
            title: '太乐峰',
            content: '15717671152<p>请给我打call</p>'
          })
          break
        case 'email':
          this.$Modal.info({
            title: '益脉澳',
            content: 'm15717671152@163.com<p>敢给我发邮件吗？</p>'
          })
          break
        case 'face':
          this.$Modal.error({
            title: '非死不可',
            content: '你猜我告不告诉你'
          })
          break
        case 'github':
          this.$Modal.warning({
            title: '给特哈勃',
            content: '不管你愿意不愿意，两秒钟以后进行跳转'
          })
          setTimeout(function () {
            window.location.href = 'https://github.com/hanfengmi'
          }, 1500)
          break
      }
    }
  },
  filters: {},
  computed: {},
  created () {},
  mounted () {},
  destroyed () {}
}
</script>

<style lang="scss" scoped>
.header {
  height:500px;
  width:100%;
}
.logo {
  position:fixed;
  top:30px;
  left:20px;
  width:50px;
  height:50px;
  background:url('../assets/img/fan-logo-hollow.png') repeat-x;
  background-size:50px 50px;
}
.right-button {
  position: absolute;
  top:700px;
  left:30px;
}
</style>
