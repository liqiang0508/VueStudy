<!--
 * @Description: 
 * @Author: li qiang
 * @Date: 2021-10-18 12:08:50
 * @LastEditTime: 2021-10-18 12:08:51
-->
<template>
  <div>
    <P> I am test </P>
    <!-- <router-link to="/">Go to home</router-link> -->
    <el-button type="primary" @click="backHome">Go Home</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    backHome() {
      this.$router.push("/");
    },
  },
};
</script>