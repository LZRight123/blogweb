<template>
  <div>
    <SingIn @didClickConfirm="clickLogin"></SingIn>
  </div>
</template>

<script>
import SingIn from "../components/SignComponent";
import service from "../service";

export default {
  name: "Login",
  components: {
    SingIn
  },
  mounted() {
    console.log("mounted");
    localStorage.setItem(
      "user",
      JSON.stringify({
        name: "liangze",
        age: 30
      })
    );
  },
  data() {
    return {
      isError: true,
      username: "liangze",
      password: "123456"
    };
  },
  methods: {
    clickLogin(u, p) {
      service.login(u, p).then(res => {
        console.log("回掉");
        console.log(res.data);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/font/iconfont.css";
</style>
