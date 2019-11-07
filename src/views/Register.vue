<template>
  <div>
    <Sign :type="2" @didClickConfirm="clickBtn"></Sign>
  </div>
</template>

<script>
import Sign from "../components/SignComponent.vue";
import service from "../service";
// import { Toast } from "mint-ui";
import { Message, Loading } from "element-ui";

export default {
  name: "Register",
  data() {
    return {};
  },
  components: {
    Sign
  },
  methods: {
    clickBtn(username, password, repassword) {
      if (password !== repassword) {
        Message.error("两次密码不一致");
        return;
      }

      let loadingInstance = Loading.service({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
      service.register(username, password).then(res => {
        console.log(res.data);
        console.log(loadingInstance);

        loadingInstance.close();
        if (res.data.code != 1) {
          Message.error(res.data.message || "错误");
        } else {
          Message({
            showClose: true,
            message: "注册成功",
            type: "success"
          });
        }
      });
    }
  }
};
</script>
