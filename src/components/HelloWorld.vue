<!--
 * @Descripttion: 
 * @version: 
 * @Author: liqiang
 * @email: 497232807@qq.com
 * @Date: 2021-10-16 19:44:21
 * @LastEditTime: 2021-10-17 20:03:58
-->

<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div>
          <el-button>默认按钮</el-button>
          <el-button type="primary" @click="pluginTest">插件测试</el-button>
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
      this.showLoading();
      this.$axios
        .get("/")
        .then((response) => {
          // handle success
          this.closeLoading();
          console.log(response.status);
        })
        .catch((error) => {
          // handle error
          console.log(error);
        })
        .then(() => {
          // always executed
        });
    },
    pluginTest() {
      this.SayHello();
    },
  },
};
</script>


