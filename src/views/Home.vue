<template>
  <div>
    <HomeNav></HomeNav>

    <router-view></router-view>
  </div>
</template>

<script>
import HomeNav from "@/components/HomeNav";

export default {
  name: "Home",
  beforeCreate() {
    console.log("HelloWorld 准备jiazan");
    console.log(HomeNav.props);
  },
  components: {
    HomeNav
  }
};
</script>
