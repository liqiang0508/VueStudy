<!--
 * @Descripttion: 
 * @version: 
 * @Author: liqiang
 * @email: 497232807@qq.com
 * @Date: 2021-10-16 19:44:21
 * @LastEditTime: 2021-10-17 19:16:55
-->

<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div>
          <el-button>默认按钮</el-button>
          <el-button type="primary">主要按钮</el-button>
          <el-button type="success" @click="httpGet">httpGet</el-button>
          <el-button type="info" @click="showAlert">弹框按钮</el-button>
          <el-button type="warning" @click="btnClick1">show mesage2</el-button>
          <el-button type="danger" @click="btnClick">show mesage</el-button>
        </div>
      </el-col>
    </el-row>
    <el-row> </el-row>
  </div>
</template>
<script>
export default {
  methods: {
    btnClick1() {
      this.$message("你好");
      console.log(this.$axios);
    },
    btnClick() {
      this.$message("你好11");
    },
    showAlert() {
      this.$alert("这是一段内容", "标题名称", {
        confirmButtonText: "确定",
        callback: (action) => {
          this.$message({
            type: "info",
            message: `action: ${action}`,
          });
        },
      });
    },
    httpGet() {
      const loading = this.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
      this.$axios({
        method: "get",
        url: "/",
      }).then(function (response) {
        console.log(response.status);
        loading.close();
      });
    },
  },
};
</script>


