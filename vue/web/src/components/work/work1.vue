<template lang="html">
  <div class="work1">
    <router-link to="/"><a href="javascript:;" class="logo" ref="a"></a></router-link>
    <div class="content">
      <Row>
        <Col span="8">
          <Menu :theme="theme2">
            <Submenu name="1">
                <template slot="title">
                    <Icon type="ios-paper"></Icon>
                    内容管理
                </template>
                <MenuItem name="1-1">文章管理</MenuItem>
                <MenuItem name="1-2">评论管理</MenuItem>
                <MenuItem name="1-3">举报管理</MenuItem>
            </Submenu>
          </Menu>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
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
