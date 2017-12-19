<template lang="html">
  <div class="me">
    <div class="body">
      <div class="seeMe clearfix">
      <!-- <router-link to="/more"><h3 class="avartar-name">详细</h3></router-link> -->
          <div class="sidebar">
                <div class="title">
                    <img src="https://diygod.b0.upaiyun.com/resume-head.png" data-action="zoom">
                    <h1></h1>
                    <h2>(゜-゜)つロ 干杯~</h2>
                </div>
                <ul class="side-info">
                    <li class="someRight">
                        <dt><i class="icon-bookmark"></i>Contact. 联系方式</dt>
                        <dd><i class="icon-phone-1"></i>电话: □□□□□</dd>
                        <dd><i class="icon-mail-alt"></i>邮箱: <a href="mailto:i@html.love" target="_blank">i@html.love</a></dd>
                        <dd><i class="icon-wechat"></i>微信: DIYgod</dd>
                        <dd><i class="icon-qq"></i>QQ: <a href="http://wpa.qq.com/msgrd?v=3&amp;uin=306578968&amp;site=qq&amp;menu=yes" target="_blank">306578968</a></dd>
                    </li>
                    <li class="someRight">
                        <dt><i class="icon-bookmark"></i>Application. 应聘岗位</dt>
                        <dd>前端工程师</dd>
                    </li>
                </ul>
                <div class="note">
                    <p>我是一个对前端和动漫由衷热爱、有趣的前端工程师。</p>
                    <p>我目前正在寻找前端工程师岗位的工作机会，希望借此为 bilibili 献上我的一点绵薄之力，快招我到碗里来吧！</p>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.clearfix::after {
  content:'';
  display: block;
  clear:both;
}
.body {
  width:100%;
  height:1000px;
  background: #fff;
  padding-top:10px;
  .seeMe {
    margin:10px auto;
    width:1200px;
    border:1px solid #000;
  }
}
.sidebar {
  float:left;
  width:300px;
  .title {
    img {
      width:200px;
    }
  }
}
</style>
