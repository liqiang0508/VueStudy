<!--
 * @Description:
 * @Author: li qiang
 * @Date: 2021-11-03 10:17:05
 * @LastEditTime: 2021-11-13 17:09:30
-->
<template>
  <div class="center">
    <div class="login-container">
      <el-form
        ref="ruleForm2"
        :model="ruleForm2"
        :rules="rules2"
        status-icon
        label-position="left"
        label-width="0px"
        class="login-page"
      >
        <h3 class="title">{{ $t("message.STR_LOGIN") }}</h3>
        <el-form-item prop="username">
          <el-input
            v-model="ruleForm2.username"
            type="text"
            auto-complete="off"
            :placeholder="$t('message.STR_USERNAME')"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="ruleForm2.password"
            type="password"
            auto-complete="off"
            :placeholder="$t('message.STR_PWD')"
            show-password
          />
        </el-form-item>
        <el-checkbox v-model="checked" class="rememberme">{{
          $t("message.STR_REMBERPWD")
        }}</el-checkbox>
        <el-form-item style="width: 100%">
          <el-button
            type="primary"
            style="width: 100%"
            :loading="logining"
            @click="handleSubmit"
          >
            {{ $t("message.STR_LOGIN") }}</el-button
          >
        </el-form-item>

        <el-form-item style="width: 100%">
          <el-button
            type="primary"
            style="width: 100%"
            :loading="logining"
            @click="changeLang"
          >
            {{ $t("message.STR_CHANGELANG") }}</el-button
          >
        </el-form-item>
        <!-- <i :class="changeIocn===true?'el-icon-edit':'el-icon-place'" @click="changeIcon" /> -->
      </el-form>
    </div>
  </div>
</template>

<script>
import { request2Sever } from "../../utils/request";
export default {
  name: "Login",
  data() {
    return {
      changeIocn: true,
      redirect: undefined,
      logining: false,
      ruleForm2: {
        username: "admin",
        password: "111111",
      },
      rules2: {
        username: [
          {
            required: true,
            message: "please enter your account",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "enter your password", trigger: "blur" },
        ],
      },
      checked: false,
    };
  },
  watch: {
    $route: {
      handler: function (route) {
        const query = route.query;
        if (query) {
          this.redirect = query.redirect;
          // this.otherQuery = this.getOtherQuery(query)
        }
      },
      immediate: true,
    },
  },
  methods: {
    changeIcon() {
      this.changeIocn = !this.changeIocn;
      console.log("changeIcon", this.iocn);
    },
    changeLang() {
      this.$i18n.locale = this.$i18n.locale === "en" ? "zh" : "en";

      // axios.get("/testData").then((res) => {
      //   console.log(res);
      // });

      request2Sever("/testData").then((res) => {
        console.log(res);
      });

      // request2Sever("http://httpbin.org/get").then((response) => {
      //   this.$message({
      //     type: "info",
      //     message: `action: ${response.statusText}`,
      //   });
      // });
    },
    handleSubmit() {
      this.$refs.ruleForm2.validate((valid) => {
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch("user/login", this.ruleForm2)
            .then(() => {
              this.$router.push({
                path: this.redirect || "/dashboard/dashboard",
              });
              this.loading = false;
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style scoped>
.center {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-container {
  display: flex;
  width: 100%;
  text-align: center;
}
.login-page {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  margin: 10% auto;
  width: 400px;
  padding: 35px 35px 15px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
label.el-checkbox.rememberme {
  margin: 0px 0px 15px;
  text-align: left;
}
.title {
  font-size: 25px;
  margin-top: 5px;
}
</style>
