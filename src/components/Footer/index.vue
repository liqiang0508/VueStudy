<!--
 * @Description:
 * @Author: li qiang
 * @Date: 2021-11-12 10:43:12
 * @LastEditTime: 2021-11-16 10:43:04
-->
<template>
  <div class="footerContainer">
    <div class="footeritem">
      <i class="el-icon-s-home" style="color: #409eff" />
      <span>主页</span>
    </div>
    <div class="footeritem">
      <i class="el-icon-search" />
      <span>搜索</span>
    </div>
    <div class="footeritem">
      <i class="el-icon-setting" />
      <span>设置</span>
    </div>
    <div class="footeritem">
      <i class="el-icon-user-solid" />
      <span>个人</span>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.footerContainer {
  position: fixed;
  display: flex;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: rgb(200, 200, 200);
  justify-content: space-around;
  z-index: 99999;
  /* margin-bottom: 0px; */
}
.footeritem {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
